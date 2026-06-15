const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const isProduction =
      process.env.NODE_ENV === "production";

    const MONGO_URI = isProduction
      ? process.env.MONGODB_URL_ATLAS
      : process.env.MONGODB_URL_LOCAL;

    if (!MONGO_URI) {
      throw new Error(
        "MongoDB URI not found in .env"
      );
    }

    console.log("🔄 Connecting MongoDB...");
    console.log(
      "Environment:",
      process.env.NODE_ENV || "development"
    );

    await mongoose.connect(MONGO_URI);

    console.log(
      "✅ MongoDB Connected Successfully"
    );

  } catch (err) {
    console.error(
      "❌ MongoDB connection failed:"
    );

    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;