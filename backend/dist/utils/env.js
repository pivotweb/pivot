"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENC_KEY = exports.PORT = exports.MONGODB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// A function to get the environment variable value by key
// If the variable is not set, it returns the default value
function getEnv(key, defaultValue) {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        console.log(`Environment variable ${key} is not set. Using default value: ${defaultValue}`);
        return defaultValue;
    }
    return value;
}
exports.MONGODB_URI = getEnv("MONGODB_URI", process.env.MONGODB_URI);
exports.PORT = getEnv("PORT", "3000");
exports.ENC_KEY = getEnv("ENC_KEY", "defaultEncryptionKey");
