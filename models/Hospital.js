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
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  phone: {
    type: String
  },
  isActive: {
    type: Boolean,
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin"
  },
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
    }
  ],

  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.model("hospital", HospitalSchema);
