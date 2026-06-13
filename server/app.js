const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

module.exports = app;