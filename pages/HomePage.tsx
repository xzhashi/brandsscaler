import React, { useEffect } from 'react';
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
import ProcessStepCard from '../components/ProcessStepCard';
import LottieAnimation from '../components/LottieAnimation'; // Import LottieAnimation
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';

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
    icon: React.cloneElement(Icons.SparklesIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-primary'}),
    title: 'Ignite Your Potential',
    description: 'Unlock groundbreaking strategies that propel your brand into the future of your industry.'
  },
  {
    icon: React.cloneElement(Icons.GrowthHacking as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-primary'}),
    title: 'Dominate Your Market',
    description: 'We build category-defining brands that captivate audiences and drive measurable business results.'
  },
  {
    icon: React.cloneElement(Icons.FutureProofIcon as React.ReactElement<{ className?: string }>, {className: 'w-10 h-10 text-brand-primary'}),
    title: 'Innovate Fearlessly',
    description: 'Leverage AI and human ingenuity to create revolutionary marketing solutions that set you apart.'
  }
];

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
      company: "CEO, Innovatech Solutions"
    },
    {
      id: '2',
      quote: "The growth we've seen since partnering with BrandsScaler is phenomenal. Their digital marketing expertise is unmatched. Highly recommended!",
      name: "Sarah Miller",
      company: "Founder, Bloom & Grow Co."
    },
    {
      id: '3',
      quote: "Their AI insights tool gave us marketing ideas we'd never have thought of. It's a game changer for our content strategy!",
      name: "David Kim",
      company: "Marketing Director, QuantumLeap Inc."
    }
  ];

const HomePage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'Revolutionary Marketing & Branding Agency',
      'BrandsScaler offers cutting-edge marketing, branding, and growth strategies to elevate your business. Discover AI-powered insights and expert execution.',
      'marketing agency, branding, growth hacking, digital marketing, AI marketing, content creation, SEO services'
    );
    // No page-specific JSON-LD for homepage beyond global ones for now
    setPageSpecificJsonLd(null); 
  }, []);

  return (
    <>
      <HeroSection />

      <section className="py-16 bg-brand-bg">
        <PageContainer className="animate-fade-in-up !py-0">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {valuePropositions.map((vp, index) => (
              <ValuePropositionItem key={index} icon={vp.icon} title={vp.title} description={vp.description} />
            ))}
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <section className="my-16 md:my-24 animate-fade-in-up">
          <SectionTitle title="Our Core Strengths" subtitle="We empower brands with marketing strategies that not only adapt to the future but define it. Achieve your business goals with BrandsScaler." />
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button as={Link} to="/services" variant="secondary" size="lg">
              Explore All Our Services
            </Button>
          </div>
        </section>

        <section className="my-16 md:my-24 animate-fade-in-up">
          <SectionTitle title="Why Choose BrandsScaler?" subtitle="We're not just another agency. We're your catalyst for revolutionary growth and lasting brand impact. Powered by BlindTech.in technology." />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
            {uspItems.map((usp, index) => (
              <USPItem key={index} icon={usp.icon} title={usp.title} description={usp.description} />
            ))}
            <div className="md:col-span-2 lg:col-span-1 flex justify-center items-center mt-8 lg:mt-0">
                 <LottieAnimation src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json" style={{ maxWidth: '350px', height: '350px' }} />
            </div>
          </div>
        </section>

        <section className="my-16 md:my-24 animate-fade-in-up">
          <SectionTitle title="Our Proven Process for Success" subtitle="A clear, strategic path to transforming your brand and achieving remarkable, measurable results." />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-brand-border/70 transform -translate-y-1/2" style={{zIndex: -1}}></div>
            {processSteps.map((step, index) => (
              <ProcessStepCard 
                key={index} 
                stepNumber={step.stepNumber} 
                icon={React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-primary' })} 
                title={step.title} 
                description={step.description} 
              />
            ))}
          </div>
        </section>

        <section className="my-16 md:my-24 animate-fade-in-up">
          <SectionTitle title="What Our Clients Say" subtitle="Real results and testimonials from brands we've helped scale to new heights with our innovative marketing solutions." />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-surface p-6 rounded-xl shadow-soft transform transition-all duration-200 hover:scale-105 flex flex-col h-full border border-brand-border">
                <div className="flex-shrink-0 mb-4">
                  {React.cloneElement(Icons.QuoteIconLeft as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 text-brand-secondary opacity-30' })}
                </div>
                <p className="text-brand-text-secondary italic mb-4 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                    <p className="font-semibold text-brand-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-brand-primary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="my-16 md:my-24 animate-fade-in-up">
            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-surface to-brand-secondary/5 p-8 md:p-12 rounded-xl shadow-soft-lg text-center border border-brand-border">
                <div className="max-w-xl mx-auto">
                    <div className="mb-6 inline-block">
                        <LottieAnimation src="https://assets9.lottiefiles.com/packages/lf20_dJJuAg23D5.json" style={{ width: '120px', height: '120px' }} />
                    </div>
                    <h3 className="text-3xl font-bold font-heading text-brand-text-primary mb-4">Unlock AI-Powered Marketing Wisdom</h3>
                    <p className="text-brand-text-secondary mb-6">
                        Curious how cutting-edge AI can unearth your next big marketing win or solve complex branding challenges? Our AI Insights tool, developed with BlindTech.in, delivers actionable strategies.
                    </p>
                    <Button as={Link} to="/insights" variant="primary" size="lg" icon={React.cloneElement(Icons.SparklesIcon as React.ReactElement<{ className?: string }>, {className: "w-5 h-5"})}>
                        Explore AI Insights Now
                    </Button>
                </div>
            </div>
        </section>
        
        <CTABanner
          title="Ready to Revolutionize Your Brand?"
          description="Let's craft your success story. Partner with BrandsScaler and BlindTech.in to achieve unparalleled growth and market dominance. Your journey to extraordinary starts now."
          buttonText="Schedule Your Free Strategy Call"
          buttonLink="/contact"
        />
      </PageContainer>
    </>
  );
};

export default HomePage;