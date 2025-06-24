import mongoose from "mongoose";
import { MONGODB_URI } from "../utils/env";
const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      console.error("❌ MONGODB_URI is not defined in environment variables");
      process.exit(1);
    }
    await mongoose.connect(MONGODB_URI);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
