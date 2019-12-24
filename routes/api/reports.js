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
const Report = require("../../models/Report");

//Config File Upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/patient/reports");
  },
  filename: function(req, file, cb) {
    if (file.mimetype === "image/jpeg") {
      cb(null, req.params.patientId + ".jpg");
    } else if (file.mimetype === "image/png") {
      cb(null, req.params.patientId + ".png");
    } else if (file.mimetype === "application/pdf") {
      cb(null, req.params.patientId + ".pdf");
    } else if (file.mimetype === "application/msword") {
      cb(null, req.params.patientId + ".doc");
    } else if (file.mimetype === "application/vnd.ms-excel") {
      cb(null, req.params.patientId + ".xls");
    }
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/pdf" ||
    file.mimetype === "image/msword" ||
    file.mimetype === "image/vnd.ms-excel"
  ) {
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

// @route   Get api/reports/me
// @desc    Get all details of Patient (Patient token) Can't Add or edit report
// @access  Private Patient
router.get("/me", auth, async (req, res) => {
  if (!req.patient) {
    return res
      .status(401)
      .json({ msg: "You are not allowed to access this route" });
  }

  try {
    const report = await Report.find({ patient: req.patient.id })
      .sort("-createdAt")
      .populate("patient", "-password")
      .populate("hospital", "-password");
    if (!report) {
      return res.json({ msg: "No records available" });
    }
    return res.json(report);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ errors: [{ error: "Internal Server Error" }] });
  }
});

// @route   Get api/reports/:patientID
// @desc    Get all details of Patient (Doctor token) Can Add or edit report
// @access  Private
router.get("/:patientId", auth, async (req, res) => {
  if (!req.doctor) {
    return res
      .status(401)
      .json({ msg: "You are not allowed to access this route" });
  }

  try {
    const report = await Report.find({ patient: req.params.patientId })
      .sort("-createdAt")
      .populate("patient", "-password")
      .populate("hospital", "-password");

    if (!report) {
      return res.json({ msg: "No records available" });
    }
    return res.json(report);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ errors: [{ error: "Internal Server Error" }] });
  }
});

// @route   Post api/reports/:patientID
// @desc    Post record details of Patient (Hospital token) Can Add Records and prescriptions
// @access  Private
router.post(
  "/:patientId",
  [
    auth,
    upload.single("document"),
    [
      (check("reportType", "Type of the report is required")
        .not()
        .isEmpty(),
      check("findings", "Findings are required")
        .not()
        .isEmpty())
    ]
  ],
  async (req, res) => {
    try {
      if (!req.hospital) {
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
      const hospital = await Hospital.findOne({ _id: req.hospital.id });

      const { reportType, findings, recommendation } = req.body;

      let report = new Report({
        reportType,
        findings,
        recommendation
      });

      report.patient = patient._id;
      report.hospital = hospital._id;
      report.document = req.file.path;
      const savedReport = await report.save();
      return res.json(savedReport);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: [{ error: "Internal Server Errror" }] });
    }
  }
);

module.exports = router;
