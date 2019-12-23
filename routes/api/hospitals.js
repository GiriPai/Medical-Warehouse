const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Models
const Admin = require("../../models/Admin");
const Hospital = require("../../models/Hospital");

//Config File Upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/hospital/avatar");
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

// @route   Get api/hospitals/
// @desc    Get all Hospitals
// @access  Public
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find().select(["-password", "-admin"]);
    return res.json(hospitals);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   POST api/hospitals/
// @desc    Creating a Hospital
// @access  Private
router.post(
  "/",
  [
    auth,
    upload.single("avatar"),
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
    check("division", "Please include the division")
      .not()
      .isEmpty()
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

    const { name, email, password, registerNumber, division } = req.body;

    try {
      let hospital = await Hospital.findOne({ email: email });

      if (hospital) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Hospital Already Exists" }] });
      }

      const admin = req.admin.id;

      //   create instance of hospital
      hospital = new Hospital({
        name,
        registerNumber,
        email,
        password,
        division,
        admin
      });

      //bcrypt
      const salt = await bcrypt.genSalt(10);
      hospital.password = await bcrypt.hash(password, salt);

      //Save image url
      hospital.avatar = req.file.path;

      // save hospital
      await hospital.save();

      // update hospital field of admin collection in database
      let updateAdmin = await Admin.findOne({ _id: admin });
      updateAdmin.hospitals.unshift(hospital._id);
      await updateAdmin.save();
      return res.json(hospital);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
