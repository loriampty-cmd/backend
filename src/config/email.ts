// import { createTransport } from "nodemailer";

// // Create reusable transporter
// // Using Gmail SMTP: smtp.gmail.com:587 (STARTTLS)
// // SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_SECURE=false
// // SMTP_USER=your-gmail@gmail.com, SMTP_PASS=your-16-char-app-password
// export const transporter = createTransport({
//   host: process.env.SMTP_HOST || "smtp.gmail.com",
//   port: parseInt(process.env.SMTP_PORT || "587"),
//   secure: process.env.SMTP_SECURE === "true",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 30000,
// } as any, {
//   // Force IPv4 — Railway doesn't support IPv6
//   family: 4,
// });

// // Verify connection configuration (async, non-blocking)
// transporter.verify().then(() => {
//   console.log("✅ Email server is ready to send messages");
// }).catch((error) => {
//   console.log("⚠️  Email server connection warning:", error.message);
//   console.log("📧 Emails will be attempted but may fail");
// });

// export const emailConfig = {
//   from: process.env.EMAIL_FROM || "noreply@alvarado.com",
//   appName: process.env.APP_NAME || "Alvarado Investment",
//   appUrl: process.env.APP_URL || "http://localhost:3000",
// };


import { Resend } from "resend";

// Resend client — no SMTP transport, no app passwords, no IPv4 forcing needed.
// Sends go over HTTPS, so Railway's IPv6 quirk doesn't apply either.
export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailConfig = {
  from: process.env.EMAIL_FROM || "noreply@alvarado.com",
  appName: process.env.APP_NAME || "Alvarado Investment",
  appUrl: process.env.APP_URL || "http://localhost:3000",
};