const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Admin = require("../../models/Admin");

// @route   POST api/auth/admin/login
// @desc    Authenticate Admin and get Token (Login Route)
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
module.exports = router;
