import express, { Request, Response, NextFunction } from "express";
import emailService, { sendWelcomeEmail } from "../services/email.service"; // adjust path as needed
import { EmailPayload } from "../models/email.model";

export const emailRouter = express.Router();

/**
 * POST /api/email/send-generic
 * Send any templated or custom email by passing the required fields.
 * Expected JSON body (matches EmailPayload model):
 * {
 *   "to": "user@example.com",
 *   "subject": "Hello",
 *   "html": "<p>Message</p>",
 *   "text": "Message" // optional plain‑text version
 * }
 */
emailRouter.post(
          "/send-generic",
          async (req: Request<{}, {}, EmailPayload>, res: Response, next: NextFunction) => {
                    try {
                              const { to, subject, html, text } = req.body;
                              await emailService({ to, subject, html, text });
                              res.status(200).json({ success: true, message: "Email sent successfully" });
                    } catch (error) {
                              console.error("Email send error:", error);
                              next(new Error("EMAIL_SEND_FAILED"));
                    }
          }
);

/**
 * POST /api/email/send-welcome
 * Convenience endpoint for the standard Welcome email.
 * Expected JSON body:
 * {
 *   "email": "user@example.com",
 *   "firstName": "John",
 *   "link": "https://app.example.com/activate"
 * }
 */
emailRouter.post(
          "/send-welcome",
          async (
                    req: Request<{}, {}, { email: string; firstName: string; link: string }>,
                    res: Response,
                    next: NextFunction
          ) => {
                    try {
                              const { email, firstName, link } = req.body;
                              await sendWelcomeEmail(email, firstName, link);
                              res.status(200).json({ success: true, message: "Welcome email sent successfully" });
                    } catch (error) {
                              console.error("Welcome email send error:", error);
                              next(new Error("WELCOME_EMAIL_SEND_FAILED"));
                    }
          }
);

export default emailRouter;
