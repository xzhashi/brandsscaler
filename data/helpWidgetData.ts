
import { HelpWidgetQuestion } from '../types';
import { Icons } from '../constants'; // If icons are needed for service suggestions
import { CORE_SERVICES_DATA } from './serviceData';

export const HELP_WIDGET_QUESTIONS: HelpWidgetQuestion[] = [
  {
    id: 'q1',
    questionText: "What's your primary goal today?",
    options: [
      { text: "Build or refresh my brand", mapsToServiceSlug: 'branding', isFinal: true },
      { text: "Increase online visibility & sales", mapsToServiceSlug: 'digital-marketing', isFinal: true },
      { text: "Leverage AI for smarter marketing", mapsToServiceSlug: 'ai-solutions', isFinal: true },
      { text: "I'm not sure yet", nextQuestionId: 'q2' },
    ],
  },
  {
    id: 'q2',
    questionText: "What's your biggest marketing challenge right now?",
    options: [
      { text: "My brand doesn't stand out", mapsToServiceSlug: 'branding', isFinal: true },
      { text: "Not enough website traffic or leads", mapsToServiceSlug: 'digital-marketing', isFinal: true },
      { text: "My marketing feels inefficient or impersonal", mapsToServiceSlug: 'ai-solutions', isFinal: true },
      { 
        text: "Something else / Just exploring", 
        isFinal: true, 
        customMessage: "No problem! Exploring is the first step. We recommend a general consultation to discuss your unique needs and how BrandsScaler can help you achieve your business objectives." 
      },
    ],
  },
];

// Helper to get service details by slug for display
export const getServiceInfoBySlug = (slug: string) => {
  const service = CORE_SERVICES_DATA.find(s => s.slug === slug);
  if (!service) return null;
  
  let icon = Icons.SparklesIcon; // Default icon
  if (slug === 'branding') icon = Icons.BrandStrategy;
  else if (slug === 'digital-marketing') icon = Icons.DigitalMarketing;
  else if (slug === 'ai-solutions') icon = Icons.FutureProofIcon; // Or a more specific AI icon

  return {
    slug: service.slug,
    title: service.title,
    description: service.mainDescription,
    icon: icon,
  };
};
