
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our service.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using our QR code generator service, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our service provides a free QR code generator that supports various types including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Standard QR codes (URLs, text, email, phone)</li>
                  <li>WiFi network QR codes</li>
                  <li>Contact information (vCard)</li>
                  <li>Location and maps</li>
                  <li>eSIM profiles</li>
                  <li>Calendar events</li>
                  <li>Cryptocurrency payments</li>
                  <li>Email templates</li>
                  <li>Social media links</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When using our service, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not generate QR codes containing illegal, harmful, or offensive content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our service is provided "as is" without any warranties. We are not liable for any damages arising from the use of our QR code generator, including but not limited to data loss, business interruption, or any other commercial damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@tandouri.dev" className="text-primary hover:underline">
                    legal@tandouri.dev
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

export default Terms;
