
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EmailQRFormProps {
  onValueChange: (value: string) => void;
}

const EmailQRForm: React.FC<EmailQRFormProps> = ({ onValueChange }) => {
  const [emailData, setEmailData] = useState({
    to: 'mohamed@tandouri.dev',
    cc: '',
    bcc: '',
    subject: 'Hello from QR Generator',
    body: 'This email was created using our QR code generator. Visit https://tandouri.dev for more information.'
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (emailData.cc) params.append('cc', emailData.cc);
    if (emailData.bcc) params.append('bcc', emailData.bcc);
    if (emailData.subject) params.append('subject', emailData.subject);
    if (emailData.body) params.append('body', emailData.body);

    const emailValue = `mailto:${emailData.to}${params.toString() ? '?' + params.toString() : ''}`;
    onValueChange(emailValue);
  }, [emailData, onValueChange]);

  return (
    <div className="space-y-4 animate-fade-in stagger-children">
      <div className="hover-lift transition-all duration-300" style={{ '--index': 0 } as React.CSSProperties}>
        <Label htmlFor="email-to" className="transition-all duration-200">To</Label>
        <Input
          id="email-to"
          type="email"
          placeholder="recipient@tandouri.dev"
          className="mt-1 animated-card focus:animate-glow"
          value={emailData.to}
          onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
        />
      </div>

      <div className="hover-lift transition-all duration-300" style={{ '--index': 1 } as React.CSSProperties}>
        <Label htmlFor="email-cc" className="transition-all duration-200">CC (Optional)</Label>
        <Input
          id="email-cc"
          type="email"
          placeholder="cc@tandouri.dev"
          className="mt-1 animated-card focus:animate-glow"
          value={emailData.cc}
          onChange={(e) => setEmailData({ ...emailData, cc: e.target.value })}
        />
      </div>

      <div className="hover-lift transition-all duration-300" style={{ '--index': 2 } as React.CSSProperties}>
        <Label htmlFor="email-bcc" className="transition-all duration-200">BCC (Optional)</Label>
        <Input
          id="email-bcc"
          type="email"
          placeholder="bcc@tandouri.dev"
          className="mt-1 animated-card focus:animate-glow"
          value={emailData.bcc}
          onChange={(e) => setEmailData({ ...emailData, bcc: e.target.value })}
        />
      </div>

      <div className="hover-lift transition-all duration-300" style={{ '--index': 3 } as React.CSSProperties}>
        <Label htmlFor="email-subject" className="transition-all duration-200">Subject</Label>
        <Input
          id="email-subject"
          placeholder="Enter email subject"
          className="mt-1 animated-card focus:animate-glow"
          value={emailData.subject}
          onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
        />
      </div>

      <div className="hover-lift transition-all duration-300" style={{ '--index': 4 } as React.CSSProperties}>
        <Label htmlFor="email-body" className="transition-all duration-200">Message</Label>
        <Textarea
          id="email-body"
          placeholder="Enter email message"
          className="mt-1 animated-card focus:animate-glow"
          rows={4}
          value={emailData.body}
          onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
        />
      </div>
    </div>
  );
};

export default EmailQRForm;
