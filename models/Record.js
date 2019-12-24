const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient"
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor"
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  },
  findings: [
    {
      type: String,
      required: true
    }
  ],
  cause: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prescription: [
    {
      name: {
        type: String,
        required: true
      },
      interval: {
        type: String
      },
      days: {
        type: Number
      },
      description: {
        type: String
      }
    }
  ],
  recommendation: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("record", RecordSchema);
