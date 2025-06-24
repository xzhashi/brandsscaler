
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, Icons } from '../constants';
import { SimulatedCountry } from '../types';

interface NavbarProps {
  simulatedUserCountry: SimulatedCountry;
  onCountryChange: (country: SimulatedCountry) => void;
  availableCountries: SimulatedCountry[];
}

const Navbar: React.FC<NavbarProps> = ({ simulatedUserCountry, onCountryChange, availableCountries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = availableCountries.find(c => c.code === selectedCountryCode);
    if (selectedCountry) {
      onCountryChange(selectedCountry);
    }
  };

  return (
    <nav className="bg-brand-surface/80 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              {Icons.LogoFull}
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                        : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
             {/* Temporary Country Selector for Dev/Testing */}
            <div className="ml-6">
              <label htmlFor="country-select" className="sr-only">Simulate Country:</label>
              <select
                id="country-select"
                value={simulatedUserCountry.code}
                onChange={handleCountryChange}
                className="block w-full pl-3 pr-8 py-1.5 text-xs border-brand-border bg-brand-bg text-brand-text-secondary rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm appearance-none"
                aria-label="Simulate User Country (For Testing)"
              >
                <option value="" disabled>Simulate Country...</option>
                {availableCountries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-surface inline-flex items-center justify-center p-2 rounded-md text-brand-text-secondary hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? 
                React.cloneElement(Icons.MenuIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' }) : 
                React.cloneElement(Icons.CloseIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-surface border-t border-brand-border">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'text-brand-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* Temporary Country Selector for Dev/Testing - Mobile */}
            <div className="px-3 pt-3 pb-2">
              <label htmlFor="mobile-country-select" className="block text-xs font-medium text-brand-text-secondary mb-1">Simulate Country (Test):</label>
              <select
                id="mobile-country-select"
                value={simulatedUserCountry.code}
                onChange={(e) => {
                  handleCountryChange(e);
                  setIsOpen(false); // Close menu on selection
                }}
                className="block w-full pl-3 pr-8 py-2 text-base border-brand-border bg-brand-surface text-brand-text-primary rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary appearance-none"
                aria-label="Simulate User Country (For Testing)"
              >
                 <option value="" disabled>Simulate Country...</option>
                {availableCountries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;