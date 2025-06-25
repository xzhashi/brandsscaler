
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import { Icons } from '../constants';
import HelpWidgetModal from './HelpWidgetModal';

// Simple SVG for YouTube as a placeholder
const YouTubeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.411 0 5.295 0 12s.488 8.589 4.385 8.816c3.6.245 11.626.246 15.23 0C23.512 20.589 24 18.705 24 12s-.488-8.589-4.385-8.816zm-10.615 12.739V8.077l6.046 3.039-6.046 4.807z" />
  </svg>
);

const InstagramIcon = (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2.014a.828.828 0 01.594 0l6.866 2.059a.828.828 0 01.594.799v8.204a.828.828 0 01-.26.592l-4.22 4.22a.828.828 0 01-1.168 0l-4.22-4.22a.828.828 0 01-.26-.592V4.872a.828.828 0 01.594-.799L11.721 2.014l.328-.098.328.098zm0 1.25L5.75 5.56v7.88l4.086 4.086a.25.25 0 00.354 0L14.276 13.44V5.56L12.315 3.264z" clipRule="evenodd" /><path d="M12 6.875a5.125 5.125 0 100 10.25 5.125 5.125 0 000-10.25zm0 8.25a3.125 3.125 0 110-6.25 3.125 3.125 0 010 6.25zM16.125 7.125a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
);

const TwitterIcon = (
 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);

const LinkedInIcon = (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

interface FloatingElementConfig {
  id: string;
  initialStyle: React.CSSProperties;
  icon: React.ReactElement;
  title: string;
  description: string;
  imageAreaText: string;
  className?: string;
}

const FLOATING_ELEMENTS_CONFIG: FloatingElementConfig[] = [
  { 
    id: 'card1', 
    initialStyle: { top: '15%', left: '10%', transform: 'rotate(-5deg)' }, 
    icon: React.cloneElement(Icons.LightBulbIcon as React.ReactElement<{ className?: string }>, {className: "w-4 h-4 text-brand-accent"}), 
    title: 'AI-Powered Insights', 
    description: 'Unlock market trends and audience preferences with advanced AI.',
    imageAreaText: 'Image Area',
    className: "w-52"
  },
  { 
    id: 'card2', 
    initialStyle: { top: '20%', right: '8%', transform: 'rotate(3deg)' }, 
    icon: React.cloneElement(Icons.CreateIcon as React.ReactElement<{ className?: string }>, {className: "w-4 h-4 text-brand-primary"}), 
    title: 'Dynamic Content Tools', 
    description: 'Generate engaging content, scripts, and visuals effortlessly.',
    imageAreaText: 'Visual Placeholder',
    className: "w-56"
  },
  { 
    id: 'card3', 
    initialStyle: { bottom: '20%', left: '12%', transform: 'rotate(4deg)' }, 
    icon: React.cloneElement(Icons.OptimizeIcon as React.ReactElement<{ className?: string }>, {className: "w-4 h-4 text-brand-secondary"}), 
    title: 'Growth Analytics', 
    description: 'Track KPIs and optimize for maximum growth potential.',
    imageAreaText: 'Chart Preview',
    className: "w-48"
  },
  { 
    id: 'card4', 
    initialStyle: { bottom: '15%', right: '15%', transform: 'rotate(-2deg)' }, 
    icon: React.cloneElement(Icons.BrandStrategy as React.ReactElement<{ className?: string }>, {className: "w-4 h-4 text-brand-accent"}), 
    title: 'Brand Strategy Canvas', 
    description: 'Crafting unique brand identities that resonate and lead the market.',
    imageAreaText: 'Strategy Board',
    className: "w-52"
  }
];

interface CardDragState {
  id: string;
  currentDelta: { x: number; y: number };
  isDragging: boolean;
  dragStartPoint: { screenX: number; screenY: number; initialDeltaX: number; initialDeltaY: number } | null;
}

const avatarUrls = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
];

const HeroSection: React.FC = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const initialCardDragStates: CardDragState[] = FLOATING_ELEMENTS_CONFIG.map(config => ({
    id: config.id,
    currentDelta: { x: 0, y: 0 },
    isDragging: false,
    dragStartPoint: null,
  }));
  const [cardDragStates, setCardDragStates] = useState<CardDragState[]>(initialCardDragStates);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    cardId: string
  ) => {
    e.preventDefault();
    const point = 'touches' in e ? e.touches[0] : e;

    setCardDragStates(prevStates =>
      prevStates.map(cardState => {
        if (cardState.id === cardId) {
          return {
            ...cardState,
            isDragging: true,
            dragStartPoint: {
              screenX: point.clientX,
              screenY: point.clientY,
              initialDeltaX: cardState.currentDelta.x,
              initialDeltaY: cardState.currentDelta.y,
            },
          };
        }
        return cardState;
      })
    );
  };

  useEffect(() => {
    const handleDragMove = (e: MouseEvent | TouchEvent) => {
      const point = 'touches' in e ? e.touches[0] : e;
      setCardDragStates(prevStates =>
        prevStates.map(cardState => {
          if (cardState.isDragging && cardState.dragStartPoint) {
            let dx = point.clientX - cardState.dragStartPoint.screenX;
            let dy = point.clientY - cardState.dragStartPoint.screenY;
            
            let newX = cardState.dragStartPoint.initialDeltaX + dx;
            let newY = cardState.dragStartPoint.initialDeltaY + dy;

            if (heroRef.current) {
                // This part would need more robust logic if strict boundaries are needed, 
                // considering initial positions and card sizes.
            }

            return {
              ...cardState,
              currentDelta: { x: newX, y: newY },
            };
          }
          return cardState;
        })
      );
    };

    const handleDragEnd = () => {
      setCardDragStates(prevStates =>
        prevStates.map(cardState =>
          cardState.isDragging ? { ...cardState, isDragging: false, dragStartPoint: null } : cardState
        )
      );
    };

    const activelyDragging = cardDragStates.some(s => s.isDragging);

    if (activelyDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove, { passive: false });
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
      window.addEventListener('mouseleave', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener('mouseleave', handleDragEnd);
    };
  }, [cardDragStates]);


  return (
    <>
      <div className="bg-brand-bg relative overflow-hidden min-h-screen flex flex-col justify-center" ref={heroRef}>
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('https://storage.brandsscaler.com/storage/v1/object/public/brandsscaler//BrandsScalar%20Cloud%20Hero%20Bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        ></div>

        {FLOATING_ELEMENTS_CONFIG.map((config) => {
          const cardState = cardDragStates.find(s => s.id === config.id);
          if (!cardState) return null;

          const currentTransform = `${config.initialStyle.transform || ''} translate(${cardState.currentDelta.x}px, ${cardState.currentDelta.y}px)`;
          const dynamicStyle: React.CSSProperties = {
            ...config.initialStyle,
            transform: currentTransform,
            cursor: cardState.isDragging ? 'grabbing' : 'grab',
            zIndex: cardState.isDragging ? 100 : 50, 
            userSelect: 'none', 
          };
          
          return (
            <div 
              key={config.id}
              className={`hidden lg:block absolute bg-brand-surface/80 backdrop-blur-md p-3 rounded-lg shadow-xl border border-brand-border/30 text-xs text-brand-text-primary ${config.className || ''}`}
              style={dynamicStyle}
              onMouseDown={(e) => handleDragStart(e, config.id)}
              onTouchStart={(e) => handleDragStart(e, config.id)}
              aria-hidden="true"
            >
              <div className="flex items-center space-x-2 mb-1">
                {config.icon}
                <p className="font-semibold">{config.title}</p>
              </div>
              <div className="w-full h-10 md:h-12 bg-brand-border/30 rounded my-1.5 flex items-center justify-center text-brand-text-secondary/50 text-[10px]">
                {config.imageAreaText}
              </div>
              <p className="text-brand-text-secondary text-[11px]">{config.description}</p>
            </div>
          );
        })}


        <div className="relative z-20 max-w-4xl mx-auto px-4 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-center">
          <div className="mb-4 sm:mb-6 md:mb-8 inline-block p-3 bg-brand-surface rounded-2xl shadow-soft border border-brand-border/50">
            {React.cloneElement(Icons.SparklesIcon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 sm:w-12 sm:h-12 text-brand-primary' })}
          </div>

          <h1 className="text-3xl font-extrabold font-heading tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Scale Your Brand to</span>
            <span className="block text-brand-primary mt-1 sm:mt-2">
              Revolutionary Heights
            </span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base text-brand-text-secondary sm:text-lg md:mt-6 md:max-w-2xl md:text-xl">
            BrandsScaler is your partner in crafting next-level marketing strategies, building unforgettable brand identities, and unlocking explosive growth.
          </p>

          <div className="mt-8 flex items-center justify-center space-x-3">
            <div className="flex -space-x-3 sm:-space-x-4">
              {avatarUrls.map((url, index) => (
                <img
                  key={index}
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-brand-surface object-cover shadow-sm"
                  src={url}
                  alt={`User ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-sm text-brand-text-secondary font-medium">Trusted by Industry Leaders</p>
          </div>
          
          <div className="mt-8 sm:mt-10 max-w-sm mx-auto sm:max-w-none flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:justify-center">
            <Button
              as={Link}
              to="/services"
              variant="primary"
              size="lg"
              className="w-full lg:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
            >
              Explore Our Services
            </Button>
            <Button
              onClick={() => setIsHelpModalOpen(true)}
              variant="secondary" 
              size="lg"
              className="w-full lg:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
              icon={React.cloneElement(Icons.LightBulbIcon as React.ReactElement<{ className?: string }>, {className: "w-5 h-5"})}
            >
              Guide Me to Growth
            </Button>
          </div>
          
          <div className="mt-10 sm:mt-12 flex justify-center space-x-5 sm:space-x-6">
            <a href="#" aria-label="YouTube" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">
              {YouTubeIcon}
            </a>
            <a href="#" aria-label="Instagram" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">
              {InstagramIcon}
            </a>
            <a href="#" aria-label="Twitter" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">
              {TwitterIcon}
            </a>
             <a href="#" aria-label="LinkedIn" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">
              {LinkedInIcon}
            </a>
          </div>

          <div className="mt-8">
            <p className="text-xs text-brand-text-secondary/70">
                Powered by BlindTech.in
            </p>
          </div>

        </div>
      </div>
      <HelpWidgetModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </>
  );
};

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      as?: React.ElementType;
      to?: string;
    }
  }

export default HeroSection;
