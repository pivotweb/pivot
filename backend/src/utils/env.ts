import dotenv from "dotenv";
dotenv.config();

// A function to get the environment variable value by key
// If the variable is not set, it returns the default value
function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    console.log(
      `Environment variable ${key} is not set. Using default value: ${defaultValue}`
    );
    return defaultValue as string;
  }
  return value;
}

export const MONGODB_URI = getEnv("MONGODB_URI", process.env.MONGODB_URI);
export const PORT = getEnv("PORT", "3000");
export const ENC_KEY = getEnv("ENC_KEY", "defaultEncryptionKey");
