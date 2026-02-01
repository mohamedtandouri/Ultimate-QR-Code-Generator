
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async function verifySmtp() {
  console.log('--- SMTP Verification Diagnostic ---');
  console.log(`User: ${process.env.EMAIL_USER}`);
  // Hide password functionality for logs
  const pass = process.env.EMAIL_PASS || '';
  console.log(`Pass: ${pass.slice(0, 3)}...${pass.slice(-3)} (Length: ${pass.length})`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log('Attempting to connect to Gmail SMTP...');
    await transporter.verify();
    console.log('✅ SUCCESS: SMTP Connection Established! Credentials are valid.');
  } catch (error) {
    console.error('❌ FAILED: Connection rejected.');
    console.error(`Code: ${error.code}`);
    console.error(`Response: ${error.response}`);
    console.error(`Command: ${error.command}`);
    console.error('Full Error:', error);
  }
}

verifySmtp();
