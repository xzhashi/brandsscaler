import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Optional: for a smooth scrolling effect
      });
    } catch (e) {
      // Fallback for browsers that don't support smooth scrolling options
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null; // This component does not render anything visible
};

export default ScrollToTop;
