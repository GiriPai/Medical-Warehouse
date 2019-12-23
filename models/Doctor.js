const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  registerNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
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
  address: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("doctor", DoctorSchema);
