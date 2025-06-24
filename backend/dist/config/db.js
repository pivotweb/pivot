"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../utils/env");
const connectDB = async () => {
    try {
        if (!env_1.MONGODB_URI) {
            console.error("❌ MONGODB_URI is not defined in environment variables");
            process.exit(1);
        }
        await mongoose_1.default.connect(env_1.MONGODB_URI);
        console.log("✅ Database connected successfully");
    }
    catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
exports.default = connectDB;
