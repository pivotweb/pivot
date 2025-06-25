// src/models/application.model.ts
import mongoose, { Schema } from "mongoose";
import { IApplication } from "../interfaces/application.interface";

const applicationSchema = new Schema<IApplication>(
  {
    fullName: String,
    gender: { type: String, enum: ["Male", "Female"] },
    dob: Date,
    phoneNumber: String,
    email: { type: String, unique: true },
    whatsappNumber: String,
    address: String,
    education: String,

    businessName: String,
    yearStarted: Number,
    registrationStatus: {
      type: String,
      enum: ["Registered", "Not Yet Registered"],
    },
    rcNumber: String,
    businessAddress: String,
    stateOfOperation: {
      type: String,
      enum: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    },
    businessSector: String,
    businessDescription: String,
    customerTypes: [String],

    digitalToolsUsed: [String],
    sellsOnline: Boolean,
    digitalChallenges: [String],
    toolsToLearn: String,

    motivation: String,
    successLookLike: String,
    available8Weeks: Boolean,
    availableBootcamp: Boolean,

    isPrimaryIncomeEarner: Boolean,
    hasDisability: Boolean,
    womenOrYouthLed: Boolean,

    cacCertificate: String,
    businessPhoto: String,

    declarationAgreed: Boolean,
    releaseConsentAgreed: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model<IApplication>("Application", applicationSchema);
