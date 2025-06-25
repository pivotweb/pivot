// src/services/email.service.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendAutoResponder = async (email: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"The Pivot Challenge" <${process.env.EMAIL_USER}>`,
    to: email,
    subject:
      "✅ Your Application to The Pivot Challenge 2025 Has Been Received!",
    html: `
      <p>Dear ${name.split(" ")[0]},</p>
      <p>Thank you for applying to The Pivot Challenge 2025—we’re thrilled you’re ready to take your business digital!</p>
      <p>Warm regards,<br/>The Pivot Challenge Team</p>
    `,
  });
};
