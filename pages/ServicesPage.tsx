import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import { CORE_SERVICES_DATA } from '../data/serviceData'; 
import LottieAnimation from '../components/LottieAnimation';
import AnimatedDiv from '../src/components/common/AnimatedDiv';
import { Icons } from '../constants'; // Import Icons

const ServicesPage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'Our Service Ecosystem | BrandsScaler',
      'Explore BrandsScaler\'s integrated marketing and branding services. Discover how our Brand Strategy, Digital Marketing, and AI Solutions elevate your business.',
      'integrated marketing services, branding services, digital marketing, AI solutions, BrandsScaler services ecosystem'
    );
    const servicesSchema = CORE_SERVICES_DATA.map(service => ({
      "@type": "Service",
      "serviceType": service.title,
      "description": service.mainDescription,
      "provider": {
        "@type": "Organization",
        "name": "BrandsScaler"
      },
      "url": `https://brandsscaler.com/#/services/${service.slug}`
    }));
    setPageSpecificJsonLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "BrandsScaler Service Ecosystem",
      "description": "Overview of integrated marketing and branding services offered by BrandsScaler.",
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

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'branding':
        return Icons.BrandStrategy;
      case 'digital-marketing':
        return Icons.DigitalMarketing;
      case 'ai-solutions':
        return Icons.SparklesIcon; // Or Icons.FutureProofIcon
      default:
        return Icons.SparklesIcon; // A generic fallback
    }
  };

  return (
    <div>
      <AnimatedDiv animationType="fadeIn" delay={100}>
        <SectionTitle 
          title="Explore Our Service Ecosystem" 
          subtitle="Integrated solutions designed to elevate your brand and accelerate growth. Discover how each pillar contributes to your comprehensive success story." 
        />
      </AnimatedDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {CORE_SERVICES_DATA.map((service, index) => (
          <AnimatedDiv 
            key={service.slug} 
            animationType="fadeInUp"
            delay={index * 150}
            className="h-full" // Ensure AnimatedDiv takes full height for consistent card sizing
          >
            <div className="bg-brand-surface/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-brand-border/20 flex flex-col items-start space-y-4 h-full transform hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              
              <div className="flex items-center space-x-3 w-full">
                <div className="p-2 bg-brand-primary/10 rounded-lg flex-shrink-0">
                  {React.cloneElement(getServiceIcon(service.slug) as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-brand-primary' })}
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-text-primary truncate" title={service.title}>{service.title}</h3>
              </div>

              <p className="text-brand-text-secondary text-sm leading-relaxed flex-grow">
                {service.mainDescription}
              </p>

              {service.lottieUrl && (
                <div className="w-full aspect-[16/10] bg-brand-bg/40 rounded-lg flex items-center justify-center my-2 overflow-hidden border border-brand-border/10 shadow-inner">
                  <LottieAnimation src={service.lottieUrl} style={{ width: '85%', height: '85%' }} />
                </div>
              )}
              
              <Button 
                as={Link} 
                to={`/services/${service.slug}`} 
                variant="secondary" 
                size="md"
                className="mt-auto w-full sm:w-auto" // Full width on small, auto on larger if preferred
              >
                Discover {service.title.split(' ')[0]}
              </Button>
            </div>
          </AnimatedDiv>
        ))}
      </div>

      <AnimatedDiv animationType="fadeInUp" delay={Math.min(CORE_SERVICES_DATA.length * 150, 600)} className="mt-16 md:mt-24 p-8 md:p-12 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-xl shadow-soft-lg text-center">
        <h3 className="text-3xl font-extrabold font-heading text-white sm:text-4xl mb-4">
          Ready to Forge Your Success Story?
        </h3>
        <p className="text-lg leading-6 text-indigo-100 mb-8 max-w-2xl mx-auto">
          Each of our services is designed for seamless integration, creating a holistic strategy that drives unparalleled growth. Let's discuss how BrandsScaler, with technology from BlindTech.in, can tailor a potent solution specifically for your business aspirations.
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
      </AnimatedDiv>
    </div>
  );
};

export default ServicesPage;