import { BaseLayout } from './layout.js';
import { EmailHeader, EmailFooter, Section, KeyValueRow, Button, styles } from './components.js';

export const EMAIL_TYPES = {
  CONTACT_FORM: 'CONTACT_FORM',
  WELCOME: 'WELCOME',
  NOTIFICATION: 'NOTIFICATION',
};

// Template Generator Functions
const templates = {
  [EMAIL_TYPES.CONTACT_FORM]: (data) => {
    const { firstName, lastName, email, subject, message } = data;
    const title = 'New Contact Submission';
    
    const content = `
      ${EmailHeader({ title })}
      ${Section({
        children: `
          ${KeyValueRow({ label: 'Name', value: `${firstName} ${lastName}` })}
          ${KeyValueRow({ label: 'Email', value: `<a href="mailto:${email}" style="${styles.link}">${email}</a>` })}
          ${KeyValueRow({ label: 'Subject', value: subject })}
          
          <div style="margin-top: 24px;">
            <span style="display: block; font-weight: 600; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</span>
            <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; border: 1px solid #E2E8F0; white-space: pre-wrap; color: #334155; font-size: 15px; line-height: 1.6;">${message}</div>
          </div>
        `
      })}
      ${EmailFooter()}
    `;

    return BaseLayout({ title, previewText: `New message from ${firstName} ${lastName}: ${subject}`, children: content });
  },

  [EMAIL_TYPES.WELCOME]: (data) => {
    const { name } = data;
    const title = 'Welcome to Ultimate QR Code';
    
    const content = `
      ${EmailHeader({ title: 'Welcome!' })}
      ${Section({
        children: `
          <p style="${styles.text}">Hi ${name},</p>
          <p style="${styles.text}">Thank you for creating an account with Ultimate QR Code Generator. We're excited to have you on board!</p>
          <p style="${styles.text}">You can now start creating varied and professional QR codes for your business or personal use.</p>
          ${Button({ text: 'Go to Dashboard', href: process.env.CLIENT_URL || '#' })}
        `
      })}
      ${EmailFooter()}
    `;

    return BaseLayout({ title, previewText: 'Welcome to your new account!', children: content });
  },
};

export const generateEmail = (type, data) => {
  const templateFn = templates[type];
  if (!templateFn) {
    throw new Error(`Unknown email template type: ${type}`);
  }
  return templateFn(data);
};
