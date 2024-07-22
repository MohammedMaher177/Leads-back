import mongoose from "mongoose";

// const MONGODB_URI = process.env.NEW_DB_CONNECTION || "mongodb://0.0.0.0:27017/test";
const MONGODB_URI = "mongodb://0.0.0.0:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    // process.exit(1); // Exit process with failure
  }
};

export default connectDB;
