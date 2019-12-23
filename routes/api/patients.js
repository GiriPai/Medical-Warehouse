const express = require("express");
const router = express.Router();

// @route   Get api/patients
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Patients route"));

module.exports = router;
