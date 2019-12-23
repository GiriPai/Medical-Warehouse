const express = require("express");
const router = express.Router();

// @route   Get api/prescriptions
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Prescriptions route"));

module.exports = router;
