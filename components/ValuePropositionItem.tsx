import React from 'react';

interface ValuePropositionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValuePropositionItem: React.FC<ValuePropositionItemProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-brand-surface rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-1 border border-brand-border">
      <div className="flex justify-center mb-4">
        {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 text-brand-primary' }) : null}
      </div>
      <h3 className="text-xl font-semibold font-heading text-brand-text-primary mb-2">{title}</h3>
      <p className="text-brand-text-secondary text-sm">{description}</p>
    </div>
  );
};

export default ValuePropositionItem;