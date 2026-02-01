
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialMediaIcons = () => {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" asChild className="animated-button hover:animate-glow">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="animated-button hover:animate-glow">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="animated-button hover:animate-glow">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
    </div>
  );
};
