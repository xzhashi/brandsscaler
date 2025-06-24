
import React from 'react';
import { NavLinkItem } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'AI Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const Icons = {
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
  DataCreativeIcon: ( // Replaced with Heroicons VariableIcon
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.746 5.006a.75.75 0 01.24-.235l7.5-4.5a.75.75 0 01.764 0l7.5 4.5a.75.75 0 01.24.897l-2.25 6.75a.75.75 0 01-.703.53H5.459a.75.75 0 01-.703-.53l-2.25-6.75a.75.75 0 01.24-.897zM2.25 9.309l1.724 5.171a.75.75 0 00.703.53h14.646a.75.75 0 00.703-.53l1.724-5.171M12 12.75v6.75m0 0l-3-3m3 3l3-3M5.25 12.75h13.5" />
    </svg>
  ),
  FutureProofIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 0A11.953 11.953 0 0112 2.25c1.549 0 3.024.198 4.402.564l-2.098 2.098m-3.286 3.286A11.953 11.953 0 0112 8.25c-1.549 0-3.024-.198-4.402-.564l2.098-2.098" />
    </svg>
  ),
  PartnershipIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-4.682 2.72a.75.75 0 01-.063-.767c.22-.472.483-.92.784-1.336A4.5 4.5 0 0112 12.75v-2.505V9.083A2.25 2.25 0 009.75 6.833H7.525A2.25 2.25 0 005.275 9.083V12.75a4.5 4.5 0 012.096 3.905c.301.416.564.864.784 1.336a.75.75 0 01-.063.767m-4.682-2.72H3.275a3 3 0 01-3-3V9.083a3 3 0 013-3h4.25a3 3 0 013 3v3.667c0 .631-.131 1.234-.373 1.789M12 12.75h6.75m-6.75 0H9.75m2.25 0v2.833M12 12.75v-2.505M12 9.083V6.833m0 0H9.75M12 6.833H14.25m-2.25 0a2.25 2.25 0 012.25-2.25h.5a2.25 2.25 0 012.25 2.25v.583c0 .631.131 1.234.373 1.789m-4.049 2.417A2.25 2.25 0 0112 15.25v2.505m0 0h2.25m-2.25 0H9.75" />
    </svg>
  ),
  ImpactIcon: ( 
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 16.5L7.5 12l3.75 3.75L15.75 9l3.75 3.75" />
    </svg>
  ),
  DiscoverIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  CreateIcon: ( // Replaced with Heroicons LightBulbIcon
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18m0 0A12.06 12.06 0 0018 15.75m-6 0v-1.5m0 0A6.006 6.006 0 0013.5 12c0-1.657-.672-3.157-1.756-4.244A6.006 6.006 0 0012 6c-1.657 0-3.157.672-4.244 1.756A6.006 6.006 0 006 12c0 .351.06.69.176 1.006M18 15.75c.03.05.056.1.082.15L18 15.75z" />
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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M3.375 21V6.375c0-.621.504-1.125 1.125-1.125h15c.621 0 1.125.504 1.125 1.125v14.625c0 .621-.504 1.125-1.125 1.125H4.5A1.125 1.125 0 013.375 21z" />
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
