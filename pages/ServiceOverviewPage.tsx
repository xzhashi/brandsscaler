import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import { CORE_SERVICES_DATA } from '../data/serviceData';
import { CITIES_DATA } from '../App'; 
import LottieAnimation from '../components/LottieAnimation';
import ErrorMessage from '../components/ErrorMessage';
import { Icons } from '../constants';
import { SimulatedCountry, CityData } from '../types'; 
import AnimatedDiv from '../src/components/common/AnimatedDiv';

interface ServiceOverviewPageParams extends Record<string, string | undefined> {
  serviceSlug: string;
}

interface ServiceOverviewPageProps {
  simulatedUserCountry: SimulatedCountry; 
}

const ServiceOverviewPage: React.FC<ServiceOverviewPageProps> = ({ simulatedUserCountry }) => {
  const { serviceSlug } = useParams<ServiceOverviewPageParams>();
  const service = CORE_SERVICES_DATA.find(s => s.slug === serviceSlug);

  useEffect(() => {
    if (service) {
      setMetaTags(
        `${service.title} Services | BrandsScaler`,
        service.metaDescription,
        service.keywords.join(', ')
      );
      setPageSpecificJsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.mainDescription,
        "provider": {
          "@type": "Organization",
          "name": "BrandsScaler"
        },
        "url": `https://brandsscaler.com/#/services/${service.slug}`,
      });
    } else {
      setMetaTags("Service Not Found", "The requested service could not be found.");
    }
  }, [service]);

  if (!service) {
    return (
      <AnimatedDiv animationType="fadeIn" className="text-center py-20">
        <ErrorMessage message={`Service "${serviceSlug}" not found.`} />
        <Button as={Link} to="/services" variant="primary" className="mt-8">
          Back to Services
        </Button>
      </AnimatedDiv>
    );
  }

  const citiesForSimulatedCountry = CITIES_DATA.filter(city => city.countryCode === simulatedUserCountry.code);
  
  let citiesToDisplay: CityData[] = citiesForSimulatedCountry;
  let cityListTitle = `${service.title} Solutions Tailored for ${simulatedUserCountry.name}`;
  let cityListSubtitle = `We offer specialized ${service.title.toLowerCase()} services in major urban centers within ${simulatedUserCountry.name}. Select your city to learn how we can help your local business thrive.`;

  if (citiesForSimulatedCountry.length === 0) {
    citiesToDisplay = CITIES_DATA.filter(city => city.countryCode === 'US');
    cityListTitle = `Explore Our ${service.title} Expertise in Major US Hubs`;
    cityListSubtitle = `While we're expanding globally, discover our specialized ${service.title.toLowerCase()} services available across key cities in the United States.`;
    if (citiesToDisplay.length === 0) {
        cityListSubtitle = "We are rapidly expanding our service areas. Please check back soon or contact us for more information."
    }
  }


  return (
    <div>
      <AnimatedDiv animationType="fadeIn" delay={100}>
        <SectionTitle 
          title={service.title}
          subtitle={service.mainDescription}
        />
      </AnimatedDiv>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
        <AnimatedDiv animationType="fadeInLeft" delay={200} className="order-2 md:order-1">
          <h2 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-6">
            Why {service.title} is Crucial for Your Brand
          </h2>
          {service.detailedOverview.map((paragraph, index) => (
            <p key={index} className="text-brand-text-secondary mb-4 leading-relaxed">{paragraph}</p>
          ))}
          <p className="text-brand-text-secondary font-semibold mt-6">
            Leveraging advanced techniques and powered by BlindTech.in, our {service.title} solutions are designed for maximum impact.
          </p>
        </AnimatedDiv>
        <AnimatedDiv animationType="fadeInRight" delay={200} className="order-1 md:order-2 flex justify-center items-center">
          {service.lottieUrl && <LottieAnimation src={service.lottieUrl} style={{ maxWidth: '450px', height: 'auto' }} />}
        </AnimatedDiv>
      </div>
      
      <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp" delay={100}>
        <AnimatedDiv animationType="slideInBottom" delay={100}>
          <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-4 text-center">
            Key Aspects of Our {service.title} Service
          </h3>
          <p className="text-brand-text-secondary text-center mb-10 max-w-2xl mx-auto">
            We focus on comprehensive strategies that cover all critical facets of {service.title.toLowerCase()} to ensure your brand's success.
          </p>
        </AnimatedDiv>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyAspects.map((aspect, index) => {
            const iconToDisplay = aspect.icon || (Icons.SparklesIcon as React.ReactElement); 
            return (
              <AnimatedDiv key={index} animationType="scaleIn" delay={index * 150}>
                <div className="bg-brand-surface p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300 border border-brand-border flex flex-col h-full">
                  <div className="mb-4">
                    {React.cloneElement(iconToDisplay as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-primary' })}
                  </div>
                  <h4 className="text-xl font-semibold font-heading text-brand-text-primary mb-2">{aspect.title}</h4>
                  <p className="text-brand-text-secondary text-sm flex-grow">{aspect.description}</p>
                </div>
              </AnimatedDiv>
            );
          })}
        </div>
      </AnimatedDiv>

      {citiesToDisplay.length > 0 && (
        <AnimatedDiv as="section" className="my-16 md:my-24 py-12 bg-brand-primary/5 rounded-xl border border-brand-border" animationType="fadeInUp" delay={100}>
          <AnimatedDiv animationType="slideInBottom" delay={100}>
            <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-4 text-center">
              {cityListTitle}
            </h3>
            <p className="text-brand-text-secondary text-center mb-10 max-w-3xl mx-auto">
              {cityListSubtitle}
            </p>
          </AnimatedDiv>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4">
            {citiesToDisplay.map((city, index) => (
              <AnimatedDiv key={city.path} animationType="fadeInUp" delay={index * 50}>
                <Button
                  as={Link}
                  to={`/services/${service.slug}/${city.path}`}
                  variant="subtle"
                  className="w-full text-center justify-center py-3 border border-brand-primary/20 hover:border-brand-primary"
                >
                  {city.name}
                </Button>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>
      )}

      <AnimatedDiv className="mt-16 md:mt-24 p-8 md:p-12 bg-brand-surface rounded-xl shadow-soft-lg text-center border border-brand-border" animationType="fadeInUp" delay={200}>
        <h3 className="text-2xl font-semibold font-heading text-brand-text-primary mb-4">Ready for Expert {service.title}?</h3>
        <p className="text-brand-text-secondary mb-6 max-w-xl mx-auto">
          Let BrandsScaler elevate your {service.title.toLowerCase()} efforts. Our team, in collaboration with BlindTech.in, is ready to build a winning strategy for you.
        </p>
        <Button as={Link} to="/contact" variant="primary" size="lg">
          Discuss Your {service.title} Needs
        </Button>
      </AnimatedDiv>

    </div>
  );
};

export default ServiceOverviewPage;