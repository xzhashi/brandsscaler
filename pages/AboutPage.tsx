import React, { useEffect, SVGAttributes } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Icons } from '../constants';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import LottieAnimation from '../components/LottieAnimation';
import AnimatedDiv from '../src/components/common/AnimatedDiv';

const teamMembers = [
  { name: 'Jane Strategist', role: 'CEO & Chief Strategist', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { name: 'John Growth', role: 'Head of Growth & Innovation', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { name: 'Alice Creative', role: 'Creative Director & Brand Alchemist', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=80' },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'About BrandsScaler | Our Mission & Technology Partner BlindTech.in',
      'Learn about BrandsScaler, our mission to revolutionize brands, our core values, and our technology partnership with BlindTech.in for cutting-edge solutions.',
      'about BrandsScaler, marketing agency mission, branding company values, BlindTech.in partnership, AI marketing technology'
    );
    setPageSpecificJsonLd({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About BrandsScaler",
      "description": "Learn about BrandsScaler's mission, values, and our partnership with BlindTech.in.",
      "url": "https://brandsscaler.com/#/about" // Replace with actual domain
    });
  }, []);

  return (
    <div>
      <AnimatedDiv animationType="fadeIn" delay={100}>
        <SectionTitle title="About BrandsScaler" subtitle="We are more than an agency; we are your dedicated partners in revolutionizing your brand's journey, powered by technology from BlindTech.in." />
      </AnimatedDiv>

      <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24" animationType="fadeInUp" delay={200}>
        <AnimatedDiv animationType="fadeInLeft" delay={100}>
          <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-4">Our Mission: To Scale Your Vision</h3>
          <p className="text-brand-text-secondary mb-4 leading-relaxed">
            At BrandsScaler, our mission is to empower businesses of all sizes to achieve unprecedented growth and market impact. We believe in challenging the status quo, leveraging cutting-edge technology, and crafting bespoke strategies that deliver tangible, transformative results.
          </p>
          <p className="text-brand-text-secondary leading-relaxed">
            We're driven by a passion for innovation and a commitment to our clients' success. Our approach combines data-driven insights with creative brilliance to build brands that not only stand out but also stand the test of time, ensuring you're ready for the future of your industry.
          </p>
        </AnimatedDiv>
        <AnimatedDiv animationType="fadeInRight" delay={100} className="rounded-lg overflow-hidden shadow-soft-lg border border-brand-border aspect-video">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=80" alt="BrandsScaler Team Collaboration" className="w-full h-full object-cover" />
        </AnimatedDiv>
      </AnimatedDiv>

      <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp" delay={200}>
        <AnimatedDiv animationType="slideInBottom" delay={100}>
          <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-10 text-center">Our Core Values: The BrandsScaler DNA</h3>
        </AnimatedDiv>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Icons.SparklesIcon, title: 'Innovation First', description: 'Constantly seeking new, disruptive, and better ways to achieve extraordinary results.' },
            { icon: Icons.GrowthHacking, title: 'Results-Driven', description: 'Focused on delivering measurable, impactful success for our clients marketing goals.' },
            { icon: Icons.PartnershipIcon, title: 'Strategic Partnership', description: 'Working collaboratively as an extension of your team, invested in your vision.' },
            { icon: Icons.ContentCreation, title: 'Creative Excellence', description: 'Pushing creative boundaries to craft memorable and effective brand experiences.' },
          ].map((value, index) => (
            <AnimatedDiv key={value.title} animationType="scaleIn" delay={index * 150}>
              <div className="bg-brand-surface p-6 rounded-xl text-center transform transition-all duration-200 hover:bg-brand-primary/5 hover:scale-105 shadow-soft border border-brand-border flex flex-col items-center h-full">
                <div className="text-brand-accent mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-brand-accent/10">
                  {React.isValidElement(value.icon) ? React.cloneElement(value.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-accent' }) : null}
                </div>
                <h4 className="text-lg font-semibold font-heading text-brand-text-primary mb-1">{value.title}</h4>
                <p className="text-sm text-brand-text-secondary">{value.description}</p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>
      
      <AnimatedDiv as="section" className="my-16 md:my-24 py-12 bg-brand-primary/5 rounded-xl border border-brand-border" animationType="fadeInUp" delay={200}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <AnimatedDiv animationType="fadeInLeft" delay={100} className="text-center md:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold font-heading text-brand-text-primary mb-4">
                        Powered by <span className="text-brand-primary">BlindTech.in</span>
                    </h3>
                    <p className="text-brand-text-secondary mb-3 leading-relaxed">
                        Our cutting-edge strategies and digital solutions are supercharged by our sister company and technology partner, <a href="https://blindtech.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:text-brand-accent">BlindTech.in</a>.
                    </p>
                    <p className="text-brand-text-secondary mb-6 leading-relaxed">
                        BlindTech.in specializes in developing robust web platforms, custom applications, and advanced AI tools that form the technological backbone of BrandsScaler's innovative service delivery. This partnership ensures our clients benefit from the latest technological advancements for unparalleled marketing performance.
                    </p>
                     <a href="https://blindtech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-accent">
                        Learn more about BlindTech.in
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </AnimatedDiv>
                <AnimatedDiv animationType="fadeInRight" delay={100} className="flex justify-center items-center">
                    <LottieAnimation src="https://assets1.lottiefiles.com/packages/lf20_rZJO0S.json" style={{ maxWidth: '300px', height: '300px' }} />
                </AnimatedDiv>
            </div>
        </div>
      </AnimatedDiv>

      <AnimatedDiv as="section" className="my-16 md:my-24" animationType="fadeInUp" delay={200}>
        <AnimatedDiv animationType="slideInBottom" delay={100}>
          <h3 className="text-2xl lg:text-3xl font-semibold font-heading text-brand-text-primary mb-10 text-center">Meet Our Visionaries (Placeholder)</h3>
        </AnimatedDiv>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedDiv key={member.name} animationType="fadeInUp" delay={index * 150}>
              <div className="bg-brand-surface p-6 rounded-xl shadow-soft text-center transform transition-all duration-200 hover:shadow-soft-lg hover:-translate-y-1 border border-brand-border">
                <img src={member.imageUrl} alt={`Photo of ${member.name}, ${member.role} at BrandsScaler`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-primary/50 object-cover" />
                <h4 className="text-xl font-semibold font-heading text-brand-text-primary">{member.name}</h4>
                <p className="text-brand-primary">{member.role}</p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default AboutPage;