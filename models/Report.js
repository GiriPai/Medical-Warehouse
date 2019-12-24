const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient"
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  },
  reportType: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  findings: [
    {
      type: String,
      required: true
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

module.exports = mongoose.model("report", ReportSchema);
