
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import { CORE_SERVICES_DATA } from '../data/serviceData'; // Import core services
import LottieAnimation from '../components/LottieAnimation';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'Our Core Marketing & Branding Services | BrandsScaler',
      'Discover BrandsScaler\'s specialized marketing and branding services including Brand Strategy, Digital Marketing, and AI-Powered Solutions. We help your business grow.',
      'core marketing services, branding services, digital marketing services, AI marketing solutions, BrandsScaler services'
    );
    const servicesSchema = CORE_SERVICES_DATA.map(service => ({
      "@type": "Service",
      "serviceType": service.title,
      "description": service.mainDescription,
      "provider": {
        "@type": "Organization",
        "name": "BrandsScaler"
      },
      "url": `https://brandsscaler.com/#/services/${service.slug}` // Link to service overview
    }));
    setPageSpecificJsonLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "BrandsScaler Core Services",
      "description": "Overview of core marketing and branding services offered by BrandsScaler.",
      "url": "https://brandsscaler.com/#/services",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": servicesSchema.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": service
        }))
      }
    });
  }, []);

  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Our Core Service Pillars" 
        subtitle="BrandsScaler offers specialized expertise across key areas of modern marketing and branding to deliver transformative results for your business. Explore our focus areas:" 
      />
      
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10">
        {CORE_SERVICES_DATA.map((service, index) => (
          <div 
            key={service.slug} 
            className={`bg-brand-surface p-6 md:p-8 rounded-xl shadow-soft-lg hover:shadow-xl transition-shadow duration-300 border border-brand-border flex flex-col md:flex-row items-center gap-6 md:gap-8 animate-fade-in-up`}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-brand-primary/5 rounded-lg overflow-hidden">
              {service.lottieUrl && <LottieAnimation src={service.lottieUrl} style={{ width: '100%', height: '100%' }} />}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary mb-3">{service.title}</h3>
              <p className="text-brand-text-secondary mb-4 leading-relaxed">{service.mainDescription}</p>
              <Button 
                as={Link} 
                to={`/services/${service.slug}`} 
                variant="secondary" 
                size="md"
              >
                Learn more about {service.title}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 p-8 md:p-12 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-xl shadow-soft-lg text-center animate-fade-in-up">
        <h3 className="text-3xl font-extrabold font-heading text-white sm:text-4xl mb-4">
          Ready to Craft Your Success Story?
        </h3>
        <p className="text-lg leading-6 text-indigo-100 mb-8 max-w-2xl mx-auto">
          Each of our service pillars is designed to integrate seamlessly, creating a holistic strategy that drives growth. Let's discuss how BrandsScaler, with technology from BlindTech.in, can tailor a solution specifically for your needs.
        </p>
        <Button 
            as={Link} 
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary focus:ring-white"
        >
            Schedule Your Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default ServicesPage;
