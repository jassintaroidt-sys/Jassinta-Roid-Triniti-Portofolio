
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // If scrolling down, hide
          setIsVisible(false);
        } else {
          // If scrolling up, show
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-full px-10 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold tracking-tighter text-brand-primary">JRT.</div>
        <div className="flex gap-6 md:gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary/80">
          <a href="#featured-work" className="hover:text-brand-accent transition-all duration-300 cursor-pointer">Work</a>
          <a href="#about" className="hover:text-brand-accent transition-all duration-300 cursor-pointer">About</a>
          <a href="#contact" className="hover:text-brand-accent transition-all duration-300 cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  );
};
