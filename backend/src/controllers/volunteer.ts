import { Request, Response } from "express";
import Volunteer from "../models/volunteer";
import Joi from "joi";

const volunteerSchema = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().max(20).allow(""),
  availability: Joi.string()
    .valid("Weekdays", "Weekends", "Full-time", "Flexible")
    .required(),
  location: Joi.string().max(100).allow(""),
  skills: Joi.array().items(Joi.string()).default([]),
  motivation: Joi.string().max(500).allow(""),
});

// @desc Register a new volunteer
export const registerVolunteer = async (req: Request, res: Response) => {
  try {
    const {
        name,
        email,
        phone,
        availability,
        location,
        skills,
        motivation,
    } = req.body;

    // Validate request data against the schema
    const { error } = volunteerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // check for existing volunteer by email
    const existing = await Volunteer.findOne({ email });
    if (existing) {
        return res    
        .status(400)
        .json({ message: "Volunteer already exists with this email." });
    }

    const newVolunteer = new Volunteer({
        name,
        email,
        phone,
        availability,
        location,
        skills,
        motivation,
    });

    const saved = await newVolunteer.save();
    res
        .status(201)
        .json({ message: "Volunteer registered successfully", volunteer: saved });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// @desc Get all volunteers (admin use)
export const getAllVolunteers = async (_req: Request, res: Response) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json({message: "All Volunteers fetched successfully", Volunteer: volunteers});
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "An error occurred when trying to fetch volunteers" });
  }
};

// @desc Get one volunteer by ID
export const getVolunteerById = async (req: Request, res: Response) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.status(200).json({message: "Volunteer fetched successfully", Volunteer: volunteer});
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "An error occurred when trying to fetch a volunteer" });
  }
};
