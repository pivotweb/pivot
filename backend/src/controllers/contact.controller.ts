import { Request, Response } from "express";
import Contact from "../models/contact.model";
import emailService from "../services/email.service"; // adjust path if necessary

const ADMIN_EMAIL = "nzubeakpamgbo@gmail.com";

/**
 * Handles POST /api/contact submissions.
 * 1. Validates required fields.
 * 2. Persists the contact record in MongoDB.
 * 3. Sends an email notification to the admin with the submitted data.
 */
export const submitContact = async (req: Request, res: Response): Promise<void> => {
          const { name, email, message } = req.body as { name: string; email: string; message: string };

          // Basic validation
          if (!name || !email || !message) {
                    res.status(400).json({ message: "Name, email, and message are required." });
                    return; // prevent further execution
          }

          try {
                    // 1️⃣  Save to DB
                    const contact = new Contact({ name, email, message });
                    await contact.save();

                    // 2️⃣  Build notification email
                    const subject = `📨 New Contact Submission from ${name}`;
                    const html = `<!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.4;">
          <h2 style="margin:0 0 16px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f9f9f9; padding:12px; border-left:4px solid #0066ff;">${message.replace(/\n/g, "<br/>")}</blockquote>
          <p style="font-size:12px; color:#777;">Sent on ${new Date().toLocaleString()}</p>
        </body>
      </html>`;

                    // 3️⃣  Fire the email via shared service
                    await emailService({
                              to: ADMIN_EMAIL,
                              subject,
                              html,
                              text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
                    });

                    res.status(201).json({ message: "Contact submitted successfully!", data: contact });
          } catch (error) {
                    console.error("Contact submission error:", error);
                    res.status(500).json({ message: "Server error", error });
          }
};
