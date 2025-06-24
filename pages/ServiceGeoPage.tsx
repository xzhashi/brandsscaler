
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import { CORE_SERVICES_DATA, ServiceData } from '../data/serviceData'; // KeyAspect is implicitly part of ServiceData structure
import { CITIES_DATA } from '../App';
import { CityData, KeyAspectData } from '../types'; // Correct import for CityData, KeyAspectData for clarity
import LottieAnimation from '../components/LottieAnimation';
import ErrorMessage from '../components/ErrorMessage';
import { Icons } from '../constants'; // For fallback icons or specific service icons

interface ServiceGeoPageParams extends Record<string, string | undefined> {
  serviceSlug: string;
  cityPath: string;
}

// Use KeyAspectData from types.ts for consistency
interface KeyAspectForPage extends KeyAspectData {}


// Note: The component is already designed to use useParams, so no props interface needed here for serviceSlug/cityPath.
const ServiceGeoPage: React.FC = () => {
  const { serviceSlug, cityPath } = useParams<ServiceGeoPageParams>();

  const service = CORE_SERVICES_DATA.find(s => s.slug === serviceSlug);
  const city = CITIES_DATA.find(c => c.path === cityPath);

  useEffect(() => {
    if (service && city) {
      const title = `${service.title} Services in ${city.name} | BrandsScaler`;
      const description = `Expert ${service.title.toLowerCase()} solutions for ${city.name} businesses. BrandsScaler helps your ${city.name} brand thrive with targeted strategies for ${service.keywords[0] || 'growth'}.`;
      const keywords = [
        ...service.keywords.map(k => `${k} ${city.name}`),
        `marketing agency ${city.name}`,
        `${service.slug} ${city.name}`
      ];
      setMetaTags(title, description, keywords.join(', '));
      setPageSpecificJsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.title} in ${city.name}`,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "BrandsScaler"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        },
        "serviceType": service.title,
        // Could add "offers" if there are specific packages for this service in this city
        "url": `https://brandsscaler.com/#/services/${service.slug}/${city.path}`,
      });
    } else {
      setMetaTags("Service/City Not Found", "The requested service or city could not be found.");
    }
  }, [service, city]);

  if (!service || !city) {
    return (
      <div className="text-center py-20">
        <ErrorMessage message={`Details for "${serviceSlug}" in "${cityPath}" not found.`} />
        <Button as={Link} to="/services" variant="primary" className="mt-8">
          Back to Services
        </Button>
      </div>
    );
  }

  // Function to get city-specific aspect description if available
  const getCitySpecificAspectDescription = (aspect: KeyAspectForPage, serviceData: ServiceData, cityData: CityData): string => {
    if (serviceData.citySpecificAspects && serviceData.citySpecificAspects[cityData.path] && serviceData.citySpecificAspects[cityData.path][aspect.title]) {
      return serviceData.citySpecificAspects[cityData.path][aspect.title];
    }
    return aspect.description;
  };
  
  const citySpecificIntro = service.citySpecificCopy?.[city.path]?.intro || `Learn how our expert ${service.title.toLowerCase()} strategies can elevate your business in the competitive ${city.marketNuance}.`;
  const citySpecificBenefit = service.citySpecificCopy?.[city.path]?.benefit || `We tailor our ${service.title.toLowerCase()} approach to leverage ${city.name}'s unique opportunities, ensuring your brand connects powerfully with the local audience and achieves remarkable growth.`;


  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title={`${service.title} in ${city.name}`}
        subtitle={`Targeted ${service.title.toLowerCase()} strategies to help your ${city.name} business dominate the local market. ${citySpecificIntro}`}
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24 animate-fade-in-up">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-6">
            Why {city.name} Businesses Need Specialized {service.title}
          </h2>
          <p className="text-brand-text-secondary mb-4 leading-relaxed">
            In {city.name}, a city known for {city.marketNuance}, a generic approach to {service.title.toLowerCase()} simply won't cut it. BrandsScaler understands the local landscape, from consumer behavior to competitive dynamics.
          </p>
          <p className="text-brand-text-secondary mb-4 leading-relaxed">
           {citySpecificBenefit}
          </p>
          <p className="text-brand-text-secondary font-semibold mt-6">
            Our {service.title.toLowerCase()} services for {city.name} are powered by BlindTech.in's technology, ensuring innovative and effective solutions.
          </p>
           <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-8">
            Get a Quote for {city.name}
          </Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          {service.lottieUrl && <LottieAnimation src={service.lottieUrl} style={{ maxWidth: '400px', height: 'auto' }} />}
        </div>
      </div>
      
      <div className="my-16 md:my-24 animate-fade-in-up">
        <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-4 text-center">
          Our {service.title} Focus for {city.name}
        </h3>
        <p className="text-brand-text-secondary text-center mb-10 max-w-2xl mx-auto">
          We deliver comprehensive {service.title.toLowerCase()} solutions, specifically adapted for the {city.name} market, focusing on:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyAspects.map((aspect, index) => {
            const iconToDisplay = aspect.icon || (Icons.SparklesIcon as React.ReactElement); 
            
            return (
              <div key={index} className="bg-brand-surface p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300 border border-brand-border flex flex-col">
                <div className="mb-4">
                  {React.cloneElement(iconToDisplay as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-primary' })}
                </div>
                <h4 className="text-xl font-semibold font-heading text-brand-text-primary mb-2">{aspect.title} for {city.name}</h4>
                <p className="text-brand-text-secondary text-sm flex-grow">
                  {getCitySpecificAspectDescription(aspect, service, city)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {(service.citySpecificCopy?.[city.path]?.faqs || service.genericFaqs) && (
        <div className="my-16 md:my-24 py-12 bg-brand-primary/5 rounded-xl animate-fade-in-up border border-brand-border">
          <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-10 text-center">
            {service.title} FAQs for {city.name} Businesses
          </h3>
          <div className="max-w-3xl mx-auto space-y-6 px-4">
            {(service.citySpecificCopy?.[city.path]?.faqs || service.genericFaqs)?.map((faq, index) => (
              <details key={index} className="p-4 bg-brand-surface rounded-lg shadow-soft border border-brand-border group">
                <summary className="font-semibold font-heading text-brand-text-primary cursor-pointer flex justify-between items-center group-open:text-brand-primary">
                  {faq.question.replace("[CityName]", city.name)}
                  <span className="text-brand-primary group-open:rotate-180 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </summary>
                <p className="text-brand-text-secondary mt-2 pt-2 border-t border-brand-border/50 text-sm leading-relaxed">
                  {faq.answer.replace("[CityName]", city.name).replace("[ServiceLow]", service.title.toLowerCase())}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 md:mt-24 p-8 md:p-12 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-xl shadow-soft-lg text-center animate-fade-in-up">
        <h3 className="text-3xl font-extrabold font-heading text-white sm:text-4xl mb-4">
          Ready to Grow Your {city.name} Business?
        </h3>
        <p className="text-lg leading-6 text-indigo-100 mb-8 max-w-2xl mx-auto">
          Let BrandsScaler be your trusted partner for {service.title.toLowerCase()} in {city.name}. We combine local expertise with world-class strategies to deliver results.
        </p>
        <Button 
            as={Link} 
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary focus:ring-white"
        >
            Start Your {city.name} Project Today
        </Button>
      </div>
    </div>
  );
};

export default ServiceGeoPage;