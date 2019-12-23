const express = require("express");
const router = express.Router();

// @route   Get api/doctors
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Doctors route"));

module.exports = router;
