import React from 'react';

interface USPItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const USPItem: React.FC<USPItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-surface p-6 rounded-xl shadow-lg border border-brand-border/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-brand-primary/50 hover:transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-brand-accent/10 rounded-full">
          {/* The icon prop is expected to be an already styled ReactElement (e.g., with size and color) */}
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold font-heading text-brand-text-primary mb-1.5">{title}</h4>
          <p className="text-sm text-brand-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default USPItem;