import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, FileText, Wifi, Contact, MapPin, Cpu } from "lucide-react";

interface QRCodeContentPreviewProps {
  qrValue: string;
  activeTab: string;
}

const QRCodeContentPreview: React.FC<QRCodeContentPreviewProps> = ({ qrValue, activeTab }) => {
  const getQRTypeIcon = () => {
    switch (activeTab) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'contact': return <Contact className="h-4 w-4" />;
      case 'location': return <MapPin className="h-4 w-4" />;
      case 'esim': return <Cpu className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getQRTypeName = () => {
    switch (activeTab) {
      case 'wifi': return 'WiFi Network';
      case 'contact': return 'Contact Information';
      case 'location': return 'Location';
      case 'esim': return 'eSIM Profile';
      default: return 'Standard QR';
    }
  };

  const parseESIMData = (value: string) => {
    if (!value.startsWith('LPA:')) return null;
    
    const parts = value.split('$');
    const data: Record<string, string> = {};
    
    if (parts[1]) data['SM-DP+ Address'] = parts[1];
    if (parts[2]) data['Activation Code'] = parts[2];
    if (parts[3]) data['Confirmation Code'] = parts[3];
    
    return data;
  };

  const parseWiFiData = (value: string) => {
    if (!value.startsWith('WIFI:')) return null;
    
    const data: Record<string, string> = {};
    const regex = /([TSPHN]):([^;]*);/g;
    let match;
    
    while ((match = regex.exec(value)) !== null) {
      const [, key, val] = match;
      switch (key) {
        case 'T': data['Security Type'] = val; break;
        case 'S': data['Network Name (SSID)'] = decodeURIComponent(val); break;
        case 'P': data['Password'] = val ? '••••••••' : 'No password'; break;
        case 'H': data['Hidden Network'] = val === 'true' ? 'Yes' : 'No'; break;
      }
    }
    
    return data;
  };

  const parseContactData = (value: string) => {
    if (!value.startsWith('BEGIN:VCARD')) return null;
    
    const data: Record<string, string> = {};
    const lines = value.split('\n');
    
    lines.forEach(line => {
      if (line.startsWith('FN:')) data['Full Name'] = line.substring(3);
      if (line.startsWith('ORG:')) data['Organization'] = line.substring(4);
      if (line.startsWith('TEL:')) data['Phone'] = line.substring(4);
      if (line.startsWith('EMAIL:')) data['Email'] = line.substring(6);
      if (line.startsWith('URL:')) data['Website'] = line.substring(4);
    });
    
    return data;
  };

  const parseLocationData = (value: string) => {
    if (value.startsWith('geo:')) {
      const coords = value.substring(4).split(',');
      return {
        'Latitude': coords[0] || 'Not specified',
        'Longitude': coords[1] || 'Not specified',
        'Type': 'Geographic Coordinates'
      };
    } else if (value.includes('maps.google.com')) {
      const url = new URL(value);
      const query = url.searchParams.get('q');
      return {
        'Location': query || 'Location search',
        'Type': 'Maps Search'
      };
    }
    return null;
  };

  const getParsedData = () => {
    switch (activeTab) {
      case 'esim': return parseESIMData(qrValue);
      case 'wifi': return parseWiFiData(qrValue);
      case 'contact': return parseContactData(qrValue);
      case 'location': return parseLocationData(qrValue);
      default: return null;
    }
  };

  const parsedData = getParsedData();
  const dataLength = qrValue.length;
  const estimatedSize = Math.ceil(dataLength / 8); // Rough byte estimate

  return (
    <Card className="mt-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Eye className="h-4 w-4" />
          Content Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* QR Type and Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getQRTypeIcon()}
            <span className="font-medium">{getQRTypeName()}</span>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">{dataLength} chars</Badge>
            <Badge variant="outline">{estimatedSize} bytes</Badge>
          </div>
        </div>

        <Separator />

        {/* Parsed Data */}
        {parsedData ? (
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
              Decoded Information
            </h4>
            <div className="grid gap-2">
              {Object.entries(parsedData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start gap-4">
                  <span className="text-sm font-medium text-muted-foreground min-w-0 flex-shrink">
                    {key}:
                  </span>
                  <span className="text-sm text-right break-all min-w-0 flex-grow">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
              Raw Content
            </h4>
            <div className="bg-muted p-3 rounded-md">
              <code className="text-xs break-all whitespace-pre-wrap">
                {qrValue}
              </code>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeContentPreview;
