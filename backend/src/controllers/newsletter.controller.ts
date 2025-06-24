import { Request, Response } from "express";
import { Newsletter } from "../models/newsletter.model";

export const subscribeToNewsletter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, subscribe } = req.body;

    if (!subscribe || !email) {
      res.status(400).json({
        message: "Subscription checkbox must be checked and email is required.",
      });
      return;
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      res.status(200).json({ message: "Already subscribed." });
      return;
    }

    await Newsletter.create({ email });
    res.status(201).json({ message: "Successfully subscribed to newsletter." });
    console.log("Successfully subscribed to newsletter.");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong.", error });
  }
};
