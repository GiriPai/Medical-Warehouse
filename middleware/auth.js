const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    if (decoded.user.role === "admin") req.admin = decoded.user;
    if (decoded.user.role === "hospital") req.hospital = decoded.user;
    if (decoded.user.role === "doctor") req.doctor = decoded.user;
    if (decoded.user.role === "patient") req.patient = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
