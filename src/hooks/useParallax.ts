import { useEffect, useRef } from 'react';

export const useParallax = (ref: React.RefObject<HTMLElement>, speed: number = 0.5) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
};
