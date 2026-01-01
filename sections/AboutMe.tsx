
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-bg scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 items-start">
            <IntersectionWrapper>
              <div className="bg-transparent overflow-hidden">
                <img 
                  src="/images/foto_jassinta_berdiri.png" 
                  alt="Jassinta Portrait Standing Transparent" 
                  className="w-full aspect-[1080/1920] object-contain transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </IntersectionWrapper>
            <IntersectionWrapper>
              <div className="bg-transparent overflow-hidden">
                <img 
                  src="/images/foto_jassinta_duduk.png" 
                  alt="Jassinta Portrait Sitting Transparent" 
                  className="w-full aspect-[408/612] object-contain transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </IntersectionWrapper>
          </div>
          
          <div className="w-full lg:w-1/2 pt-16 lg:pt-0">
            <IntersectionWrapper>
              <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-12 border-b-8 border-brand-accent/10 pb-6 inline-block uppercase tracking-tighter">About Me</h2>
              <p className="text-xl md:text-2xl text-brand-secondary leading-relaxed font-light mb-12 italic border-l-4 border-brand-accent pl-8">
                “I’m a content creator and visual designer with over one year of experience working across digital platforms. I combine strategy, creativity, and clarity to help brands communicate better.”
              </p>
              <div className="space-y-8 text-brand-secondary leading-loose text-lg font-light">
                <p>
                  My work bridge the gap between aesthetic beauty and strategic utility. Every frame I edit and every layout I design is crafted with the intent of delivering clear, impactful messages that elevate brand identities in a crowded digital space.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-12">
                <div>
                  <p className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">Core Strategy</p>
                  <ul className="space-y-3 text-sm font-medium text-brand-primary/80">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Content Planning</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Narrative Arc</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Visual Systems</li>
                  </ul>
                </div>
                <div>
                  <p className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">Technical Proficiency</p>
                  <ul className="space-y-3 text-sm font-medium text-brand-primary/80">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Adobe Creative Suite</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> 4K Video Editing</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Editorial Design</li>
                  </ul>
                </div>
              </div>
            </IntersectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
