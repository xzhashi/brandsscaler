import React from 'react';

interface ProcessStepCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ stepNumber, icon, title, description }) => {
  return (
    <div className="relative p-6 bg-brand-surface rounded-xl shadow-soft text-center transform transition-all duration-200 hover:shadow-soft-lg hover:-translate-y-1 h-full flex flex-col z-10 border border-brand-border">
      <div className="absolute -top-4 -left-3">
        <span className="text-5xl font-bold font-heading text-brand-primary opacity-10 select-none">{stepNumber}</span>
      </div>
      <div className="flex-shrink-0 mb-4 mt-2 inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary mx-auto">
        {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' }) : null}
      </div>
      <h3 className="text-xl font-semibold font-heading text-brand-text-primary mb-2">{title}</h3>
      <p className="text-brand-text-secondary text-sm flex-grow">{description}</p>
    </div>
  );
};

export default ProcessStepCard;