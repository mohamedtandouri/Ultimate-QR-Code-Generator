
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SocialQRFormProps {
  onValueChange: (value: string) => void;
}

const SocialQRForm: React.FC<SocialQRFormProps> = ({ onValueChange }) => {
  const [socialData, setSocialData] = useState({
    platform: 'twitter',
    username: 'tandouri_dev',
    customUrl: ''
  });

  useEffect(() => {
    let socialValue = '';
    
    if (socialData.platform === 'custom') {
      socialValue = socialData.customUrl || 'https://tandouri.dev';
    } else {
      switch (socialData.platform) {
        case 'twitter':
          socialValue = `https://twitter.com/${socialData.username}`;
          break;
        case 'facebook':
          socialValue = `https://facebook.com/${socialData.username}`;
          break;
        case 'instagram':
          socialValue = `https://instagram.com/${socialData.username}`;
          break;
        case 'linkedin':
          socialValue = `https://linkedin.com/in/${socialData.username}`;
          break;
        case 'youtube':
          socialValue = `https://youtube.com/@${socialData.username}`;
          break;
        case 'tiktok':
          socialValue = `https://tiktok.com/@${socialData.username}`;
          break;
        case 'github':
          socialValue = `https://github.com/${socialData.username}`;
          break;
        default:
          socialValue = 'https://tandouri.dev';
      }
    }

    onValueChange(socialValue);
  }, [socialData, onValueChange]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="social-platform">Social Platform</Label>
        <Select value={socialData.platform} onValueChange={(value) => setSocialData({ ...socialData, platform: value })}>
          <SelectTrigger id="social-platform" className="w-full mt-1">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="twitter">Twitter</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="github">GitHub</SelectItem>
            <SelectItem value="custom">Custom URL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {socialData.platform === 'custom' ? (
        <div>
          <Label htmlFor="custom-url">Custom URL</Label>
          <Input
            id="custom-url"
            placeholder="https://tandouri.dev"
            className="mt-1"
            value={socialData.customUrl}
            onChange={(e) => setSocialData({ ...socialData, customUrl: e.target.value })}
          />
        </div>
      ) : (
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="tandouri_dev"
            className="mt-1"
            value={socialData.username}
            onChange={(e) => setSocialData({ ...socialData, username: e.target.value })}
          />
        </div>
      )}
    </div>
  );
};

export default SocialQRForm;
