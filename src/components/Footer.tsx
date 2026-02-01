
import React from 'react';
import { QrCode } from 'lucide-react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background animate-fade-in">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start animate-slide-in-left">
            <div className="flex items-center space-x-2 mb-4 hover-scale">
              <QrCode className="h-5 w-5 animate-bounce-gentle" />
              <span className="font-bold">QR Generator</span>
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left max-w-md">
              Designed & Developed with love 💖 by SIMO for the community. Generate QR codes for any purpose.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 stagger-children">
            <div className="flex flex-col items-center md:items-start animated-card p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Pages</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 story-link">
                  About
                </Link>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 story-link">
                  Contact
                </Link>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-all duration-300 story-link">
                  FAQ
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start animated-card p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Legal</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-all duration-300 story-link">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-all duration-300 story-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
