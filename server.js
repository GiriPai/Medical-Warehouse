const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.json("API Running");
});

// Define Routes
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/doctors", require("./routes/api/doctors"));
app.use("/api/hospitals", require("./routes/api/hospitals"));
app.use("/api/patients", require("./routes/api/patients"));
app.use("/api/reports", require("./routes/api/reports"));
app.use("/api/records", require("./routes/api/records"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
