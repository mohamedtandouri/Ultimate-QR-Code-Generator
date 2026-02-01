
import React from "react";
import QRCodeGenerator from "../components/QRCodeGenerator";

const Index = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
              Ultimate QR Code Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              Create custom QR codes for WiFi, contacts, locations, eSIMs and more with our easy-to-use interface.
            </p>
          </div>
          
          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
};

export default Index;
