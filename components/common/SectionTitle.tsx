
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 md:mb-16 ${textAlignClass[align]}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-brand-text-secondary max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${align === 'right' ? 'ml-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;