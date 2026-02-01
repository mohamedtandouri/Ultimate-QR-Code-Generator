
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our QR code generator processes the information you provide to create QR codes. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Text, URLs, and other data you input into our forms</li>
                  <li>QR code customization preferences (colors, size, etc.)</li>
                  <li>Basic usage analytics to improve our service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information you provide solely to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Generate QR codes based on your input</li>
                  <li>Provide you with download options for your QR codes</li>
                  <li>Improve our service functionality and user experience</li>
                  <li>Respond to your support requests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your data security is our priority:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>QR codes are generated client-side in your browser</li>
                  <li>We do not store your QR code content on our servers</li>
                  <li>All data transmission is encrypted using HTTPS</li>
                  <li>We implement industry-standard security measures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may use third-party services for analytics and performance monitoring. These services may collect anonymized usage data to help us improve our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@tandouri.dev" className="text-primary hover:underline">
                    privacy@tandouri.dev
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Last updated: December 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
