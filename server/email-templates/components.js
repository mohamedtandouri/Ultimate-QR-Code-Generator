import { styles } from './styles.js';
export { styles };

export const EmailHeader = ({ title }) => `
  <tr>
    <td style="${styles.header}">
      <h1 style="${styles.h1}">${title}</h1>
    </td>
  </tr>
`;

export const EmailFooter = () => `
  <tr>
    <td style="${styles.footer}">
      <p style="margin: 0 0 10px 0;">Ultimate QR Code Generator</p>
      <div style="margin-bottom: 10px;">
        <a href="#" style="${styles.link} font-size: 12px; margin: 0 10px;">Website</a>
        <a href="#" style="${styles.link} font-size: 12px; margin: 0 10px;">Support</a>
      </div>
      <p style="margin: 0; opacity: 0.7;">You received this email because of a transaction or request on our platform.</p>
    </td>
  </tr>
`;

export const Section = ({ children, style = '' }) => `
  <tr>
    <td style="${styles.content} ${style}">
      ${children}
    </td>
  </tr>
`;

export const Button = ({ text, href }) => `
  <div style="text-align: center; margin: 20px 0;">
    <a href="${href}" style="${styles.button}">${text}</a>
  </div>
`;

export const KeyValueRow = ({ label, value }) => `
  <div style="margin-bottom: 16px;">
    <span style="display: block; font-weight: 600; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">${label}</span>
    <div style="color: #0F172A; font-size: 16px; font-weight: 500;">${value}</div>
  </div>
`;
