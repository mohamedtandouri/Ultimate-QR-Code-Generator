
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: "/uploads/Standard.png",
      title: "Standard QR Codes",
      description: "Create QR codes for URLs, text, email addresses, and phone numbers with ease."
    },
    {
      icon: "/uploads/wifi.png",
      title: "WiFi QR Codes",
      description: "Generate QR codes that automatically connect devices to WiFi networks."
    },
    {
      icon: "/uploads/contact.png",
      title: "Contact Cards",
      description: "Create vCard QR codes for easy contact information sharing."
    },
    {
      icon: "/uploads/location.png",
      title: "Location QR Codes",
      description: "Generate geo-location QR codes for addresses and coordinates."
    },
    {
      icon: "/uploads/esim.png",
      title: "eSIM QR Codes",
      description: "Create QR codes for eSIM profile installation on mobile devices."
    },
    {
      icon: "/uploads/calendar.png",
      title: "Calendar Events",
      description: "Creates calendar events with date/time pickers for easy scheduling."
    },
    {
      icon: "/uploads/bitcoin.png",
      title: "Crypto Payments",
      description: "Supports Bitcoin, Ethereum, Litecoin, and Dogecoin with wallet addresses and payment details."
    },
    {
      icon: "/uploads/email.png",
      title: "Email Templates",
      description: "Pre-fills email clients with recipient, subject, CC, BCC, and message."
    },
    {
      icon: "/uploads/social.png",
      title: "Social Media Links",
      description: "Links to various social media platforms or custom URLs for easy sharing."
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <QrCode className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">About QR Generator</h1>
            <p className="text-xl text-muted-foreground">
              The most comprehensive QR code generator for all your needs
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We believe in making digital connections simple and accessible. Our QR code generator 
                provides a comprehensive suite of tools to create QR codes for any purpose, from simple 
                URLs to complex eSIM configurations. Whether you're a business owner, developer, or 
                individual user, our platform offers the flexibility and customization options you need.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full h-full transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="h-8 w-8 "
                    />
                    <span className="text-base">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond basic QR code generation, we offer advanced customization features including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Custom colors and gradients</li>
                <li>Logo embedding</li>
                <li>Rounded corners</li>
                <li>Multiple error correction levels</li>
                <li>High-resolution downloads</li>
                <li>Multiple export formats (PNG, JPG, SVG, PDF)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
