
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, QrCode } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-up">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 animate-float" />
            <span className="font-bold text-xl">QR Generator</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-sm font-medium transition-all duration-300 hover:text-primary story-link"
              style={{ '--index': index } as React.CSSProperties}
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle className="ml-2 animated-button" />
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="animated-button">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[400px] mx-0 my-0 px-0 py-0 rounded-2xl animate-slide-in-right">
            <div className="flex flex-col space-y-4 py-4 stagger-children">
              {menuItems.map((item, index) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="px-2 py-1 text-lg font-medium hover-lift transition-all duration-300"
                  onClick={closeSheet}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center px-2 pt-2">
                <ThemeToggle />
              </div>
              <div className="mt-auto px-2 pt-4">
                <SocialMediaIcons />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
