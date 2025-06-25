import React from 'react';

interface ProcessTimelineItemProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  alignRight: boolean; // If true, content card is on the right of the timeline (for desktop)
}

const ProcessTimelineItem: React.FC<ProcessTimelineItemProps> = ({
  stepNumber,
  icon,
  title,
  description,
  alignRight,
}) => {
  // Desktop alignment classes
  const cardAlignmentClass = alignRight ? 'md:self-end md:text-left' : 'md:self-start md:text-right';
  const cardMarginClass = alignRight ? 'md:ml-[55%]' : 'md:mr-[55%]'; // Pushes card to one side of the 50% mark
  const headerFlexDirection = alignRight ? 'flex-row text-left' : 'flex-row-reverse text-right';
  const iconMargin = alignRight ? 'mr-4' : 'ml-4';
  const stepNumberPosition = alignRight ? 'left-6' : 'right-6 md:left-auto'; // Step# for desktop

  // Mobile always stacks, text-center for header content
  return (
    <div className="w-full relative flex justify-center md:block"> {/* Ensure full width for centering on mobile, block for desktop */}
      {/* Content Card: Takes full width on mobile, half on desktop */}
      <div
        className={`w-full max-w-md md:max-w-none md:w-[45%] p-6 py-8 bg-brand-surface rounded-2xl shadow-xl border border-brand-border/40 
                   hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1
                   relative z-10 ${cardAlignmentClass} ${cardMarginClass} text-center md:text-left group`}
      >
        {/* Stylized Step Number - prominent and decorative */}
        <span className={`absolute -top-5 ${stepNumberPosition} text-6xl lg:text-7xl font-extrabold text-brand-bg select-none z-0 opacity-70 group-hover:opacity-100 transition-opacity`}
              style={{ WebkitTextStroke: `2px #E8EBF0` }} // Using a hex from brand-border for stroke
        >
          {stepNumber}
        </span>
        
        <div className="relative z-10"> {/* Content wrapper for z-index above step number */}
          <div className={`flex flex-col md:${headerFlexDirection} items-center mb-4`}>
            <div className={`flex-shrink-0 p-3 bg-brand-primary/10 rounded-xl text-brand-primary mb-3 md:mb-0 ${iconMargin}`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold font-heading text-brand-text-primary text-center md:${alignRight ? 'text-left' : 'text-right'}">{title}</h3>
          </div>
          <p className={`text-brand-text-secondary leading-relaxed text-sm text-center md:${alignRight ? 'text-left' : 'text-right'}`}>{description}</p>
        </div>
      </div>

      {/* Dot on the Timeline (visually appears on the central line) */}
      {/* Desktop Dot */}
      <div className={`hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-primary border-[5px] border-brand-surface shadow-xl z-20`}>
      </div>
      {/* Mobile Dot (positioned below card, on the timeline) */}
      <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-brand-primary border-4 border-brand-surface shadow-md z-20">
      </div>
    </div>
  );
};

export default ProcessTimelineItem;