import { styles } from './styles.js';

export const BaseLayout = ({ title, previewText, children }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width: 620px) {
      .container { padding: 20px 10px !important; }
      .content { padding: 20px !important; }
    }
  </style>
</head>
<body style="${styles.body}">
  <div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${previewText || title}
  </div>
  
  <div class="container" style="${styles.container}">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="${styles.card}">
      ${children}
    </table>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="${styles.subtext} font-size: 12px;">
        © ${new Date().getFullYear()} Ultimate QR Code Generator. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};
