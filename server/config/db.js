const dns = require("dns");
require("dotenv").config();


const mongoose = require("mongoose");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) return;

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL missing");
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URL,
      {
        serverSelectionTimeoutMS: 30000,
      }
    );

    isConnected = conn.connections[0].readyState;

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(
      " MongoDB Error:",
      error.message
    );

    throw error;
  }
};

module.exports = connectDB;

