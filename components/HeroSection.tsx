
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import { Icons } from '../constants';
import HelpWidgetModal from './HelpWidgetModal';

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
      <div className="bg-brand-bg relative overflow-hidden min-h-screen flex flex-col justify-center noise-overlay" ref={heroRef}>
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
          {/* Sparkles Icon Removed from here */}

          <h1 className="text-3xl font-extrabold font-heading tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 md:mt-8"> {/* Added margin top to compensate for removed icon */}
            <span className="block">Scale Your Brand to</span>
            <span className="block text-transparent bg-clip-text bg-gradient-full mt-1 sm:mt-2">
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
            <a href="#" aria-label="YouTube" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">{React.cloneElement(Icons.YouTubeIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}</a>
            <a href="#" aria-label="Instagram" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">{React.cloneElement(Icons.InstagramIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}</a>
            <a href="#" aria-label="Twitter" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">{React.cloneElement(Icons.TwitterIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}</a>
             <a href="#" aria-label="LinkedIn" className="text-brand-text-secondary/70 hover:text-brand-primary transition-colors duration-200">{React.cloneElement(Icons.LinkedInIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}</a>
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
