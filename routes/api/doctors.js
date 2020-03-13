const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// Loading Middleware
const auth = require("../../middleware/auth");

// Loading Models
const Hospital = require("../../models/Hospital");
const Doctor = require("../../models/Doctor");
const Record = require("../../models/Record");
const Report = require("../../models/Report");

// File Upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/doctor/avatar");
  },

  filename: function(req, file, cb) {
    if (file.mimetype === "image/jpeg") {
      cb(null, req.body.registerNumber + ".jpg");
    } else if (file.mimetype === "image/png") {
      cb(null, req.body.registerNumber + ".png");
    }
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// @route   Get api/doctors/me
// @desc    Get current Logged In Doctor's Profile
// @access  Private
router.get("/me", [auth], async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor.id)
      .populate("hospital", [
        "name",
        "registerNumber",
        "email",
        "division",
        "phone"
      ])
      .select("-password");

    return res.json(doctor);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// @route   Get api/doctors
// @desc    Get all docotors
// @access  Public
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .select(["-password", "-admin"])
      .populate({ path: "hospital", select: "-password" });
    return res.json(doctors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/doctors/ofHospital?filterName=".."&filterEmail="..."
// @desc    Get all docotors related with hospital
// @access  Private ( Hospital )
router.get("/ofHospital", auth, async (req, res) => {
  let filterName = "";
  let filterEmail = "";
  if (req.query.filterName) {
    filterName = `${req.query.filterName}`;
  }
  if (req.query.filterEmail) {
    filterEmail = `${req.query.filterEmail}`;
  }
  try {
    if (!req.hospital) {
      res.status(401).msg("You are not authorized to access this url");
    }

    const doctors = await Doctor.find({
      hospital: req.hospital.id,
      name: new RegExp(filterName),
      email: new RegExp(filterEmail)
    })
      .select(["-password", "-admin"])
      .populate({ path: "hospital", select: "-password" });
    return res.json(doctors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/doctors/:id
// @desc    Get doctor details with id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const doctors = await Doctor.findOne({ _id: req.params.id })
      .select(["-password", "-admin"])
      .populate({ path: "hospital", select: "-password" });
    return res.json(doctors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/doctors/:id/activity
// @desc    Get doctor details with id
// @access  Public
router.get("/:id/activity", async (req, res) => {
  try {
    const records = await Record.find({ doctor: req.params.id })
      .select(["-password", "-admin"])
      .populate(
        { path: "patient", select: "-password" }
        // { path: "patient", select: "-password" }
      )
      .sort({ createdAt: -1 });

    return res.json(records);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   POST api/doctors
// @desc    Registering Doctors by Hospital ( Hospital Register Route )
// @access  Private ( Hospital )
router.post(
  "/",
  [
    auth,
    upload.single("avatar"),
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("registerNumber", "Register Number is required")
        .not()
        .isEmpty(),
      check("designation", "Designation Number is required")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
      check("phone", "Phone number is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      if (!req.hospital) {
        return res
          .status(401)
          .json({ msg: "You are not allowed to acces this route" });
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        name,
        email,
        password,
        registerNumber,
        phone,
        designation,
        address
      } = req.body;

      let doctor = await Doctor.findOne({ email: email });
      if (doctor) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Doctor already exists" }] });
      }

      const newDoctor = new Doctor({
        name: name,
        email: email,
        password: password,
        registerNumber: registerNumber,
        phone: phone,
        designation: designation,
        address: address,
        hospital: req.hospital.id,
        isActive: true,
        avatar: req.file.path
      });
      //bcrypt
      const salt = await bcrypt.genSalt(10);
      newDoctor.password = await bcrypt.hash(password, salt);

      await newDoctor.save();

      const hospital = await Hospital.findOne({ _id: req.hospital.id });
      hospital.doctors.unshift(newDoctor._id);
      await hospital.save();

      return res.json(newDoctor);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errors: "Internal Server Error" });
    }
  }
);

// @route   put api/doctors
// @desc    Update doctor by doctor ( Doctor profile update Route )
// @access  Private ( doctor )
router.put(
  "/",
  [
    auth,
    upload.single("avatar"),
    [
      check("designation", "Designation  is required")
        .not()
        .isEmpty(),

      check("phone", "Phone number is required")
        .not()
        .isEmpty(),
      check("address", "Address is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    console.log(req);
    try {
      if (!req.doctor) {
        return res
          .status(401)
          .json({ msg: "You are not allowed to acces this route" });
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { avatar, password, phone, designation, address } = req.body;

      let doctor = await Doctor.findOne({ _id: req.doctor.id });

      if (password && password !== null && password !== "") {
        const salt = await bcrypt.genSalt(10);
        doctor.password = await bcrypt.hash(password, salt);
      }

      if (avatar && avatar !== null && avatar !== "") {
        console.log(avatar, "", req.body.registerNumber);
        // await upload.single("avatar");
        doctor.avatar = req.file.path;
      }

      if (designation !== null && designation !== "") {
        doctor.designation = designation;
      }
      if (address !== null && address !== "") {
        doctor.address = address;
      }
      if (phone !== null && phone !== "") {
        doctor.phone = phone;
      }

      await doctor.save();

      return res.json(doctor);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errors: "Internal Server Error" });
    }
  }
);

// @route   put api/doctors/:id/status
// @desc    Update doctor by Hospital ( Doctor Status update Route by Hospital)
// @access  Private ( Hospital )
router.put("/:doctor_id/status", auth, async (req, res) => {
  try {
    if (!req.hospital) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
    }

    const doctor = await Doctor.findOne({ _id: req.params.doctor_id });

    console.log(doctor);
    console.log(req.hospital);

    if (req.hospital.id != doctor.hospital) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to edit this doctor" });
    }

    const updateDoctor = await Doctor.findOneAndUpdate(req.params.doctor_id, {
      status: !doctor.status
    });

    return res.status(200).json({ msg: "Status Updated Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Delete api/doctors/:doctor_id
// @desc    Delete doctors with ID by Hospital
// @access  Private (Hospital)
router.delete("/:doctor_id", auth, async (req, res) => {
  try {
    if (!req.hospital) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
    }

    const doctor = await Doctor.findOneAndDelete({
      _id: req.params.doctor_id
    });

    const createdHospital = await Hospital.findById(doctor.hospital);

    removeIndex = createdHospital.doctors
      .map(doctor => doctor)
      .indexOf(req.params.doctor_id);

    createdHospital.doctors.splice(removeIndex);
    await createdHospital.save();

    return res.status(200).json({ msg: "Deletion Successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
