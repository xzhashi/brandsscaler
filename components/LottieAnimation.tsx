
import React, { useState, useEffect } from 'react';

// The global declaration for JSX.IntrinsicElements which includes 'lottie-player'
// and its attributes is defined in lottie.d.ts

interface LottieAnimationProps {
  src: string;
  className?: string; // This className is for the wrapper div
  style?: React.CSSProperties; // This style is for the lottie-player element itself
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  speed?: number;
  background?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  className, // For the wrapper div
  style = { width: '100%', height: 'auto' }, // Default style for lottie-player
  loop = true,
  autoplay = true,
  controls = false,
  speed = 1,
  background = "transparent"
}) => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Check if the custom element is already defined
    if (window.customElements.get('lottie-player')) {
      setIsPlayerReady(true);
    } else {
      // Wait for the custom element to be defined
      window.customElements.whenDefined('lottie-player')
        .then(() => {
          setIsPlayerReady(true);
        })
        .catch(err => {
          console.error("Error waiting for lottie-player custom element:", err);
          // Optionally, handle the error, e.g., by setting an error state
          // For now, we'll let it try to render, which might fail or show browser default
        });
    }
  }, []); // Run once on mount

  // Props for the lottie-player element
  const lottiePlayerProps = {
    src,
    background,
    speed,
    style, // Pass the style prop directly to lottie-player
    loop,
    autoplay,
    controls,
  };
  
  if (!isPlayerReady) {
    // Placeholder while waiting for the lottie-player to be defined by its script.
    // This ensures React doesn't try to render the custom element prematurely.
    const placeholderStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: background !== "transparent" ? background : (style?.background || "#E9EBF033"),
        width: style?.width || '100%',
        height: style?.height || '150px', // A sensible default height for placeholder
        border: '1px dashed #D1D5DB', 
        borderRadius: style?.borderRadius || '8px',
        boxSizing: 'border-box', // Ensure padding/border are within width/height
        padding: '10px' // Some internal padding for the text
    };
    return (
      <div className={className} style={placeholderStyle} role="figure" aria-label="Loading animation content">
        <span style={{ fontSize: '10px', color: '#5A6A85', fontFamily: 'sans-serif', textAlign: 'center' }}>
          Loading Animation...
        </span>
      </div>
    );
  }

  return (
    <div className={className}> {/* Wrapper div uses the className prop */}
      {React.createElement('lottie-player', lottiePlayerProps)}
    </div>
  );
};

export default LottieAnimation;
