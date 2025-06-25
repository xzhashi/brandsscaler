
import React from 'react'; // Ensure React is imported if ReactNode is used

export interface Service { // This might be more aligned with CORE_SERVICES_DATA structure now
  id: string; // Could be slug
  icon?: React.ReactNode; // Keep for general display if needed
  title: string;
  description: string; // mainDescription or a short overview
  details?: string[]; // Could map to keyAspects or similar
  // Potentially add more fields from ServiceData if used directly in components like ServiceCard
  slug?: string; 
  mainDescription?: string;
  lottieUrl?: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  imageUrl?: string; // Added for new testimonial design
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}
export interface GroundingChunk {
  web?: GroundingChunkWeb;
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}

export interface GeminiCandidate {
  groundingMetadata?: GroundingMetadata;
}

export interface GeminiContentResponse {
  text: string;
  candidates?: GeminiCandidate[];
}

// Data structures from serviceData.ts
export interface KeyAspectData {
  icon?: React.ReactElement; // Changed from React.ReactNode
  title: string;
  description: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface CitySpecificCopyData {
  intro?: string;
  benefit?: string;
  faqs?: FAQItemData[];
}

export interface CoreServiceDataStructure {
  slug: string;
  title: string;
  mainDescription: string;
  metaDescription: string;
  keywords: string[];
  lottieUrl?: string;
  detailedOverview: string[];
  keyAspects: KeyAspectData[];
  genericFaqs?: FAQItemData[];
  citySpecificCopy?: {
    [cityPath: string]: CitySpecificCopyData;
  };
  citySpecificAspects?: {
    [cityPath: string]: {
        [aspectTitle: string]: string;
    };
  };
}

// City data structure used in App.tsx
export interface CityData {
    name: string;
    path: string;
    countryCode: string; // Added for geo-targeting
    countryName: string; // Added for geo-targeting
    keyIndustries: string; // Or string[]
    marketNuance: string;
}

// For simulated country state and dropdown options
export interface SimulatedCountry {
  code: string;
  name: string;
}

// Types for HelpWidget
export interface HelpWidgetQuestionOption {
  text: string;
  nextQuestionId?: string | null; // ID of the next question or null if end of path for this option
  mapsToServiceSlug?: string | null; // Slug of the service this option maps to (e.g., "branding")
  isFinal?: boolean; // Indicates this option leads to a final suggestion/message
  customMessage?: string; // Custom message if it doesn't map to a service
}

export interface HelpWidgetQuestion {
  id: string;
  questionText: string;
  options: HelpWidgetQuestionOption[];
}

export interface SuggestedServiceInfo {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}