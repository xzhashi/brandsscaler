
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-xl shadow-soft-lg my-16 md:my-24">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold font-heading text-white sm:text-4xl">
          <span className="block">{title}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          {description}
        </p>
        <div className="mt-8">
            <Button 
                as={Link} 
                to={buttonLink}
                variant="outline" // Will use new outline style
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary focus:ring-white" // Keep specific white for this context
            >
                {buttonText}
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;