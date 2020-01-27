const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    registerNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
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
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String
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
    qrcode: {
        type: String
    },
    idCard: {
        type: String
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },

    guardians: [
        {
            name: {
                type: String
            },
            address: {
                type: String
            },
            relationship: {
                type: String
            },
            phone: {
                type: String
            },
            email: {
                type: String
            }
        }
    ],
    myHospitals: [
        {
            hospital: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "hospital"
            },
            date: {
                type: Date
            }
        }
    ],

    myDoctors: [
        {
            doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "doctor"
            },
            date: {
                type: Date
            }
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    access: {
        hospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "hospitals"
            }
        ],
        doctors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "doctor"
            }
        ]
    }
});

module.exports = mongoose.model("patient", patientSchema);
