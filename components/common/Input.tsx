
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, id, className, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-brand-text-secondary mb-1">{label}</label>}
      <input
        id={id}
        className={`w-full px-4 py-2.5 bg-brand-surface border border-brand-border text-brand-text-primary rounded-lg shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder-brand-text-secondary/70 transition duration-150 ease-in-out ${className || ''}`}
        {...props}
      />
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
export const TextArea: React.FC<TextAreaProps> = ({ label, id, className, ...props }) => {
    return (
      <div>
        {label && <label htmlFor={id} className="block text-sm font-medium text-brand-text-secondary mb-1">{label}</label>}
        <textarea
          id={id}
          className={`w-full px-4 py-2.5 bg-brand-surface border border-brand-border text-brand-text-primary rounded-lg shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder-brand-text-secondary/70 transition duration-150 ease-in-out ${className || ''}`}
          rows={4}
          {...props}
        />
      </div>
    );
  };


export default Input;