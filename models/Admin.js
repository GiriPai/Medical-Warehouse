const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
  avatar: {
    type: String
  },
  division: {
    type: String
  },
  hospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital"
    }
  ],

  lastLoggedIn: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  adminCreatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("admin", AdminSchema);
