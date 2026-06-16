const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("ADS SATHI Backend Running 🚀");
});

// API
app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

module.exports = app;