import { useState, useEffect, RefObject, useRef } from 'react';

interface UseElementOnScreenOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useElementOnScreen(
  options: UseElementOnScreenOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin]);

  return [ref, isVisible];
}