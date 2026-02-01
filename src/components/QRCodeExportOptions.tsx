
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Settings, FileText, Image, FileType, File } from "lucide-react";
import { toast } from "sonner";
import FluidDropdown from './FluidDropdown';
import type { ExportOptions } from '../types/qrExport';
import type { LucideIcon } from 'lucide-react';

interface FormatCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const formatCategories: FormatCategory[] = [
  { id: "png", label: "PNG Image", icon: Image, color: "#4ECDC4" },
  { id: "jpg", label: "JPG Image", icon: Image, color: "#45B7D1" },
  { id: "svg", label: "SVG Vector", icon: FileType, color: "#A06CD5" },
  { id: "pdf", label: "PDF Document", icon: File, color: "#F9C74F" },
];

interface QRCodeExportOptionsProps {
  onExport: (options: ExportOptions) => Promise<void>;
  isExporting: boolean;
}

const QRCodeExportOptions: React.FC<QRCodeExportOptionsProps> = ({ onExport, isExporting }) => {
  const [format, setFormat] = useState<ExportOptions['format']>('png');
  const [size, setSize] = useState(512);
  const [quality, setQuality] = useState(0.92);
  const [filename, setFilename] = useState('qrcode');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFormatChange = (formatId: string) => {
    setFormat(formatId as ExportOptions['format']);
  };

  const handleExport = async () => {
    try {
      const options: ExportOptions = {
        format,
        size,
        quality,
        filename: filename || 'qrcode'
      };
      
      await onExport(options);
      toast.success(`QR code exported successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Failed to export QR code. Please try again.');
    }
  };

  return (
    <Card className="w-full animated-card animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Download className="h-4 w-4 animate-bounce-gentle" />
          Export Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 stagger-children">
        <div className="grid grid-cols-2 gap-4">
          <div className="hover-lift transition-all duration-300" style={{ '--index': 0 } as React.CSSProperties}>
            <Label htmlFor="format" className="transition-all duration-200">Format</Label>
            <div className="mt-1">
              <FluidDropdown 
                activeTab={format}
                onTabChange={handleFormatChange}
                categories={formatCategories}
              />
            </div>
          </div>

          <div className="hover-lift transition-all duration-300" style={{ '--index': 1 } as React.CSSProperties}>
            <Label htmlFor="filename" className="transition-all duration-200">Filename</Label>
            <Input
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="qrcode"
              className="mt-1 animated-card focus:animate-glow"
            />
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full text-sm animated-button"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <Settings className="mr-2 h-4 w-4" />
          {showAdvanced ? 'Hide' : 'Show'} Advanced Options
        </Button>

        {showAdvanced && (
          <div className="space-y-3 pt-2 border-t animate-slide-in-up stagger-children">
            <div className="hover-lift transition-all duration-300" style={{ '--index': 0 } as React.CSSProperties}>
              <Label htmlFor="size" className="transition-all duration-200">Size (pixels)</Label>
              <Input
                id="size"
                type="number"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                min={128}
                max={2048}
                step={64}
                className="mt-1 animated-card focus:animate-glow"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Recommended: 256-1024px
              </p>
            </div>

            {(format === 'jpg' || format === 'png') && (
              <div className="hover-lift transition-all duration-300" style={{ '--index': 1 } as React.CSSProperties}>
                <Label htmlFor="quality" className="transition-all duration-200">Quality</Label>
                <Input
                  id="quality"
                  type="number"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  min={0.1}
                  max={1}
                  step={0.1}
                  className="mt-1 animated-card focus:animate-glow"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  0.1 (low) to 1.0 (high quality)
                </p>
              </div>
            )}
          </div>
        )}

        <Button 
          onClick={handleExport} 
          disabled={isExporting}
          className="w-full animated-button hover:animate-glow"
          style={{ '--index': 3 } as React.CSSProperties}
        >
          <Download className="mr-2 h-4 w-4" />
          {isExporting ? 'Exporting...' : `Export as ${format.toUpperCase()}`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodeExportOptions;
