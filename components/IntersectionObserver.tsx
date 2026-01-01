
import React, { useEffect, useRef, useState } from 'react';

interface IntersectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  onVisible?: () => void;
}

export const IntersectionWrapper: React.FC<IntersectionWrapperProps> = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "0px",
  onVisible
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (onVisible) onVisible();
          }
        });
      },
      { threshold, rootMargin }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, rootMargin, onVisible]);

  return (
    <div
      ref={domRef}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
