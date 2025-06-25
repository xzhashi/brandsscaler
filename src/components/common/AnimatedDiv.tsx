
import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type AnimationType = 
  | 'fadeInUp' 
  | 'fadeIn' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'scaleIn'
  | 'slideInBottom';

interface AnimatedDivProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number; // in milliseconds
  className?: string; // Additional classes for the div
  observerOptions?: IntersectionObserverInit & { freezeOnceVisible?: boolean };
  as?: React.ElementType; // Changed from keyof JSX.IntrinsicElements
  style?: React.CSSProperties; // Allow passing additional styles
}

const AnimatedDiv = ({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  className = '',
  observerOptions = { threshold: 0.1, freezeOnceVisible: true },
  as: Tag = 'div', // Use Tag for the element type, defaulting to 'div'
  style = {},
}: AnimatedDivProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null); // This ref is primarily for HTMLElement-like elements
  const isVisible = useIntersectionObserver(ref, observerOptions);

  const animationClasses: Record<AnimationType, string> = {
    fadeInUp: 'animate-fade-in-up',
    fadeIn: 'animate-fade-in',
    fadeInDown: 'animate-fade-in-down',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    scaleIn: 'animate-scale-in',
    slideInBottom: 'animate-slide-in-bottom',
  };

  const appliedAnimationClass = animationClasses[animationType] || animationClasses.fadeInUp;

  const combinedStyle = {
    ...style,
    animationDelay: isVisible ? `${delay}ms` : '0ms',
  };

  // The 'ref' prop is passed using 'as any'. This is a pragmatic way to handle
  // polymorphic refs. If 'Tag' is a custom React component, it needs to be
  // wrapped in React.forwardRef to correctly receive this ref.
  // For intrinsic elements and custom elements like 'lottie-player' (which are
  // treated as HTMLElements due to lottie.d.ts), this ref should work.
  return (
    <Tag
      ref={ref as any} 
      className={`opacity-0 ${className} ${isVisible ? appliedAnimationClass : ''}`}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
};

export default AnimatedDiv;
