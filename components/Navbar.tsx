import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, Icons } from '../constants';
import { SimulatedCountry } from '../types';

interface NavbarProps {
  simulatedUserCountry: SimulatedCountry;
  onCountryChange: (country: SimulatedCountry) => void;
  availableCountries: SimulatedCountry[];
}

const Navbar: React.FC<NavbarProps> = ({ simulatedUserCountry, onCountryChange, availableCountries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuTimerRef = useRef<number | null>(null);

  // Close nav on route change
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      handleCloseMenu();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleToggleMenu = () => {
    if (isOpen) {
      handleCloseMenu();
    } else {
      setIsClosing(false);
      setIsOpen(true);
    }
  };
  
  const handleCloseMenu = () => {
    setIsClosing(true);
    if(mobileMenuTimerRef.current) clearTimeout(mobileMenuTimerRef.current);
    mobileMenuTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 400); // match animation duration
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      if(mobileMenuTimerRef.current) clearTimeout(mobileMenuTimerRef.current);
    };
  }, [isOpen]);


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

  const pillLinkBaseStyle = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out";
  const pillLinkInactiveStyle = "text-brand-text-primary hover:bg-gray-100";
  const pillLinkActiveStyle = "bg-gradient-primary text-white shadow-md hover:brightness-110";
  const ctaLinkStyle = `${pillLinkBaseStyle} ${pillLinkActiveStyle}`;

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
                  const isContact = link.label === 'Contact';
                  const finalCtaStyle = isContact ? ctaLinkStyle : '';

                  return (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className={({ isActive }) =>
                        `${pillLinkBaseStyle} ${finalCtaStyle} ${isActive && !isContact ? pillLinkActiveStyle : ''} ${!isActive && !isContact ? pillLinkInactiveStyle : ''}`
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
                  className="bg-gradient-secondary text-white px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-sm font-medium shadow-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-75 transition-all duration-300"
                  aria-haspopup="true"
                  aria-expanded={isLocationDropdownOpen}
                  aria-label={`Selected location: ${simulatedUserCountry.name}. Click to change location.`}
                >
                  {React.cloneElement(Icons.LocationPinIcon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-white' })}
                  <span>{simulatedUserCountry.name}</span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3 h-3 text-white transition-transform duration-200 ${isLocationDropdownOpen ? 'rotate-180' : ''}`}>
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

            {/* Mobile Menu Orb */}
            <div className="md:hidden ml-4">
              <button
                onClick={handleToggleMenu}
                type="button"
                className="w-14 h-14 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-lg transform active:scale-95 transition-transform duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                style={{ animation: !isOpen ? 'orb-pulse 2.5s infinite' : 'none' }}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen && !isClosing ? 'opacity-0 rotate-45 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                        {React.cloneElement(Icons.MenuIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                    </span>
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen && !isClosing ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}>
                        {React.cloneElement(Icons.CloseIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                    </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className={`md:hidden fixed inset-0 bg-brand-bg/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-8 origin-bottom-right ${isClosing ? 'animate-menu-overlay-out' : 'animate-menu-overlay-in'}`}
        >
          <div className="w-full max-w-xs mx-auto text-center">
            {/* Menu Items */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({isActive}) => `
                    opacity-0 animate-menu-item-in flex flex-col items-center justify-center space-y-2 group
                    ${isActive ? 'pointer-events-none' : ''}
                  `}
                  style={{ animationDelay: `${100 + index * 80}ms`}}
                  onClick={handleCloseMenu}
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-20 h-20 rounded-2xl bg-brand-surface border shadow-soft group-hover:bg-gradient-primary group-hover:shadow-glow-primary group-hover:border-transparent transition-all duration-300 ease-in-out flex items-center justify-center ${isActive ? 'border-brand-primary' : 'border-brand-border'}`}>
                        {link.icon && React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, {
                          className: `w-8 h-8 transition-colors duration-300 ${isActive ? 'text-brand-primary' : 'text-brand-primary group-hover:text-white'}`
                        })}
                      </div>
                      <span className={`font-medium text-sm transition-colors duration-300 ${isActive ? 'text-brand-primary' : 'text-brand-text-secondary group-hover:text-brand-primary'}`}>{link.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Country Selector - Mobile */}
            <div className="opacity-0 animate-menu-item-in" style={{ animationDelay: `${100 + NAV_LINKS.length * 80}ms`}}>
              <label htmlFor="mobile-country-select" className="block text-sm font-medium text-brand-text-secondary mb-2">Your Location</label>
              <div className="relative">
                <select
                  id="mobile-country-select"
                  value={simulatedUserCountry.code}
                  onChange={(e) => {
                    handleMobileCountryChange(e);
                  }}
                  className="block w-full pl-4 pr-10 py-3 text-base border-brand-border bg-brand-surface text-brand-text-primary rounded-lg shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary appearance-none"
                  aria-label="Simulate User Country"
                >
                  {availableCountries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;