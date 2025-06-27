
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
    <div className="bg-gradient-full rounded-xl shadow-soft-lg my-16 md:my-24 noise-overlay overflow-hidden">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary focus:ring-white"
            >
                {buttonText}
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
