import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import { EMAIL_USER, EMAIL_PASSWORD, EMAIL_HOST, EMAIL_PORT } from "../utils/env";
import { welcomeEmailTemplate } from "../templates/email.template";

/**
 * Shared Nodemailer transporter, verified once at startup.
 */
const transporter = nodemailer.createTransport({
          host: EMAIL_HOST,
          port: Number(EMAIL_PORT),
          secure: true, // true = SMTP over TLS/SSL
          auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASSWORD,
          },
} as nodemailer.TransportOptions);

transporter.verify((error) => {
          if (error) {
                    console.error("❌  Email transporter verification failed:", error);
          } else {
                    console.log("✅  Email transporter ready to send messages.");
          }
});

/**
 * Generic email‑sending helper.
 */
export interface SendEmailOptions {
          to: string;
          subject: string;
          html: string;
          text?: string; // optional plain‑text fallback
}

export async function emailService({ to, subject, html, text }: SendEmailOptions): Promise<void> {
          await transporter.sendMail(
                    {
                              from: EMAIL_USER,
                              to,
                              subject,
                              html,
                              text, // will be ignored if undefined
                    },
                    (error, info) => {
                              if (error) {
                                        console.error("❌  Error sending email:", error);
                              } else {
                                        console.log("✉️  Email sent:", info.response);
                              }
                    }
          );
}

/**
 * Convenience wrapper that sends the standard Welcome email using the shared template.
 *
 * @param email       Recipient email address
 * @param firstName   Recipient first name (for the greeting)
 * @param link        Call‑to‑action URL
 * @param appName     Optional application name (defaults inside the template)
 */
export async function sendWelcomeEmail(
          email: string,
          firstName: string,
          link: string,
          appName = "TruthCheck"
): Promise<void> {
          const { subject, html } = welcomeEmailTemplate(firstName, link, appName);
          await emailService({
                    to: email,
                    subject,
                    html,
                    text: `Welcome ${firstName}! Please visit ${link} to get started.`,
          });
}

export default emailService;
