import { useEffect, useRef } from 'react';

interface ScrollOptions {
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export const useInfiniteScroll = ({ 
  speed = 0.5, // Reduced from 1 to 0.5 for slower scrolling
  direction = 'left',
  pauseOnHover = true 
}: ScrollOptions = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPaused = useRef(false);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isPaused.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Reset scroll position when reaching the end
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += direction === 'left' ? speed : -speed;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (pauseOnHover) isPaused.current = true;
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) isPaused.current = false;
    };

    const element = scrollRef.current;
    if (element && pauseOnHover) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (element && pauseOnHover) {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [speed, direction, pauseOnHover]);

  return scrollRef;
};