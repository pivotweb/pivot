"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToNewsletter = void 0;
const newsletter_model_1 = require("../models/newsletter.model");
const subscribeToNewsletter = async (req, res) => {
    try {
        const { email, subscribe } = req.body;
        if (!subscribe || !email) {
            return res
                .status(400)
                .json({
                message: "Subscription checkbox must be checked and email is required.",
            });
        }
        // Save only if email is not already subscribed
        const existing = await newsletter_model_1.Newsletter.findOne({ email });
        if (existing) {
            return res.status(200).json({ message: "Already subscribed." });
        }
        await newsletter_model_1.Newsletter.create({ email });
        return res
            .status(201)
            .json({ message: "Successfully subscribed to newsletter." });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong.", error });
    }
};
exports.subscribeToNewsletter = subscribeToNewsletter;
