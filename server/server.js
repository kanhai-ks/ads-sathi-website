const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("ADS SATHI Backend Running ");
});

// API Routes
app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on ${PORT}`);
});