
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StandardQRFormProps {
  onValueChange: (value: string) => void;
}

const StandardQRForm: React.FC<StandardQRFormProps> = ({ onValueChange }) => {
  const [type, setType] = useState('url');
  const [text, setText] = useState('https://tandouri.dev');
  
  useEffect(() => {
    if (text.trim()) {
      onValueChange(text);
    } else {
      onValueChange('https://tandouri.dev'); // Default fallback
    }
  }, [text, onValueChange]);

  const handleTypeChange = (value: string) => {
    setType(value);
    
    // Set default value based on type
    switch(value) {
      case 'url':
        setText('https://tandouri.dev');
        break;
      case 'text':
        setText('Enter your text here');
        break;
      case 'email':
        setText('mailto:mohamed@tandouri.dev');
        break;
      case 'phone':
        setText('tel:+212666393445');
        break;
      default:
        setText('');
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="hover-lift transition-all duration-300">
        <Label htmlFor="qr-type" className="transition-all duration-200">QR Code Type</Label>
        <Select value={type} onValueChange={handleTypeChange}>
          <SelectTrigger id="qr-type" className="w-full mt-1 animated-card">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent className="animate-scale-in">
            <SelectItem value="url" className="hover-lift">URL</SelectItem>
            <SelectItem value="text" className="hover-lift">Text</SelectItem>
            <SelectItem value="email" className="hover-lift">Email</SelectItem>
            <SelectItem value="phone" className="hover-lift">Phone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hover-lift transition-all duration-300">
        <Label htmlFor="qr-content" className="transition-all duration-200">
          {type === 'text' ? 'Content' : type.charAt(0).toUpperCase() + type.slice(1)}
        </Label>
        {type === 'text' ? (
          <Textarea
            id="qr-content"
            placeholder="Enter text for the QR code"
            className="mt-1 animated-card focus:animate-glow transition-all duration-300"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <Input
            id="qr-content"
            placeholder={`Enter ${type} for the QR code`}
            className="mt-1 animated-card focus:animate-glow transition-all duration-300"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default StandardQRForm;
