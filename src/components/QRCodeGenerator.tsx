
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import StandardQRForm from './StandardQRForm';
import ESIMQRForm from './ESIMQRForm';
import WiFiQRForm from './WiFiQRForm';
import ContactQRForm from './ContactQRForm';
import GeoLocationQRForm from './GeoLocationQRForm';
import CalendarQRForm from './CalendarQRForm';
import CryptoQRForm from './CryptoQRForm';
import EmailQRForm from './EmailQRForm';
import SMSQRForm from './SMSQRForm';
import SocialQRForm from './SocialQRForm';
import QRCodeCustomization from './QRCodeCustomization';
import FluidDropdown from './FluidDropdown';
import QRCodeAppearance from './QRCodeAppearance';
import QRCodeExportOptions from './QRCodeExportOptions';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { exportQRCode } from '../utils/qrCodeDownload';
import type { ExportOptions } from '../types/qrExport';

const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState('https://tandouri.dev');
  const [qrSize, setQrSize] = useState(256);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [errorLevel, setErrorLevel] = useState('M');
  const [activeTab, setActiveTab] = useState('standard');
  const [logo, setLogo] = useState<string | null>(null);
  const [cornerRadius, setCornerRadius] = useState(0);
  const [gradient, setGradient] = useState<{
    from: string;
    to: string;
    type: string;
  } | null>(null);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [esimFormData, setEsimFormData] = useState<{
    pukCode?: string;
    pinCode?: string;
    phoneNumber?: string;
    operator?: string;
  }>({});
  const [wifiFormData, setWifiFormData] = useState<{
    ssid?: string;
    security?: string;
    password?: string;
    hidden?: string;
  }>({});

  const qrCodeRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    if (typeParam && ['standard', 'esim', 'wifi', 'contact', 'location', 'calendar', 'crypto', 'email', 'sms', 'social'].includes(typeParam)) {
      setActiveTab(typeParam);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('type', activeTab);
    window.history.replaceState({}, '', url.toString());
  }, [activeTab]);

  const handleExport = async (options: ExportOptions): Promise<void> => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (!canvas) {
      throw new Error('QR code canvas not found');
    }

    setIsExporting(true);
    
    try {
      let qrType: 'wifi' | 'esim' | 'standard' = 'standard';
      let additionalInfo;

      if (activeTab === 'esim') {
        qrType = 'esim';
        additionalInfo = esimFormData;
      } else if (activeTab === 'wifi') {
        qrType = 'wifi';
        additionalInfo = wifiFormData;
      }

      await exportQRCode(canvas, options, qrType, additionalInfo);
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    setQrValue('https://tandouri.dev');
    setQrSize(256);
    setFgColor('#000000');
    setBgColor('#ffffff');
    setErrorLevel('M');
    setLogo(null);
    setCornerRadius(0);
    setGradient(null);
    setEsimFormData({});
    setWifiFormData({});
  };

  const renderQRForm = () => {
    switch (activeTab) {
      case 'standard':
        return <StandardQRForm onValueChange={handleQRValueChange} />;
      case 'esim':
        return <ESIMQRForm onValueChange={handleQRValueChange} onFormDataChange={handleESIMFormDataChange} />;
      case 'wifi':
        return <WiFiQRForm onValueChange={handleQRValueChange} onFormDataChange={handleWiFiFormDataChange} />;
      case 'contact':
        return <ContactQRForm onValueChange={handleQRValueChange} />;
      case 'location':
        return <GeoLocationQRForm onValueChange={handleQRValueChange} />;
      case 'calendar':
        return <CalendarQRForm onValueChange={handleQRValueChange} />;
      case 'crypto':
        return <CryptoQRForm onValueChange={handleQRValueChange} />;
      case 'email':
        return <EmailQRForm onValueChange={handleQRValueChange} />;
      case 'sms':
        return <SMSQRForm onValueChange={handleQRValueChange} />;
      case 'social':
        return <SocialQRForm onValueChange={handleQRValueChange} />;
      default:
        return <StandardQRForm onValueChange={handleQRValueChange} />;
    }
  };

  const handleQRValueChange = useCallback((value: string) => {
    setQrValue(value);
  }, []);

  const handleESIMFormDataChange = useCallback((data: { pukCode?: string; pinCode?: string; phoneNumber?: string; operator?: string }) => {
    setEsimFormData(data);
  }, []);

  const handleWiFiFormDataChange = useCallback((data: { ssid?: string; security?: string; password?: string; hidden?: string }) => {
    setWifiFormData(data);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center mb-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <QrCode className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">QR Code Generator</h1>
        </div>
        <p className="text-muted-foreground">Create and customize QR codes for any purpose</p>
      </div>

      <Card className="p-4 mb-8">
        <div className="mb-6">
          <FluidDropdown activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Form Section */}
        <div className="mb-8">
          {renderQRForm()}
        </div>

        <Button variant="outline" onClick={() => setShowAdvancedOptions(!showAdvancedOptions)} className="w-full mb-4">
          {showAdvancedOptions ? 'Hide' : 'Show'} Advanced Options
        </Button>
        
        {showAdvancedOptions && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <QRCodeAppearance 
                qrSize={qrSize} 
                setQrSize={setQrSize} 
                fgColor={fgColor} 
                setFgColor={setFgColor} 
                bgColor={bgColor} 
                setBgColor={setBgColor} 
                errorLevel={errorLevel} 
                setErrorLevel={setErrorLevel} 
              />
            </div>
            
            <div>
              <QRCodeCustomization 
                onLogoChange={setLogo} 
                onCornerRadiusChange={setCornerRadius} 
                onGradientChange={setGradient} 
                logo={logo} 
                cornerRadius={cornerRadius} 
                gradient={gradient} 
              />
            </div>
          </div>
        )}
      </Card>

      {/* QR Code Preview Section */}
      <Card className="p-6 mb-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">QR Code Preview</h3>
          <div className="mb-6">
            <div ref={qrCodeRef} className="relative transition-all duration-300" style={{ borderRadius: `${cornerRadius}px`, overflow: 'hidden' }} data-qr-container>
                <QRCodeCanvas 
                  id="qr-code" 
                  value={qrValue} 
                  size={qrSize} 
                  level={errorLevel as "L" | "M" | "Q" | "H"} 
                  includeMargin={true} 
                  bgColor={bgColor} 
                  fgColor={fgColor} 
                  imageSettings={logo ? {
                    src: logo,
                    excavate: true,
                    width: qrSize * 0.2,
                    height: qrSize * 0.2
                  } : undefined} 
                  className="px-0 mx-[15px] my-[15px]" 
                />
            </div>
          </div>
          
          <div className="flex gap-4 w-full max-w-xs mb-6">
            <Button onClick={handleReset} variant="outline" className="flex-1">
              <RefreshCw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>

          {/* Export Options */}
          <div className="w-full max-w-md">
            <QRCodeExportOptions onExport={handleExport} isExporting={isExporting} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QRCodeGenerator;
