
import React from 'react';
import { NavLinkItem } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  // { label: 'AI Insights', path: '/insights' }, // Removed
  { label: 'Contact', path: '/contact' },
];

// Icons are now designed to inherit color via `currentColor` or have a neutral default.
// Specific colors (like brand-primary or brand-accent) should be applied via className prop when used.

export const Icons = {
  LocationPinIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  BrandStrategy: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  ),
  DigitalMarketing: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  GrowthHacking: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  ContentCreation: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  ),
  LogoFull: (
    <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <span className="font-heading font-bold text-2xl text-brand-text-primary">Brands<span className="text-brand-primary">Scaler</span></span>
    </div>
  ),
  MenuIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  CloseIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  SendIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
   SparklesIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75M18.25 12L17 10.25M18.25 12L19.5 13.75M18.25 12L19.5 10.25M12.75 5.25L11 7M12.75 5.25L11 3.5M12.75 5.25L14.5 7M12.75 5.25L14.5 3.5M5.25 12.75L7 11M5.25 12.75L3.5 11M5.25 12.75L7 14.5M5.25 12.75L3.5 14.5" />
    </svg>
  ),
  LightBulbIcon: ( 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18m0 0A12.06 12.06 0 0018 15.75m-6 0v-1.5m0 0A6.006 6.006 0 0013.5 12c0-1.657-.672-3.157-1.756-4.244A6.006 6.006 0 0012 6c-1.657 0-3.157.672-4.244 1.756A6.006 6.006 0 006 12c0 .351.06.69.176 1.006M18 15.75c.03.05.056.1.082.15L18 15.75z" />
    </svg>
  ),
  WisdomIcon: ( // Alias for LightBulbIcon for semantic clarity
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18m0 0A12.06 12.06 0 0018 15.75m-6 0v-1.5m0 0A6.006 6.006 0 0013.5 12c0-1.657-.672-3.157-1.756-4.244A6.006 6.006 0 0012 6c-1.657 0-3.157.672-4.244 1.756A6.006 6.006 0 006 12c0 .351.06.69.176 1.006M18 15.75c.03.05.056.1.082.15L18 15.75z" />
    </svg>
  ),
  DataCreativeIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6A2.25 2.25 0 0112.75 3.75h.5A2.25 2.25 0 0115.5 6v.5A2.25 2.25 0 0113.25 8.75v.5A2.25 2.25 0 0111 11.5h-.5A2.25 2.25 0 018.25 9.25v-.5A2.25 2.25 0 0110.5 6zM6 18.75a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75V11.25a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v7.5zM6 18.75V11.25m12 .75a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v7.5a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75V12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75H14.25M9.75 15.75H14.25" />
    </svg>
  ),
  FutureProofIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M12 18.75l-2.625-6.375L3 9.75l6.375-2.625L12 3l2.625 4.125L21 9.75l-6.375 2.625L12 18.75zM12 18.75v2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21h15" />
    </svg>
  ),
  PartnershipIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-4.682 2.72a.75.75 0 01-.063-.767c.22-.472.483-.92.784-1.336A4.5 4.5 0 0112 12.75v-2.505V9.083A2.25 2.25 0 009.75 6.833H7.525A2.25 2.25 0 005.275 9.083V12.75a4.5 4.5 0 012.096 3.905c.301.416.564.864.784 1.336a.75.75 0 01-.063.767m-4.682-2.72H3.275a3 3 0 01-3-3V9.083a3 3 0 013-3h4.25a3 3 0 013 3v3.667c0 .631-.131 1.234-.373 1.789M12 12.75h6.75m-6.75 0H9.75m2.25 0v2.833M12 12.75v-2.505M12 9.083V6.833m0 0H9.75M12 6.833H14.25m-2.25 0a2.25 2.25 0 012.25-2.25h.5a2.25 2.25 0 012.25 2.25v.583c0 .631.131 1.234.373 1.789m-4.049 2.417A2.25 2.25 0 0112 15.25v2.505m0 0h2.25m-2.25 0H9.75" />
    </svg>
  ),
  ImpactIcon: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3H20.25M3.75 3H6A2.25 2.25 0 018.25 5.25v11.25c0 .621.504 1.125 1.125 1.125h5.25c.621 0 1.125-.504 1.125-1.125V5.25A2.25 2.25 0 0118 3h2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5M6.75 10.5h10.5M6.75 13.5h10.5" />
    </svg>
  ),
  DiscoverIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
    </svg>
  ),
  CreateIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 17.5H7.5v-3.082l9.362-9.363zM16.862 4.487L19.5 7.125" />
    </svg>
  ),
  LaunchIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  OptimizeIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
  ),
  QuoteIconLeft: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-brand-secondary opacity-50"> // Keep specific color here
      <path d="M10.125 8.25V4.875c0-.621.504-1.125 1.125-1.125H13.5c1.241 0 2.25.756 2.25 2.001v1.874c0 .38-.15.719-.441.971l-3.328 2.773A1.875 1.875 0 0110.125 12V8.25zM4.875 8.25V4.875c0-.621.504-1.125 1.125-1.125H8.25c1.241 0 2.25.756 2.25 2.001v1.874c0 .38-.15.719-.441.971L6.734 11.47a1.875 1.875 0 01-1.359.53V8.25zM15.375 15.75v3.375c0 .621-.504 1.125-1.125 1.125H12c-1.241 0-2.25-.756-2.25-2.001v-1.874c0-.38.15-.719.441-.971l3.328-2.773a1.875 1.875 0 011.359-.53V15.75zm-5.25 0v3.375c0 .621-.504 1.125-1.125 1.125H6.75c-1.241 0-2.25-.756-2.25-2.001v-1.874c0-.38.15-.719.441.971l3.328-2.773a1.875 1.875 0 011.359-.53V15.75z"/>
    </svg>
  ),
};

// Ensure all icon components in Icons are React.ReactElement
Object.keys(Icons).forEach(key => {
    const IconComponent = (Icons as any)[key];
    if (typeof IconComponent === 'function' || (typeof IconComponent === 'object' && IconComponent !== null && 'type' in IconComponent)) {
      // It's a React component or element
    } else {
      console.warn(`Icon ${key} is not a valid React element or component.`);
    }
  });
