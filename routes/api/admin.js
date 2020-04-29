const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// Loading Middleware
const auth = require("../../middleware/auth");

// Loading Models
const Admin = require("../../models/Admin");
const Doctor = require("../../models/Doctor");
const Hospital = require("../../models/Hospital");
const Patient = require("../../models/Patient");
const Record = require("../../models/Record");

// File upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/admin/avatar");
  },

  filename: function (req, file, cb) {
    if (file.mimetype === "image/jpeg") {
      cb(null, req.body.email + ".jpg");
    } else if (file.mimetype === "image/png") {
      cb(null, req.body.email + ".png");
    }
  },
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
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
// End File Upload

// @route   GET api/admin
// @desc    Get All Admins
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const admins = await Admin.find();
    if (!admins) {
      return res.json({ msg: "No Admins Available" });
    }
    return res.json(admins);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   Get api/admin/me
// @desc    Get current Logged In Admin's Profile
// @access  Private
router.get("/me", [auth], async (req, res) => {
  try {
    const adminHospitals = await Admin.findById(req.admin.id)
      .populate("hospitals", [
        "name",
        "registerNumber",
        "email",
        "division",
        "phone",
      ])
      .select("-password");

    return res.json(adminHospitals);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// @route   POST api/admin
// @desc    Register Admin Route
// @access  Public
router.post(
  "/",
  [
    upload.single("avatar"),
    check("name", "Name is required").not().isEmpty(),
    check("registerNumber", "Register Number is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("division", "Please include the division").not().isEmpty(),
    check("phone", "Phone number is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, registerNumber, division, phone } = req.body;

    try {
      let admin = await Admin.findOne({ email: email });

      if (admin) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Admin Already Exists" }] });
      }

      // create instance of admin
      admin = new Admin({
        name,
        registerNumber,
        email,
        password,
        division,
        phone,
      });

      //  bcryptjs
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
      admin.avatar = req.file.path;

      // save Admin
      await admin.save();

      const payload = {
        user: {
          id: admin._id,
          role: "admin",
        },
      };

      await jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //   res.send("User Registered");
    } catch (err) {
      console.error(err.message());
      res.send(500).send("Internal Server Error");
    }
  }
);

// @route   GET api/admin/home
// @desc    Get All Admins
// @access  Public
router.get("/home", auth, async (req, res) => {
  try {
    const admins = await Admin.find();
    const doctors = await Doctor.find();
    const hospitals = await Hospital.find();
    const patients = await Patient.find();

    if (!admins) {
      return res.json({ msg: "No Admins Available" });
    }
    return res.json({ admins, doctors, hospitals, patients });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
