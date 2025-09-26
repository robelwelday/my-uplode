const nodemailer = require('nodemailer');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

console.log("Using EMAIL_HOST:", process.env.EMAIL_HOST); // Debug log for host
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 465, // Changed to 465 for SSL
  secure: true, // Changed to true for SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // For testing; remove in production
  },
});

exports.sendContactEmail = catchAsync(async (req, res) => {
  const { name, message } = req.body;
  console.log("Received contact form data:", { name, message });

  if (!name || !message) {
    throw new AppError('Name and message are required', 400);
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nexussolarsolution@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nMessage: ${message}`,
  };

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId); // Log messageId for confirmation
    res.status(200).json({ ok: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Nodemailer error:", error.message); // Log the specific error
    throw new AppError(`Email sending failed: ${error.message}`, 500);
  }
});
