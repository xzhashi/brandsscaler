
import React, { useState, useEffect, useRef } from 'react';
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
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  const handleMobileCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = availableCountries.find(c => c.code === selectedCountryCode);
    if (selectedCountry) {
      onCountryChange(selectedCountry);
    }
  };

  const handleDesktopCountrySelect = (country: SimulatedCountry) => {
    onCountryChange(country);
    setIsLocationDropdownOpen(false);
  };

  // Close location dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };
    if (isLocationDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocationDropdownOpen]);

  const pillLinkBaseStyle = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out";
  const pillLinkInactiveStyle = "text-brand-text-primary hover:bg-gray-100";
  const pillLinkActiveStyle = "bg-brand-text-primary text-white shadow-md";
  const ctaLinkStyle = `${pillLinkBaseStyle} ${pillLinkActiveStyle} hover:bg-opacity-90`;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
              <Link to="/" className="flex items-center">
                {Icons.LogoFull}
              </Link>
            </div>
          </div>

          {/* Central Navigation Pill - Desktop */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="bg-white rounded-full p-1.5 shadow-lg flex items-center space-x-1.5">
              {NAV_LINKS.map((link) => {
                if (link.label === 'Contact') {
                  return (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className={ctaLinkStyle}
                    >
                      {link.label}
                    </NavLink>
                  );
                }
                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) =>
                      `${pillLinkBaseStyle} ${isActive ? pillLinkActiveStyle : pillLinkInactiveStyle}`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Right side items: Country Selector & Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* New Location Button Style - Desktop */}
            <div className="hidden md:block ml-4">
              <div className="relative" ref={locationDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className="bg-lime-400 text-black px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-sm font-medium shadow-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-75 transition-colors"
                  aria-haspopup="true"
                  aria-expanded={isLocationDropdownOpen}
                  aria-label={`Selected location: ${simulatedUserCountry.name}. Click to change location.`}
                >
                  {React.cloneElement(Icons.LocationPinIcon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-black' })}
                  <span>{simulatedUserCountry.name}</span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3 h-3 text-black transition-transform duration-200 ${isLocationDropdownOpen ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isLocationDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-md shadow-lg p-1.5 z-50 w-56 border border-brand-border/30 max-h-60 overflow-y-auto">
                    <p className="text-xs text-brand-text-secondary px-2.5 py-1.5 font-medium">Select a country:</p>
                    {availableCountries.map(country => (
                      <button
                        key={country.code}
                        onClick={() => handleDesktopCountrySelect(country)}
                        className={`block w-full text-left px-2.5 py-1.5 text-sm rounded hover:bg-brand-primary/10 hover:text-brand-primary transition-colors
                                    ${country.code === simulatedUserCountry.code ? 'bg-brand-primary/10 text-brand-primary font-semibold' : 'text-brand-text-primary'}`}
                      >
                        {country.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-brand-surface/80 backdrop-blur-sm p-2 rounded-full text-brand-text-secondary hover:text-brand-primary shadow-md hover:bg-brand-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? 
                  React.cloneElement(Icons.MenuIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' }) : 
                  React.cloneElement(Icons.CloseIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-surface border-t border-brand-border shadow-lg rounded-b-lg">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Contact') {
                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-2.5 mt-2 bg-brand-text-primary text-white rounded-md font-medium text-base hover:bg-opacity-90 transition-colors"
                  >
                    {link.label}
                  </NavLink>
                );
              }
              return (
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
              );
            })}
            {/* Country Selector - Mobile */}
            <div className="px-3 pt-4 pb-2">
              <label htmlFor="mobile-country-select" className="block text-xs font-medium text-brand-text-secondary mb-1">Simulate Country:</label>
              <select
                id="mobile-country-select"
                value={simulatedUserCountry.code}
                onChange={(e) => {
                  handleMobileCountryChange(e);
                  setIsOpen(false); 
                }}
                className="block w-full pl-3 pr-8 py-2 text-base border-brand-border bg-brand-bg text-brand-text-primary rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary appearance-none"
                aria-label="Simulate User Country (For Testing)"
              >
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
