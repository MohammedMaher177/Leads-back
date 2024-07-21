import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_CONNECTION_URL || "mongodb://0.0.0.0:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    // process.exit(1); // Exit process with failure
  }
};

export default connectDB;
