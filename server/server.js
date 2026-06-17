// require("dotenv").config();

// const app = require("./app");
// const connectDB = require("./config/db");

// const PORT = process.env.PORT || 5000;

// (async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`Server running on ${PORT}`);
//     });

//   } catch (err) {
//     console.error(err);
//   }
// })();

require("dotenv").config();

const express = require("express");
const cors = require("cors");

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
  res.send("ADS SATHI Backend Running 🚀");
});

// API Routes
app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});