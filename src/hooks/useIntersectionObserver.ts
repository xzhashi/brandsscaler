import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * If true, the observer will stop observing after the element has become visible once.
   */
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1, // Default threshold: 10% of the element is visible
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false, // Default: keep observing
  }: IntersectionObserverOptions,
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If the element is already intersecting and we want to freeze, and it's already frozen, do nothing.
    // This check is a bit redundant due to unobserve below but ensures no re-observation if state somehow flickers.
    if (observerRef.current && freezeOnceVisible && isIntersecting) {
        // Already frozen and visible.
        return;
    }
    
    const node = elementRef?.current; // Current DOM node

    if (!node) {
        // setIsIntersecting(false); // Optionally reset if element is not available
        return;
    }

    // Disconnect previous observer if any
    if (observerRef.current) {
        observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const currentlyIntersecting = entry.isIntersecting;
        if (currentlyIntersecting && !isIntersecting) { // Became visible
            setIsIntersecting(true);
            if (freezeOnceVisible && observerRef.current) {
              observerRef.current.unobserve(node); // Stop observing the current target
            }
        } else if (!currentlyIntersecting && isIntersecting && !freezeOnceVisible) { // Became not visible (and not frozen)
            setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current.observe(node);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]); // Added isIntersecting

  return isIntersecting;
}

export default useIntersectionObserver;
