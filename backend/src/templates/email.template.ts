// emailTemplate.ts
/**
 * Generates a “Welcome” email with a friendly greeting and a prominent call-to-action link.
 * Return shape is convenient for Nodemailer: { subject, html }.
 */
export const welcomeEmailTemplate = (
          firstName: string,
          link: string,
          appName = "PIVOT"
        ): { subject: string; html: string } => ({
          subject: `Welcome to ${appName}, ${firstName}!`,
          html: `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width,initial-scale=1.0" />
              <title>Welcome to ${appName}</title>
              <style>
                /* Simple responsive tweak */
                @media only screen and (max-width: 600px) {
                  h1 { font-size: 24px !important; }
                  .container { width: 100% !important; padding: 0 !important; }
                }
              </style>
            </head>
            <body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f7f7f7;color:#333;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:40px 0;">
                    <table class="container" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:40px;">
                          <h1 style="margin:0 0 20px;">🎉 Welcome, ${firstName}!</h1>
                          <p style="font-size:16px;line-height:1.5;">
                            We’re thrilled to have you join <strong>${appName}</strong>. Click the button below to get started:
                          </p>
        
                          <p style="text-align:center;margin:30px 0;">
                            <a href="${link}" style="background:#0066ff;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:4px;display:inline-block;">
                              Get Started
                            </a>
                          </p>
        
                          <p style="font-size:14px;line-height:1.5;color:#666;">
                            If that button doesn’t work, copy and paste this link into your browser:<br/>
                            <a href="${link}" style="color:#0066ff;">${link}</a>
                          </p>
        
                          <p style="font-size:14px;line-height:1.5;color:#666;">
                            Cheers,<br/>
                            The ${appName} Team
                          </p>
                        </td>
                      </tr>
        
                      <tr>
                        <td style="background:#f0f0f0;padding:20px;text-align:center;font-size:12px;color:#999;">
                          © ${new Date().getFullYear()} ${appName}. All rights reserved.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
        });
        