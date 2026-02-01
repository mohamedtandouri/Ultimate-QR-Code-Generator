
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of QR codes can I create?",
      answer: "You can create QR codes for URLs, text, email addresses, phone numbers, WiFi networks, contact cards (vCards), geographic locations, and eSIM profiles."
    },
    {
      question: "Can I customize the appearance of my QR codes?",
      answer: "Yes! You can customize colors, add gradients, embed logos, adjust corner radius, and select different error correction levels. You can also adjust the size and download in various formats."
    },
    {
      question: "What is error correction and which level should I choose?",
      answer: "Error correction allows QR codes to be readable even when partially damaged. Low (7%) is suitable for perfect conditions, Medium (15%) for normal use, Quartile (25%) for challenging conditions, and High (30%) for environments where damage is likely."
    },
    {
      question: "Can I add a logo to my QR code?",
      answer: "Yes, you can upload and embed a custom logo in the center of your QR code. The system automatically adjusts the error correction to ensure the QR code remains scannable."
    },
    {
      question: "What file formats can I download?",
      answer: "You can download QR codes as PNG images or SVG files. PNG is perfect for web use and printing, while SVG provides scalable vector graphics for professional applications."
    },
    {
      question: "How do WiFi QR codes work?",
      answer: "WiFi QR codes contain network credentials (SSID, password, security type). When scanned, compatible devices can automatically connect to the network without manually entering the password."
    },
    {
      question: "What is an eSIM QR code?",
      answer: "eSIM QR codes contain activation information for embedded SIM cards. When scanned by compatible devices, they can automatically download and install eSIM profiles from mobile carriers."
    },
    {
      question: "Are there any limitations on QR code content?",
      answer: "QR codes can store up to 4,296 alphanumeric characters or 7,089 numeric characters. The actual limit depends on the error correction level and data type."
    },
    {
      question: "Can I use these QR codes commercially?",
      answer: "Yes, all QR codes generated are free to use for personal and commercial purposes. There are no restrictions on usage or distribution."
    },
    {
      question: "Do QR codes expire?",
      answer: "No, QR codes themselves don't expire. However, the content they link to (like URLs) might become unavailable over time."
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about QR code generation
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Can't find the answer you're looking for? Feel free to reach out to us through our 
                contact page and we'll be happy to help!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
