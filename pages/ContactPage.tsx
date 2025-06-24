
import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import Input, { TextArea } from '../components/common/Input';
import SectionTitle from '../components/common/SectionTitle';
import { Icons } from '../constants';
import ErrorMessage from '../components/ErrorMessage';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';

const ContactPage: React.FC = () => {
  useEffect(() => {
    setMetaTags(
      'Contact BrandsScaler | Let\'s Grow Your Brand',
      'Get in touch with BrandsScaler to discuss your marketing, branding, or growth strategy needs. We\'re ready to help you revolutionize your brand. Contact us today!',
      'contact BrandsScaler, marketing agency contact, branding consultation, schedule strategy call, get in touch'
    );
    setPageSpecificJsonLd({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact BrandsScaler",
      "description": "Reach out to BrandsScaler for marketing and branding services.",
      "url": "https://brandsscaler.com/#/contact", // Replace with actual domain
      "mainEntity": {
        "@type": "Organization",
        "name": "BrandsScaler",
        "telephone": "+1-234-567-890", // Replace if you have a primary contact number
         "email": "hello@brandsscaler.com" // This is a general contact, not the submission recipient
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSubmitted(false);
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError("Please fill out all fields.");
        setIsLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/contact', { // Your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: ''});
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Failed to send message. Please try again later.' }));
        setError(errorData.message || 'An unexpected error occurred.');
      }
    } catch (networkError) {
      console.error('Network error:', networkError);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Get In Touch" subtitle="We're excited to hear about your brand and discuss how BrandsScaler, in partnership with BlindTech.in, can help you achieve revolutionary growth. Reach out to us!" />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Contact Form */}
        <div className="bg-brand-surface p-8 rounded-xl shadow-soft-lg border border-brand-border animate-fade-in-up">
          <h3 className="text-2xl font-semibold font-heading text-brand-text-primary mb-6">Send Us a Message</h3>
          {isSubmitted && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 border border-green-300 rounded-lg animate-fade-in">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          {error && <ErrorMessage message={error}/>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              disabled={isLoading}
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              disabled={isLoading}
            />
            <Input
              label="Subject"
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              disabled={isLoading}
            />
            <TextArea
              label="Your Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project or question..."
              required
              disabled={isLoading}
            />
            <div>
              <Button type="submit" variant="primary" size="lg" isLoading={isLoading} disabled={isLoading} icon={React.cloneElement(Icons.SendIcon as React.ReactElement<{ className?: string }>, {className: "w-5 h-5 text-white"})}>
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div>
             <h3 className="text-2xl font-semibold font-heading text-brand-text-primary mb-2">Contact Details</h3>
             <p className="text-brand-text-secondary mb-6">Prefer to reach out directly? Here's how you can find us. We're eager to discuss your brand's future.</p>
          </div>
          {[
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
              title: "Email Us",
              link: "mailto:hello@brandsscaler.com",
              text: "hello@brandsscaler.com"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
              title: "Call Us",
              link: "tel:+1234567890",
              text: "+1 (234) 567-890 (Placeholder)"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
              title: "Our Office",
              text: "123 Innovation Drive, Tech City, TX 75001 (Placeholder)"
            }
          ].map((item, index) => (
            <div key={item.title} className="bg-brand-surface p-6 rounded-xl shadow-soft flex items-start space-x-4 border border-brand-border animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-medium font-heading text-brand-text-primary">{item.title}</h4>
                {item.link ? 
                  <a href={item.link} className="text-brand-primary hover:text-brand-accent transition-colors">{item.text}</a> :
                  <p className="text-brand-text-secondary">{item.text}</p>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
