const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

// Use public DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URL;

    if (!MONGO_URI) {
      throw new Error("MongoDB URI missing");
    }

    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error(
      "❌ MongoDB connection failed:",
      err.message
    );

    process.exit(1);
  }
};

module.exports = connectDB;


