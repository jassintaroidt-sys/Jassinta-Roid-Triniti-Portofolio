
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { GRAPHIC_DESIGN_LAYOUT } from '../constants';

export const GraphicDesign: React.FC = () => {
  return (
    <section className="py-24 bg-brand-alternate">
      <div className="container mx-auto px-6">
        <IntersectionWrapper className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary uppercase tracking-tighter">Graphic Design & Publishing</h2>
          <h3 className="text-lg text-brand-secondary font-medium opacity-70">
            Editorial And Social Media Designs Showcasing Visual Creativity.
          </h3>
        </IntersectionWrapper>

        {/* 6 Flyers: 3 Top, 3 Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {GRAPHIC_DESIGN_LAYOUT.flyers.map((item) => (
            <IntersectionWrapper key={item.id}>
              <div className="group relative overflow-hidden bg-brand-bg rounded-xl shadow-sm transition-all duration-500 hover:scale-[1.03] border border-brand-bg/20">
                <div className="aspect-square w-full">
                  <img 
                    src={item.imageUrl} 
                    alt="Flyer Kecantikan" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-brand-alternate text-center border-t border-brand-bg/10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/80">Flyer Kecantikan</h4>
                </div>
              </div>
            </IntersectionWrapper>
          ))}
        </div>

        {/* Square HP Mockup (1980x1980) - CLEAN for transparent photo */}
        <IntersectionWrapper className="mb-16">
          <div className="group relative overflow-hidden bg-transparent transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-square w-full max-w-[1980px] mx-auto overflow-hidden">
              <img 
                src={GRAPHIC_DESIGN_LAYOUT.mockupHP.imageUrl} 
                alt="Mockup HP Medsos" 
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </IntersectionWrapper>

        {/* Row 3: 2 Flyers + Jassinta Half Body (Clean) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {GRAPHIC_DESIGN_LAYOUT.tier3.map((item, idx) => (
            <IntersectionWrapper key={item.id} className="h-full">
              {/* If it's the last item (Jassinta Half Body), keep it clean/no-stroke */}
              <div className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.03] h-full ${
                idx === 2 ? 'bg-transparent' : 'bg-brand-bg rounded-xl shadow-sm border border-brand-bg/20'
              }`}>
                <div className={`${idx === 2 ? 'aspect-square' : 'aspect-[4/5]'} w-full overflow-hidden`}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title || "Jassinta"} 
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                      idx === 2 ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </div>
                {item.title && (
                  <div className="p-4 bg-brand-alternate text-center border-t border-brand-bg/10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/80">{item.title}</h4>
                  </div>
                )}
              </div>
            </IntersectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
