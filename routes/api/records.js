const express = require("express");
const router = express.Router();

const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const qrcode = require("qrcode");
const { check, validationResult } = require("express-validator");
const pdf = require("html-pdf");

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Models
const Doctor = require("../../models/Doctor");
const Hospital = require("../../models/Hospital");
const Patient = require("../../models/Patient");
const Record = require("../../models/Record");

// @route   Get api/records/me
// @desc    Get all details of Patient (Patient token) Can't Add or edit Record
// @access  Private Patient
router.get("/me", auth, async (req, res) => {
  if (!req.patient) {
    return res
      .status(401)
      .json({ msg: "You are not allowed to access this route" });
  }

  try {
    const record = await Record.find({ patient: req.patient.id })
      .sort("-createdAt")
      .populate("patient", "-password")
      .populate("hospital", "-password")
      .populate("doctor", "-password");
    if (!record) {
      return res.json({ msg: "No records available" });
    }
    return res.json(record);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ errors: [{ error: "Internal Server Error" }] });
  }
});

// @route   Get api/records/:patientID
// @desc    Get all details of Patient (Doctor token) Can Add or edit Records and prescriptions
// @access  Private
router.get("/:patientId", auth, async (req, res) => {
  if (!req.doctor) {
    return res
      .status(401)
      .json({ msg: "You are not allowed to access this route" });
  }

  try {
    const record = await Record.find({ patient: req.params.patientId })
      .sort("-createdAt")
      .populate("patient", "-password")
      .populate("hospital", "-password")
      .populate("doctor", "-password");
    if (!record) {
      return res.json({ msg: "No records available" });
    }
    return res.json(record);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ errors: [{ error: "Internal Server Error" }] });
  }
});

// @route   Post api/records/:patientID
// @desc    Post record details of Patient (Doctor token) Can Add Records and prescriptions
// @access  Private
router.post(
  "/:patientId",
  [
    auth,
    [
      check("findings", "Findings are required")
        .not()
        .isEmpty(),
      check("cause", "Cause is required")
        .not()
        .isEmpty(),
      check("description", "Description")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      if (!req.doctor) {
        return res
          .status(401)
          .json({ error: "You are not authorized to access this route" });
      }

      const errors = validationResult(req.body);
      if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() });
      }

      const patient = await Patient.findOne({ _id: req.params.patientId });
      if (!patient) {
        return res.status(404).json({ errors: [{ error: "Invalid URL" }] });
      }
      const doctor = await Doctor.findOne({ _id: req.doctor.id });

      const {
        findings,
        cause,
        description,
        prescription,
        recommendation
      } = req.body;

      let record = new Record({
        findings,
        cause,
        description,
        prescription,
        recommendation
      });

      record.patient = patient._id;
      record.doctor = doctor._id;
      record.hospital = doctor.hospital;

      const savedRecord = await record.save();
      return res.json(savedRecord);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: [{ error: "Internal Server Errror" }] });
    }
  }
);

module.exports = router;
