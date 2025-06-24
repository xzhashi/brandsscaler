import React from 'react';

interface USPItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const USPItem: React.FC<USPItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-200 hover:bg-brand-primary/5">
      <div className="flex-shrink-0 mt-1">
         {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-accent' }) : null}
      </div>
      <div>
        <h4 className="text-xl font-semibold font-heading text-brand-text-primary mb-1">{title}</h4>
        <p className="text-brand-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default USPItem;