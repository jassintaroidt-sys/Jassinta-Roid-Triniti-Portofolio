
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { LazyVideo } from '../components/LazyVideo';

export const Hero: React.FC = () => {
  const heroMarquee = "Creating Impactful Content, Strategic Video Editing, And Thoughtful Visual Design Every Day. ";

  return (
    <section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden bg-brand-bg pb-4 md:pb-6">
      {/* Z-0: Marquee Background (Bottom Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center overflow-hidden opacity-50">
        <div className="flex animate-marquee-hero whitespace-nowrap">
          <span className="text-[12vh] md:text-[20vh] font-montserrat font-black text-brand-accent uppercase leading-none select-none font-gepeng">
            {heroMarquee.repeat(4)}
          </span>
        </div>
      </div>

      {/* Z-10: Video Layer - Above Marquee, Below Content */}
     {/* Z-10: GIF Layer */}
<div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden opacity-45 mix-blend-multiply">
  <img 
    src={`${import.meta.env.BASE_URL}images/hero_animation.gif`} 
    alt="Hero Animation" 
    className="min-w-full min-h-full object-cover"
  />
</div>

      {/* Z-20: Text Content Layer (Top Layer) - Absolute Bottom Center */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-7xl flex flex-col items-center">
        <IntersectionWrapper>
          <div className="flex flex-col items-center">
            {/* Headline - Small and refined */}
            <h1 className="text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] font-poppins font-bold tracking-tighter text-brand-primary whitespace-nowrap capitalize leading-none">
              Jassinta Roid Triniti
            </h1>
            
            {/* Subtitle - Small and refined. Spacing: 1px */}
            <h2 className="mt-[1px] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] font-poppins font-bold tracking-tighter text-brand-accent whitespace-nowrap capitalize leading-none">
              Content Creator, Video Editor & Visual Designer
            </h2>

            {/* Intro - Size maintained at 20px for desktop */}
            <p className="mt-[1px] text-[13px] sm:text-[14px] md:text-[18px] lg:text-[20px] text-brand-secondary max-w-4xl mx-auto font-normal antialiased tracking-tight opacity-95 pt-1">
              I help brands communicate clearly through strategic content, impactful video, and thoughtful visual design.
            </p>
          </div>
        </IntersectionWrapper>
      </div>
    </section>
  );
};
