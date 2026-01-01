
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { TRUSTED_LOGOS } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 text-center">
        <IntersectionWrapper className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary uppercase tracking-tighter">Experience / Trusted By</h2>
        </IntersectionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-4 items-stretch">
          {TRUSTED_LOGOS.map((logo) => (
            <IntersectionWrapper key={logo.id}>
              <div className="group h-full flex items-center justify-center p-12 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-bg/50">
                <img 
                  src={logo.logoUrl} 
                  alt={logo.name} 
                  className="w-full h-auto max-w-[180px] mx-auto opacity-50 group-hover:opacity-100 transition-all filter grayscale hover:grayscale-0 duration-700"
                />
              </div>
            </IntersectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
