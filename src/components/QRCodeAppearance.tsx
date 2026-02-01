
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QRCodeAppearanceProps {
  qrSize: number;
  setQrSize: (size: number) => void;
  fgColor: string;
  setFgColor: (color: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  errorLevel: string;
  setErrorLevel: (level: string) => void;
}

const QRCodeAppearance: React.FC<QRCodeAppearanceProps> = ({
  qrSize,
  setQrSize,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  errorLevel,
  setErrorLevel
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Appearance Settings</h3>
      <div>
        <Label htmlFor="qr-size">Size: {qrSize}px</Label>
        <Slider 
          id="qr-size"
          min={128} 
          max={400} 
          step={8} 
          value={[qrSize]} 
          onValueChange={(vals) => setQrSize(vals[0])}
          className="my-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fg-color">Foreground Color</Label>
          <div className="flex mt-2">
            <Input 
              id="fg-color"
              type="color" 
              value={fgColor} 
              onChange={(e) => setFgColor(e.target.value)} 
              className="w-12 h-12 p-1 mr-2"
            />
            <Input 
              type="text" 
              value={fgColor} 
              onChange={(e) => setFgColor(e.target.value)} 
              className="flex-1"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="bg-color">Background Color</Label>
          <div className="flex mt-2">
            <Input 
              id="bg-color"
              type="color" 
              value={bgColor} 
              onChange={(e) => setBgColor(e.target.value)} 
              className="w-12 h-12 p-1 mr-2"
            />
            <Input 
              type="text" 
              value={bgColor} 
              onChange={(e) => setBgColor(e.target.value)} 
              className="flex-1"
            />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="error-level">Error Correction Level</Label>
        <Select value={errorLevel} onValueChange={setErrorLevel}>
          <SelectTrigger id="error-level" className="mt-2">
            <SelectValue placeholder="Select error correction level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="L">Low (7%)</SelectItem>
            <SelectItem value="M">Medium (15%)</SelectItem>
            <SelectItem value="Q">Quartile (25%)</SelectItem>
            <SelectItem value="H">High (30%)</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground mt-1">
          Higher levels improve error correction but make the QR code more complex
        </p>
      </div>
    </div>
  );
};

export default QRCodeAppearance;
