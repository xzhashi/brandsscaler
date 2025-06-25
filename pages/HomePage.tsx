import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import PageContainer from '../components/PageContainer';
import Button from '../components/common/Button';
import { Service, Testimonial } from '../types';
import { Icons } from '../constants';
import SectionTitle from '../components/common/SectionTitle';
import ValuePropositionItem from '../components/ValuePropositionItem';
import USPItem from '../components/USPItem';
import ProcessTimelineItem from '../components/ProcessTimelineItem'; // Changed from ProcessStepCard
import LottieAnimation from '../components/LottieAnimation'; 
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import useIntersectionObserver from '../src/hooks/useIntersectionObserver';
import AnimatedDiv from '../src/components/common/AnimatedDiv';

const featuredServices: Service[] = [
  {
    id: '1',
    icon: Icons.BrandStrategy,
    title: 'Revolutionary Brand Strategy',
    description: 'We craft unique brand identities that resonate deeply and position you for market leadership in [Your Target Market].',
  },
  {
    id: '2',
    icon: Icons.GrowthHacking,
    title: 'Explosive Growth Hacking',
    description: 'Innovative, data-driven tactics to rapidly expand your reach and customer base, achieving scalable growth.',
  },
  {
    id: '3',
    icon: Icons.DigitalMarketing,
    title: 'Next-Gen Digital Marketing',
    description: 'Cutting-edge digital campaigns across all channels including SEO, PPC, and Social Media, optimized for maximum ROI.',
  },
];

const valuePropositions = [
  {
    icon: Icons.SparklesIcon, 
    title: 'Ignite Your Potential',
    description: 'Unlock groundbreaking strategies that propel your brand into the future of your industry.'
  },
  {
    icon: Icons.GrowthHacking, 
    title: 'Dominate Your Market',
    description: 'We build category-defining brands that captivate audiences and drive measurable business results.'
  },
  {
    icon: Icons.FutureProofIcon, 
    title: 'Innovate Fearlessly',
    description: 'Leverage AI and human ingenuity to create revolutionary marketing solutions that set you apart.'
  }
];

// Wrapper component for animated ValuePropositionItem (Kept as is due to its specific transition classes)
const AnimatedValuePropositionItem: React.FC<{ vp: typeof valuePropositions[0], index: number }> = ({ vp, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { 
    threshold: 0.2,
    freezeOnceVisible: true
  });

  return (
    <div
      ref={itemRef}
      className={`transform transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <ValuePropositionItem icon={vp.icon} title={vp.title} description={vp.description} />
    </div>
  );
};


const uspItems = [
  {
    icon: React.cloneElement(Icons.DataCreativeIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-accent'}), 
    title: 'Data-Driven Creativity',
    description: 'We fuse AI-powered insights with human ingenuity to craft strategies that are both brilliant and measurably effective for brand growth.'
  },
  {
    icon: React.cloneElement(Icons.FutureProofIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-accent'}),
    title: 'Future-Proof Strategies',
    description: "We don't just follow trends; we set them. Our forward-thinking approach ensures your brand is ready for tomorrow's market challenges and opportunities."
  },
  {
    icon: React.cloneElement(Icons.PartnershipIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-accent'}),
    title: 'Your Dedicated Growth Partner',
    description: "Consider us an extension of your team, passionately committed to your brand's success story and transparent every step of the way."
  },
  {
    icon: React.cloneElement(Icons.ImpactIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-accent'}),
    title: 'Measurable Impact & ROI',
    description: 'Transparency is key. We focus on delivering quantifiable results and clear ROI, turning marketing spend into profitable, sustainable growth.'
  }
];

const processSteps = [
  {
    stepNumber: '01',
    icon: Icons.DiscoverIcon,
    title: 'Discover & Strategize',
    description: 'We immerse ourselves in your brand, audience, and market to unearth core insights and define a winning marketing roadmap.'
  },
  {
    stepNumber: '02',
    icon: Icons.CreateIcon,
    title: 'Create & Innovate',
    description: 'Our team crafts bespoke branding and marketing solutions, from compelling narratives to disruptive campaigns, designed for maximum impact.'
  },
  {
    stepNumber: '03',
    icon: Icons.LaunchIcon,
    title: 'Launch & Amplify',
    description: 'We execute strategies with precision, leveraging the right channels to connect with your target audience and build market momentum.'
  },
  {
    stepNumber: '04',
    icon: Icons.OptimizeIcon,
    title: 'Analyze & Optimize',
    description: 'Continuous monitoring, data analysis, and iterative refinement ensure your marketing strategies evolve and deliver sustained growth.'
  }
];

const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: "BrandsScaler transformed our online presence. Their brand strategies are truly next level and delivered real results!",
      name: "Alex Chen",
      company: "CEO, Innovatech Solutions",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: '2',
      quote: "The growth we've seen since partnering with BrandsScaler is phenomenal. Their digital marketing expertise is unmatched. Highly recommended!",
      name: "Sarah Miller",
      company: "Founder, Bloom & Grow Co.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: '3',
      quote: "Their AI insights tool gave us marketing ideas we'd never have thought of. It's a game changer for our content strategy!",
      name: "David Kim",
      company: "Marketing Director, QuantumLeap Inc.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: '4',
      quote: "Working with BrandsScaler was a seamless experience. Their team is professional, creative, and truly dedicated to client success.",
      name: "Jessica Lee",
      company: "CMO, Future Gadgets Ltd.",
      imageUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

const HomePage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'Revolutionary Marketing & Branding Agency',
      'BrandsScaler offers cutting-edge marketing, branding, and growth strategies to elevate your business. Discover AI-powered insights and expert execution.',
      'marketing agency, branding, growth hacking, digital marketing, AI marketing, content creation, SEO services'
    );
    setPageSpecificJsonLd(null); 
  }, []);

  const [currentActiveTestimonialIndex, setCurrentActiveTestimonialIndex] = useState(
    testimonials.length > 1 ? 1 : 0
  );

  const handleThumbnailClick = (index: number) => {
    setCurrentActiveTestimonialIndex(index);
  };

  const getCardTransform = (index: number, activeIndex: number) => {
    const diff = index - activeIndex;
    if (diff === 0) { // Active card
      return 'transform scale-100 opacity-100 z-20 shadow-xl';
    } else if (diff === -1) { // Card to the left
      return 'transform scale-90 opacity-70 -translate-x-16 md:-translate-x-24 -rotate-3 hover:opacity-90 hover:scale-95 z-10 shadow-lg';
    } else if (diff === 1) { // Card to the right
      return 'transform scale-90 opacity-70 translate-x-16 md:translate-x-24 rotate-3 hover:opacity-90 hover:scale-95 z-10 shadow-lg';
    }
    // Cards further away are effectively hidden or could be styled to be very distant
    return `transform scale-75 opacity-0 z-0 ${diff < 0 ? '-translate-x-32 md:-translate-x-48' : 'translate-x-32 md:translate-x-48'} pointer-events-none`;
  };


  return (
    <>
      <AnimatedDiv animationType="fadeIn" delay={100}>
        <HeroSection />
      </AnimatedDiv>

      <AnimatedDiv as="section" className="py-16 bg-brand-bg overflow-hidden" animationType="fadeInUp" delay={200}>
        <PageContainer className="!py-0">
           <AnimatedDiv animationType="slideInBottom" delay={100}>
            <SectionTitle 
              align="center" 
              title="Unlock Your Brand's Full Potential"
              subtitle="We combine innovation with strategy to deliver transformative results." 
            />
           </AnimatedDiv>
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((vp, index) => (
              <AnimatedValuePropositionItem key={index} vp={vp} index={index} />
            ))}
          </div>
        </PageContainer>
      </AnimatedDiv>

      <PageContainer>
        <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp">
          <AnimatedDiv animationType="slideInBottom" delay={100}>
            <SectionTitle title="Our Core Strengths" subtitle="We empower brands with marketing strategies that not only adapt to the future but define it. Achieve your business goals with BrandsScaler." />
          </AnimatedDiv>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedDiv key={service.id} animationType="fadeInUp" delay={index * 150}>
                <ServiceCard service={service} />
              </AnimatedDiv>
            ))}
          </div>
           <AnimatedDiv animationType="fadeInUp" delay={200} className="text-center mt-12">
            <Button as={Link} to="/services" variant="secondary" size="lg">
              Explore All Our Services
            </Button>
          </AnimatedDiv>
        </AnimatedDiv>

        <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp">
          <AnimatedDiv animationType="slideInBottom" delay={100}>
           <SectionTitle title="Why Choose BrandsScaler?" subtitle="We're not just another agency. We're your catalyst for revolutionary growth and lasting brand impact. Powered by BlindTech.in technology." />
          </AnimatedDiv>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-center mt-12 md:mt-16">
            {/* Left Column: Lottie Animation */}
            <AnimatedDiv animationType="fadeInLeft" delay={200} className="flex justify-center items-center md:order-1">
                 <LottieAnimation src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json" style={{ maxWidth: '400px', height: 'auto', maxHeight: '400px' }} />
            </AnimatedDiv>

            {/* Right Column: USP Items */}
            <div className="space-y-6 md:space-y-8 md:order-2">
              {uspItems.map((usp, index) => (
                <AnimatedDiv key={index} animationType="fadeInRight" delay={300 + index * 150}>
                  <USPItem icon={usp.icon} title={usp.title} description={usp.description} />
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp">
          <AnimatedDiv animationType="slideInBottom" delay={100}>
            <SectionTitle title="Our Proven Process for Success" subtitle="A clear, strategic path to transforming your brand and achieving remarkable, measurable results." />
          </AnimatedDiv>
          <div className="relative mt-16 md:py-8"> {/* Added py-8 for breathing room for top/bottom items from timeline */}
            {/* Central Vertical Line */}
            <div 
              className="absolute left-0 right-0 md:left-1/2 top-0 bottom-0 w-full md:w-1.5 h-full md:transform md:-translate-x-1/2 overflow-hidden" 
              aria-hidden="true"
            >
              <div className="h-full w-1.5 mx-auto bg-gradient-to-b from-brand-secondary/30 via-brand-primary/40 to-brand-accent/30 rounded-full"></div>
            </div>

            <div className="space-y-16 md:space-y-0"> {/* No space-y on md+ because ProcessTimelineItem handles its own structure */}
              {processSteps.map((step, index) => (
                 <AnimatedDiv 
                    key={index} 
                    animationType={index % 2 === 0 ? "fadeInRight" : "fadeInLeft"} 
                    delay={200 + index * 150}
                    className="md:mb-20 last:mb-0" // Add margin bottom to all but last on desktop for spacing
                  >
                   <ProcessTimelineItem
                    stepNumber={step.stepNumber}
                    icon={React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
                    title={step.title}
                    description={step.description}
                    alignRight={index % 2 !== 0} // Right align for index 1, 3 (i.e. step 02, 04)
                  />
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv as="section" className="my-16 md:my-24 overflow-hidden" animationType="fadeInUp">
          <AnimatedDiv animationType="slideInBottom" delay={100}>
            <SectionTitle title="Hear From Our Clients" subtitle="Real stories from brands we've helped achieve remarkable success." />
          </AnimatedDiv>

          <div className="relative mt-12 md:mt-16 h-[480px] sm:h-[450px] md:h-[420px] flex items-center justify-center px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-[calc(100%-40px)] sm:w-3/4 md:w-[380px] lg:w-[420px] p-6 pt-8 bg-brand-surface rounded-2xl border border-brand-border/70 transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center ${getCardTransform(index, currentActiveTestimonialIndex)}`}
                onClick={() => setCurrentActiveTestimonialIndex(index)}
                style={{ minHeight: '360px' }} 
              >
                <img
                  src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=E8EBF0&color=2D3748&size=96&font-size=0.33&bold=true`}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 border-4 border-brand-surface object-cover shadow-lg"
                />
                <h4 className="text-lg md:text-xl font-semibold font-heading text-brand-text-primary">{testimonial.name}</h4>
                <p className="text-sm text-brand-primary mb-4">{testimonial.company}</p>

                <div className="mt-2 text-left w-full px-1 flex-grow">
                  <p className="text-xs font-semibold text-brand-text-secondary/80 mb-1 opacity-75">What they said:</p>
                  <blockquote className="text-sm text-brand-text-secondary italic leading-relaxed line-clamp-[7] sm:line-clamp-6 md:line-clamp-5">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handleThumbnailClick(index)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all duration-300 transform focus:outline-none
                            ${index === currentActiveTestimonialIndex ? 'border-brand-primary scale-110 shadow-md' : 'border-brand-border/50 hover:border-brand-secondary/70 hover:scale-105'}`}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=E8EBF0&color=2D3748&size=48&font-size=0.33&bold=true`}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </AnimatedDiv>
        
        <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp" delay={200}>
            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-surface to-brand-secondary/5 p-8 md:p-12 rounded-xl shadow-soft-lg text-center border border-brand-border">
                <AnimatedDiv animationType="scaleIn" delay={100} className="mb-6 inline-block">
                    <LottieAnimation src="https://assets9.lottiefiles.com/packages/lf20_dJJuAg23D5.json" style={{ width: '120px', height: '120px' }} />
                </AnimatedDiv>
                <AnimatedDiv animationType="fadeInUp" delay={200}>
                  <h3 className="text-3xl font-bold font-heading text-brand-text-primary mb-4">Unlock AI-Powered Marketing Wisdom</h3>
                  <p className="text-brand-text-secondary mb-6">
                      Curious how cutting-edge AI can unearth your next big marketing win or solve complex branding challenges? Our AI Insights tool, developed with BlindTech.in, delivers actionable strategies.
                  </p>
                  <Button as={Link} to="/insights" variant="primary" size="lg" icon={React.cloneElement(Icons.SparklesIcon as React.ReactElement<{ className?: string }>, {className: "w-5 h-5"})}>
                      Explore AI Insights Now
                  </Button>
                </AnimatedDiv>
            </div>
        </AnimatedDiv>
        
        <AnimatedDiv animationType="fadeInUp" delay={200}>
          <CTABanner
            title="Ready to Revolutionize Your Brand?"
            description="Let's craft your success story. Partner with BrandsScaler and BlindTech.in to achieve unparalleled growth and market dominance. Your journey to extraordinary starts now."
            buttonText="Schedule Your Free Strategy Call"
            buttonLink="/contact"
          />
        </AnimatedDiv>
      </PageContainer>
    </>
  );
};

export default HomePage;