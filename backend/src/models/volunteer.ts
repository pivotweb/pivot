import mongoose, { Document, Schema } from "mongoose";

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone?: string;
  availability: string;
  location?: string;
  skills?: string[];
  motivation?: string;
  createdAt: Date;
  updatedAt: Date;
}

const VolunteerSchema: Schema = new Schema<IVolunteer>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    availability: {
      type: String,
      enum: ["Weekdays", "Weekends", "Full-time", "Flexible"],
      required: true,
    },
    location: {
      type: String,
    },
    skills: {
      type: [String],
      default: [],
    },
    motivation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Volunteer = mongoose.model<IVolunteer>("Volunteer", VolunteerSchema);
export default Volunteer;
