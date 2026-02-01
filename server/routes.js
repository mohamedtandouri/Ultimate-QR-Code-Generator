import express from 'express';
import { z } from 'zod';
import { sendEmail } from './email.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Validation Schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

router.post('/contact', contactLimiter, async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const { firstName, lastName, email, subject, message } = validatedData;

    // Email content
    const emailHtml = `
      <h2>New Contact Form Submission Ultimate Qr Code</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send email to the site owner (configured in env)
    await sendEmail({
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, 
      subject: `Contact Form: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      html: emailHtml,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: `Failed to send message: ${error.message}` });
  }
});

export default router;
