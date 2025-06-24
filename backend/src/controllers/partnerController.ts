import { RequestHandler } from "express"
import Partner, { IPartner } from "../models/Partner"
import Joi from "joi"

// Joi schema
const partnerSchema = Joi.object({
  orgName : Joi.string().max(150).required(),
  contactName : Joi.string().max(100).required(),
  email : Joi.string().email().required(),
  supportType : Joi.array().items(Joi.string()).default([]),
  phone : Joi.string().max(20).allow("")
})

export const createPartner: RequestHandler = async (req, res, next) => {
  try {
    const payload = await partnerSchema.validateAsync(req.body)
    const partner : IPartner = await Partner.create(payload)

    res.status(201).json(partner)
  } catch (err : any) {
    if (err.isJoi) {
      res.status(400).json({ error: err.message })
      return
    }

    if (err.code === 11000) {
      res.status(409).json({ error: "A partner with that email already exists." })
      return;
    }

    next(err)
  }
};


