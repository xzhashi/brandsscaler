
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-36 md:pb-16 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
