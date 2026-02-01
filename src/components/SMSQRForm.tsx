import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface SMSQRFormProps {
  onValueChange: (value: string) => void;
}

const SMSQRForm: React.FC<SMSQRFormProps> = ({ onValueChange }) => {
  const [smsData, setSmsData] = useState({
    phoneNumber: '+212666393445',
    message: 'Hello! This SMS was sent via QR code.'
  });

  useEffect(() => {
    const smsValue = `sms:${smsData.phoneNumber}?body=${encodeURIComponent(smsData.message)}`;
    onValueChange(smsValue);
  }, [smsData, onValueChange]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5" />
        <h3 className="text-lg font-semibold">SMS Configuration</h3>
      </div>

      <div className="grid gap-4">
        <div>
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input
            id="phone-number"
            type="tel"
            placeholder="+212 666 393 445"
            value={smsData.phoneNumber}
            onChange={(e) => setSmsData({ ...smsData, phoneNumber: e.target.value })}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            The recipient's phone number
          </p>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your SMS message"
            value={smsData.message}
            onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
            className="mt-1"
            rows={3}
          />
          <p className="text-sm text-muted-foreground mt-1">
            The SMS message content
          </p>
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Scanning this QR code will open the SMS app with the pre-filled message.
        </p>
      </div>
    </div>
  );
};

export default SMSQRForm;