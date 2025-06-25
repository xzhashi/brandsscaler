
import type React from 'react';

// Define the attributes for the lottie-player custom element
// This interface can be used if preferred, but we'll inline for the IntrinsicElements example below.
// interface LottiePlayerElementSpecificAttributes {
//   src: string;
//   background?: string;
//   speed?: number;
//   loop?: boolean;
//   autoplay?: boolean;
//   controls?: boolean;
//   direction?: number;
//   mode?: "normal" | "bounce";
// }

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        background?: string;
        speed?: number;
        loop?: boolean;
        autoplay?: boolean;
        controls?: boolean;
        direction?: number;
        mode?: "normal" | "bounce";
        // Note: 'style', 'className', and other standard HTML attributes are included via React.DetailedHTMLProps
      };
    }
  }
}

// Export something to make it a module.
export {};
