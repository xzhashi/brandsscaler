import React from 'react';

interface ValuePropositionItemProps {
  icon: React.ReactNode; // Expecting the raw icon component
  title: string;
  description: string;
}

const ValuePropositionItem: React.FC<ValuePropositionItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-surface p-5 rounded-xl shadow-xl border border-brand-border/30 flex flex-col text-left transform hover:-translate-y-1.5 transition-all duration-300 h-full w-full max-w-sm mx-auto">
      {/* Icon and Title Header */}
      <div className="flex items-center space-x-3 mb-3">
        {React.isValidElement(icon) ? 
          React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-brand-primary flex-shrink-0' }) 
          : null}
        <h3 className="text-lg font-semibold font-heading text-brand-text-primary leading-tight">{title}</h3>
      </div>

      {/* Placeholder "Image/Content" Area */}
      <div className="w-full h-24 bg-brand-bg rounded-md my-3 flex items-center justify-center text-brand-text-secondary/60 text-xs sm:text-sm p-2">
        <span>Strategic Focus Visualized</span>
      </div>

      {/* Description */}
      <p className="text-brand-text-secondary text-sm flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ValuePropositionItem;