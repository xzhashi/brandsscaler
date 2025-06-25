

import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';
import { CORE_SERVICES_DATA } from '../data/serviceData'; // Import core services

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border text-sm">
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
              {/* Placeholder Social Icons */}
              <a href="#" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2.014a.828.828 0 01.594 0l6.866 2.059a.828.828 0 01.594.799v8.204a.828.828 0 01-.26.592l-4.22 4.22a.828.828 0 01-1.168 0l-4.22-4.22a.828.828 0 01-.26-.592V4.872a.828.828 0 01.594-.799L11.721 2.014l.328-.098.328.098zm0 1.25L5.75 5.56v7.88l4.086 4.086a.25.25 0 00.354 0L14.276 13.44V5.56L12.315 3.264z" clipRule="evenodd" /><path d="M12 6.875a5.125 5.125 0 100 10.25 5.125 5.125 0 000-10.25zm0 8.25a3.125 3.125 0 110-6.25 3.125 3.125 0 010 6.25zM16.125 7.125a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </a>
              <a href="#" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
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
