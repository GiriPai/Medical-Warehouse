const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Admin = require("../../models/Admin");
const Hospital = require("../../models/Hospital");
const Doctor = require("../../models/Doctor");

// @route   POST api/auth/admin/login
// @desc    Authenticate Admin and get Token (Login Route for admin)
// @access  Public
router.post(
  "/admin/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }

    const { email, password } = req.body;

    try {
      let admin = await Admin.findOne({ email: email });

      if (!admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User doesn't Exists" }] });
      }

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: admin._id,
          role: "admin"
        }
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

// @route   POST api/auth/hospital/login
// @desc    Authenticate hospital and get Token (Login Route for hospital)
// @access  Public
router.post(
  "/hospital/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }

    const { email, password } = req.body;

    try {
      let hospital = await Hospital.findOne({ email: email });

      if (!hospital) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User doesn't Exists" }] });
      }

      const isMatch = await bcrypt.compare(password, hospital.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: hospital._id,
          role: "hospital"
        }
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

// @route   POST api/auth/doctor/login
// @desc    Authenticate Doctor and get Token (Login Route for doctor)
// @access  Public
router.post(
  "/doctor/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Passord is invalid").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let doctor = await Doctor.findOne({ email: email });

      if (!doctor) {
        return res
          .status(400)
          .json({ errors: [{ error: "User doesn't exists" }] });
      }

      const isMatch = await bcrypt.compare(password, doctor.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: doctor._id,
        role: "doctor"
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
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
);

module.exports = router;
