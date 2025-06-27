import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode; // Keep as ReactNode for flexibility
  as?: React.ElementType; // For using Link as button
  to?: string; // For react-router Link
  href?: string; // For <a> tags
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  icon,
  className, 
  as: Component = 'button', // Default to 'button'
  ...props 
}) => {
  const baseStyles = "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-soft hover:shadow-soft-lg";

  const variantStyles = {
    primary: 'bg-gradient-primary text-white hover:brightness-110 focus:ring-brand-primary hover:shadow-glow-primary',
    secondary: 'bg-gradient-secondary text-white hover:brightness-110 focus:ring-brand-accent hover:shadow-glow-secondary',
    outline: 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    subtle: 'bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 focus:ring-brand-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg', // Slightly adjusted padding for lg
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

  const content = (
    <>
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon && React.isValidElement(icon) ? (
          <span className={children ? "mr-2" : ""}>
            {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
          </span>
        ) : null
      }
      {children}
    </>
  );

  return (
    <Component
      className={combinedClassName}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </Component>
  );
};

export default Button;
