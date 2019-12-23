const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  registerNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  branch: {
    type: String
  },
  avatar: {
    type: String
  },
  contact: {
    type: String
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.model("hospital", HospitalSchema);
