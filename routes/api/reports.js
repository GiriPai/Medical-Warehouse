const express = require("express");
const router = express.Router();

// @route   Get api/reports
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Reports route"));

module.exports = router;
