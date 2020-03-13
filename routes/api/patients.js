const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const qrcode = require("qrcode");
const { check, validationResult } = require("express-validator");
const pdf = require("html-pdf");

const fs = require("fs");

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Models
const Admin = require("../../models/Admin");
const Hospital = require("../../models/Hospital");
const Patient = require("../../models/Patient");
const Record = require("../../models/Record");
const Report = require("../../models/Report");

//Config File Upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/patient/avatar");
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
// End File Upload

// @route   Get api/patients/
// @desc    Get all patients
// @access  Public
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().select(["-password"]);
    return res.json(patients);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/patients/me
// @desc    Get current patients
// @access  private Patient
router.get("/me", auth, async (req, res) => {
  try {
    if (!req.patient) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const patient = await Patient.findById(req.patient.id).select([
      "-password"
    ]);
    const record = await Record.find({ patient: req.patient.id })
      .sort("-createdAt")
      .populate("hospital", "-password")
      .populate("doctor", "-password");

    const report = await Report.find({ patient: req.patient.id })
      .sort("-createdAt")
      .populate("hospital", "-password");

    return res.json({ patient, record, report });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/patients/:id
// @desc    Get a patient details with id by admin or doctor or hospital
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).select(["-password"]);
    const record = await Record.find({ patient: req.params.id })
      .sort("-createdAt")
      .populate("hospital", "-password")
      .populate("doctor", "-password");

    const report = await Report.find({ patient: req.params.id })
      .sort("-createdAt")
      .populate("hospital", "-password");

    return res.json({ patient, record, report });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   POST api/patients/
// @desc    Creating a Patient
// @access  Private (admin)
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
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
      check("dob", "Please include the date")
        .not()
        .isEmpty(),
      check("address", "Please enter the address")
        .not()
        .isEmpty(),
      check("phone", "Please enter the phone number")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    if (!req.admin) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
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
      dob,
      gender,
      phone,
      address
    } = req.body;

    try {
      let patient = await Patient.findOne({
        registerNumber: registerNumber
      });

      if (patient) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Patient Already Exists" }] });
      }

      const createdBy = req.admin.id;
      const isActive = false;

      //   create instance of hospital
      patient = new Patient({
        name,
        email,
        password,
        registerNumber,
        dob,
        gender,
        phone,
        address,
        createdBy,
        isActive
      });

      //bcrypt
      const salt = await bcrypt.genSalt(10);
      patient.password = await bcrypt.hash(password, salt);

      //Save image url
      patient.avatar = req.file.path;

      patient.isActive = req.body.isActive;

      // save patient
      await patient.save();
      const path = "uploads/patient/qrcodes/" + registerNumber + ".png";
      const opts = {
        mode: "alphanumeric",
        errorCorrectionLevel: "H",
        type: "image/png",
        quality: 0.9,
        margin: 1
      };
      const str = patient._id;

      await qrcode.toFile(path, `${str}`, opts);
      createdPatient = await Patient.findOne(patient._id);
      console.log(createdPatient);
      createdPatient.qrcode = path;

      const pdfTemplate = require("../../uploads/patient/templates/idTemplate");

      pdf
        .create(
          pdfTemplate({
            name: `${createdPatient.name}`,
            registerNumber: `${createdPatient.registerNumber}`,
            id: `${createdPatient._id}`,
            dob: `${createdPatient.dob}`,
            avatar: `${createdPatient.avatar}`,
            qrcode: `${createdPatient.qrcode}`,
            address: `${createdPatient.address}`,
            gender: `${createdPatient.gender}`
          }),
          {}
        )
        .toFile(
          `uploads/patient/cards/${createdPatient.registerNumber}.pdf`,
          err => {
            if (err) {
              return console.log("error");
            }
          }
        );

      createdPatient.idCard = `uploads/patient/cards/${createdPatient.registerNumber}.pdf`;
      createdPatient.save();

      return res.json(createdPatient);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// @route   PUT api/patients/:id
// @desc    Update a Patient by admin except avatar upload
// @access  Private (admin)
router.put(
  "/:id",
  [
    auth,

    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail(),

      check("dob", "Please include the date")
        .not()
        .isEmpty(),
      check("address", "Please enter the address")
        .not()
        .isEmpty(),
      check("phone", "Please enter the phone number")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    if (!req.admin) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
    }
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password,
      dob,
      gender,
      phone,
      address,
      isActive
    } = req.body;

    try {
      let patient = await Patient.findOne({ _id: req.params.id });

      //  instance of patient
      if (name != "") patient.name = name;
      if (email != "") patient.email = email;
      if (dob != "") patient.dob = dob;
      if (gender != "") patient.gender = gender;
      if (phone != "") patient.phone = phone;
      if (address != "") patient.address = address;
      patient.isActive = isActive;

      //bcrypt
      if (password != "" && password != null) {
        const salt = await bcrypt.genSalt(10);
        patient.password = await bcrypt.hash(password, salt);
      }

      await patient.save();

      createdPatient = await Patient.findOne(patient._id);

      const pdfTemplate = require("../../uploads/patient/templates/idTemplate");

      pdf
        .create(
          pdfTemplate({
            name: `${createdPatient.name}`,
            registerNumber: `${createdPatient.registerNumber}`,
            id: `${createdPatient._id}`,
            dob: `${createdPatient.dob}`,
            avatar: `${createdPatient.avatar}`,
            qrcode: `${createdPatient.qrcode}`,
            address: `${createdPatient.address}`,
            gender: `${createdPatient.gender}`
          }),
          {}
        )
        .toFile(
          `uploads/patient/cards/${createdPatient.registerNumber}.pdf`,
          err => {
            if (err) {
              return console.log("error");
            }
          }
        );

      createdPatient.idCard = `uploads/patient/cards/${createdPatient.registerNumber}.pdf`;
      createdPatient.save();

      return res.json(createdPatient);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// @route   PUT api/patients/update
// @desc    Update patient profile by current patient
// @access  Private (patient)
router.post(
  "/update",
  [
    auth,
    // upload.single("avatar"),
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("registerNumber", "Register Number is required")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail(),

      check("dob", "Please include the date")
        .not()
        .isEmpty(),
      check("address", "Please enter the address")
        .not()
        .isEmpty(),
      check("phone", "Please enter the phone number")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    console.log("here patient");
    if (!req.patient) {
      console.log("here");
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
    }
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      registerNumber,
      name,
      email,
      password,
      dob,
      gender,
      phone,
      address
    } = req.body;

    try {
      let patient = await Patient.findOne({ _id: req.patient.id });

      //  instance of patient
      if (name != "") patient.name = name;
      if (email != "") patient.email = email;
      if (dob != "") patient.dob = dob;
      if (gender != "") patient.gender = gender;
      if (phone != "") patient.phone = phone;
      if (address != "") patient.address = address;

      if (avatar && avatar !== null && avatar !== "") {
        console.log(avatar, "", req.body.registerNumber);
        await upload.single("avatar");
        doctor.avatar = req.file.path;
      }

      //bcrypt
      if (password != "" && password != null) {
        const salt = await bcrypt.genSalt(10);
        patient.password = await bcrypt.hash(password, salt);
      }

      await patient.save();

      createdPatient = await Patient.findOne(patient._id);

      const pdfTemplate = require("../../uploads/patient/templates/idTemplate");

      pdf
        .create(
          pdfTemplate({
            name: `${createdPatient.name}`,
            registerNumber: `${createdPatient.registerNumber}`,
            id: `${createdPatient._id}`,
            dob: `${createdPatient.dob}`,
            avatar: `${createdPatient.avatar}`,
            qrcode: `${createdPatient.qrcode}`,
            address: `${createdPatient.address}`,
            gender: `${createdPatient.gender}`
          }),
          {}
        )
        .toFile(
          `uploads/patient/cards/${createdPatient.registerNumber}.pdf`,
          err => {
            if (err) {
              return console.log("error");
            }
          }
        );

      createdPatient.idCard = `uploads/patient/cards/${createdPatient.registerNumber}.pdf`;
      createdPatient.save();

      return res.json(createdPatient);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// @route   Delete api/patients/:id
// @desc    Delete a patient with id by admin
// @access  private
router.delete("/:id", auth, async (req, res) => {
  try {
    if (!req.admin) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to access this url" });
    }

    // const patient = await Patient.findOneAndUpdate(
    //     {
    //         _id: req.params.id
    //     },
    //     { isActive: false }
    // );

    const patient = await Patient.findById(req.params.id);

    if (patient.qrcode !== null && patient.qrcode != undefined) {
      await fs.unlink(patient.qrcode, err => {
        if (err && err.code !== "ENOENT") {
          throw err;
        }
        console.log("qrcode was deleted");
      });
    }

    if (patient.avatar !== null && patient.avatar != undefined) {
      await fs.unlink(patient.avatar, err => {
        if (err && err.code !== "ENOENT") {
          throw err;
        }
        console.log("avatar was deleted");
      });
    }
    if (patient.idCard !== null && patient.idCard != undefined) {
      await fs.unlink(patient.idCard, err => {
        if (err && err.code !== "ENOENT") {
          throw err;
        }
        console.log("ID Card was deleted");
      });
    }

    await Record.findOneAndDelete({ patient: req.params.id });
    await Report.findOneAndDelete({ patient: req.params.id });
    await Patient.findOneAndDelete({ _id: req.params.id });

    // return res.json(patient);

    return res.status(200).json({ msg: "Deletion Successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
