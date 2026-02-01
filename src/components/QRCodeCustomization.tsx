
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface QRCodeCustomizationProps {
  onLogoChange: (logo: string | null) => void;
  onCornerRadiusChange: (radius: number) => void;
  onGradientChange: (gradient: { from: string; to: string; type: string } | null) => void;
  logo: string | null;
  cornerRadius: number;
  gradient: { from: string; to: string; type: string } | null;
}

const QRCodeCustomization: React.FC<QRCodeCustomizationProps> = ({
  onLogoChange,
  onCornerRadiusChange,
  onGradientChange,
  logo,
  cornerRadius,
  gradient
}) => {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [useGradient, setUseGradient] = useState<boolean>(!!gradient);
  const [gradientType, setGradientType] = useState<string>(gradient?.type || 'linear');
  const [gradientFrom, setGradientFrom] = useState<string>(gradient?.from || '#000000');
  const [gradientTo, setGradientTo] = useState<string>(gradient?.to || '#000000');

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onLogoChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoFile(null);
    onLogoChange(null);
  };

  const handleGradientToggle = (checked: boolean) => {
    setUseGradient(checked);
    if (!checked) {
      onGradientChange(null);
    } else {
      onGradientChange({
        from: gradientFrom,
        to: gradientTo,
        type: gradientType
      });
    }
  };

  const updateGradient = () => {
    if (useGradient) {
      onGradientChange({
        from: gradientFrom,
        to: gradientTo,
        type: gradientType
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Customization</h3>
      
      <div className="space-y-2">
        <Label>Custom Logo</Label>
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <Input 
              type="file" 
              onChange={handleLogoUpload}
              accept="image/*"
              className="text-sm"
            />
          </div>
          {logo && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRemoveLogo}
            >
              Remove
            </Button>
          )}
        </div>
        {logo && (
          <div className="mt-2 border rounded p-2 flex justify-center">
            <img 
              src={logo} 
              alt="Logo preview" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="corner-radius">Rounded Corners: {cornerRadius}%</Label>
        </div>
        <Slider
          id="corner-radius"
          min={0}
          max={50}
          step={1}
          value={[cornerRadius]}
          onValueChange={(values) => onCornerRadiusChange(values[0])}
        />
      </div>

      {/* Gradient feature temporarily disabled */}
      {/* <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="use-gradient">Color Gradient</Label>
          <Switch 
            id="use-gradient" 
            checked={useGradient}
            onCheckedChange={handleGradientToggle}
          />
        </div>
        
        {useGradient && (
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <Label htmlFor="gradient-from">From</Label>
              <div className="flex mt-1">
                <Input 
                  type="color" 
                  id="gradient-from"
                  value={gradientFrom}
                  onChange={(e) => {
                    setGradientFrom(e.target.value);
                    setTimeout(updateGradient, 100);
                  }}
                  className="w-12 h-12 p-1 mr-2"
                />
                <Input 
                  type="text" 
                  value={gradientFrom}
                  onChange={(e) => {
                    setGradientFrom(e.target.value);
                    setTimeout(updateGradient, 100);
                  }}
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="gradient-to">To</Label>
              <div className="flex mt-1">
                <Input 
                  type="color" 
                  id="gradient-to"
                  value={gradientTo}
                  onChange={(e) => {
                    setGradientTo(e.target.value);
                    setTimeout(updateGradient, 100);
                  }}
                  className="w-12 h-12 p-1 mr-2"
                />
                <Input 
                  type="text" 
                  value={gradientTo}
                  onChange={(e) => {
                    setGradientTo(e.target.value);
                    setTimeout(updateGradient, 100);
                  }}
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <Label htmlFor="gradient-type">Gradient Type</Label>
              <select
                id="gradient-type"
                value={gradientType}
                onChange={(e) => {
                  setGradientType(e.target.value);
                  setTimeout(updateGradient, 100);
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default QRCodeCustomization;
