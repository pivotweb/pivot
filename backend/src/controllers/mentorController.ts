import { RequestHandler } from "express"
import Mentor, { IMentor } from "../models/Mentor"
import Joi from "joi"

// Joi schema
const mentorSchema = Joi.object({
  name : Joi.string().max(100).required(),
  email : Joi.string().email().required(),
  expertise : Joi.array().items(Joi.string()).default([]),
  bio : Joi.string().max(500).allow(""),
  phone : Joi.string().max(20).allow("")
})

export const createMentor: RequestHandler = async (req, res, next) => {
  try {
    const payload = await mentorSchema.validateAsync(req.body)
    const mentor : IMentor = await Mentor.create(payload)

    res.status(201).json(mentor)
  } catch (err : any) {
    if (err.isJoi) {
      res.status(400).json({ error: err.message })
      return
    }

    if (err.code === 11000) {
      res.status(409).json({ error: "A mentor with that email already exists." })
      return;
    }

    next(err)
  }
};
