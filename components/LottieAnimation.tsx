
import React from 'react';

// The global declaration for JSX.IntrinsicElements which includes 'lottie-player'
// and its attributes is defined in lottie.d.ts

interface LottieAnimationProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  speed?: number; // Changed from string to number
  background?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  className,
  style = { width: '100%', height: 'auto' },
  loop = true,
  autoplay = true,
  controls = false,
  speed = 1, // Changed from "1" to 1
  background = "transparent"
}) => {
  return (
    <div className={className}>
      <lottie-player
        src={src}
        background={background}
        speed={speed}
        style={style} // Removed 'as any' cast
        loop={loop}
        autoplay={autoplay}
        controls={controls}
      >
      </lottie-player>
    </div>
  );
};

export default LottieAnimation;