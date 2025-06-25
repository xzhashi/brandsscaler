import React, { useState } from 'react';

interface ValuePropositionItemProps {
  title: string;
  description: string;
  customVisual?: React.ReactNode; // Expects an <img> element for the GIF
}

const ValuePropositionItem: React.FC<ValuePropositionItemProps> = ({ title, description, customVisual }) => {
  // isHovered state is kept for potential future use or complex logic, though not directly driving play/pause here.
  // The primary mechanism for "playing" on hover and "static" otherwise is the key-reset.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  
  // gifDisplayKey will be changed to force re-mount the GIF, effectively restarting it.
  const [gifDisplayKey, setGifDisplayKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // When hovered, the GIF (if already mounted) will continue its animation.
    // If it was just re-mounted (e.g. mouse re-entry), it will play from start.
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // When mouse leaves, change the key to re-mount the GIF.
    // This will cause it to reload and restart its animation from the first frame.
    setGifDisplayKey(prevKey => prevKey + 1);
  };

  return (
    <div 
      className="bg-brand-surface p-6 rounded-2xl shadow-xl border border-brand-border/20 flex flex-col text-center h-full transform hover:-translate-y-1.5 transition-all duration-300 w-full max-w-sm mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold font-heading text-brand-text-primary mb-3">{title}</h3>

      {/* Visual Content Area - Large Square */}
      <div className="w-full aspect-square bg-brand-bg/30 rounded-lg my-4 overflow-hidden flex items-center justify-center shadow-inner">
        {customVisual ? (
          // React.cloneElement is used to inject the 'key' prop into the customVisual node.
          // customVisual is expected to be a single ReactElement (the <img> tag).
          // Changing the key causes React to unmount the old element and mount a new one,
          // which for an <img> tag means reloading the src, thus restarting the GIF.
          React.isValidElement(customVisual) ? (
            React.cloneElement(customVisual as React.ReactElement, { key: gifDisplayKey })
          ) : (
            customVisual // Fallback if customVisual is not a single valid element (should not happen for this use case)
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-text-secondary/60 text-base p-3">
            <span>Strategic Focus Visualized</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-brand-text-secondary text-sm flex-grow mt-1">
        {description}
      </p>
    </div>
  );
};

export default ValuePropositionItem;