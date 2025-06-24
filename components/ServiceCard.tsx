import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-brand-surface p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-1 h-full flex flex-col border border-brand-border">
      <div className="flex-shrink-0 mb-4">
        {service.icon && React.isValidElement(service.icon) ? (
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-primary/10 text-brand-primary">
            {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-brand-primary' })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-primary/10 text-brand-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold font-heading text-brand-text-primary mb-2">{service.title}</h3>
      <p className="text-brand-text-secondary text-sm flex-grow">{service.description}</p>
      {service.details && service.details.length > 0 && (
         <ul className="mt-4 space-y-1 text-xs text-brand-text-secondary">
           {service.details.map((detail, index) => (
             <li key={index} className="flex items-start">
               <svg className="flex-shrink-0 h-4 w-4 text-brand-secondary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
               {detail}
             </li>
           ))}
         </ul>
      )}
    </div>
  );
};

export default ServiceCard;