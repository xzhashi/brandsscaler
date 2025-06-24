
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import { Icons } from '../constants';
import HelpWidgetModal from './HelpWidgetModal'; // Import the new modal

const HeroSection: React.FC = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  return (
    <>
      <div className="bg-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          {/* Subtle background pattern or very light gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/5 via-brand-bg to-brand-bg"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-extrabold font-heading tracking-tight text-brand-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Scale Your Brand to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent mt-2">
                Revolutionary Heights
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-lg text-brand-text-secondary sm:max-w-xl md:mt-8 md:text-xl">
              BrandsScaler is your partner in crafting next-level marketing strategies, building unforgettable brand identities, and unlocking explosive growth. Powered by BlindTech.in innovation.
            </p>
          </div>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="rounded-md">
              <Button
                as={Link}
                to="/services"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Explore Our Services
              </Button>
            </div>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <Button
                onClick={() => setIsHelpModalOpen(true)}
                variant="outline"
                size="lg"
                className="w-full border-brand-primary/50 text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary hover:border-brand-primary"
                icon={React.cloneElement(Icons.LightBulbIcon as React.ReactElement<{ className?: string }>, {className: "w-5 h-5 text-brand-primary"})}
              >
                Guide Me to Growth
              </Button>
            </div>
          </div>
        </div>
      </div>
      <HelpWidgetModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </>
  );
};

// This is a workaround for react-router-dom Link with custom components
// In a real project with proper TS setup for libraries, this might not be needed
// or could be handled with module augmentation.
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      as?: React.ElementType;
      to?: string;
    }
  }

export default HeroSection;
