

import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';
import { CORE_SERVICES_DATA } from '../data/serviceData'; // Import core services

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border text-sm noise-overlay">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            {Icons.LogoFull}
            <p className="text-brand-text-secondary leading-relaxed">
              Revolutionizing brands, one pixel at a time. BrandsScaler partners with businesses for transformative growth, powered by BlindTech.in.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-text-primary tracking-wider uppercase mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Our Services</Link></li>
              {/* <li><Link to="/insights" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">AI Insights</Link></li> */} {/* Removed */}
              <li><Link to="/contact" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Focus Areas */}
          <div>
            <h3 className="font-semibold text-brand-text-primary tracking-wider uppercase mb-3">Our Focus Areas</h3>
            <ul className="space-y-2">
              {CORE_SERVICES_DATA.map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
               <li><Link to="/services" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 font-medium">View All Services...</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Connect */}
           <div>
            <h3 className="font-semibold text-brand-text-primary tracking-wider uppercase mb-3">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                {React.cloneElement(Icons.FacebookIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
              </a>
              <a href="#" aria-label="Instagram" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                {React.cloneElement(Icons.InstagramIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                {React.cloneElement(Icons.TwitterIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
              </a>
               <a href="#" aria-label="LinkedIn" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                {React.cloneElement(Icons.LinkedInIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
              </a>
            </div>
             <div className="flex items-center space-x-2 text-brand-text-secondary">
              {Icons.PartnershipIcon && React.cloneElement(Icons.PartnershipIcon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-brand-primary/80' })}
              <span>
                Tech by <a href="https://blindtech.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:text-brand-accent transition-colors duration-200">BlindTech.in</a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border/50 text-center">
          <p className="text-brand-text-secondary/80 text-xs">
            &copy; {new Date().getFullYear()} BrandsScaler. All rights reserved. A proud venture with BlindTech.in.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;