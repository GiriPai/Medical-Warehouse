const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const qrcode = require("qrcode");
const { check, validationResult } = require("express-validator");

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Models
const Admin = require("../../models/Admin");
const Hospital = require("../../models/Hospital");
const Patient = require("../../models/Patient");

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

// HTML to IMAGE
const pdf = require("html-pdf");

// End HTML to IMAGE

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
      let patient = await Patient.findOne({ email: email });

      if (patient) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Hospital Already Exists" }] });
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

      patient.isActive = true;

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
      createdPatient.save();

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
            address: `${createdPatient.address}`
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

      return res.json(createdPatient);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
