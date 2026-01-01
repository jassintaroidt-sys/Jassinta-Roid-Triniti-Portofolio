
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { CAMPUS_ORGANIZATION_LAYOUT } from '../constants';

export const CampusProjects: React.FC = () => {
  const mockupMarquee = "Editorial Design Projects And Campus Visual Creativity Highlighted Here. ";
  const coverMarquee = "Collaboration, Creativity, And Editorial Excellence In Every Project. ";

  return (
    <section className="py-24 bg-brand-alternate overflow-hidden">
      <div className="container mx-auto px-6">
        <IntersectionWrapper className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary uppercase tracking-tighter">Campus Project & Organization</h2>
          <h3 className="text-lg text-brand-secondary font-medium opacity-70">
            Editorial, Graphic Design, And Video Projects From Campus And Organizational Work.
          </h3>
        </IntersectionWrapper>

        {/* MOCKUP PAGE: Kiri Surat Kabar (800x1280), Kanan Mockup Majalah (1980x1980) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 relative items-center">
          {/* Kiri: Mockup Surat Kabar - Tetap menggunakan Style Card */}
          <IntersectionWrapper>
            <div className="relative group overflow-hidden bg-brand-bg rounded-3xl shadow-lg border border-brand-bg/20">
              <div className="w-full relative overflow-hidden aspect-[800/1280]">
                <img 
                  src={CAMPUS_ORGANIZATION_LAYOUT.row1[0].imageUrl} 
                  alt="Mockup Surat Kabar" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </IntersectionWrapper>

          {/* Kanan: Mockup Majalah (1980x1980) - CLEAN (No Stroke/Shadow) */}
          <div className="flex flex-col gap-10">
            <IntersectionWrapper>
              <div className="relative group overflow-hidden bg-transparent z-10 transition-transform duration-700 hover:scale-[1.02]">
                <div className="w-full relative overflow-hidden aspect-square">
                  <img 
                    src={CAMPUS_ORGANIZATION_LAYOUT.row1[1].imageUrl} 
                    alt="Mockup Majalah Transparent" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </IntersectionWrapper>
            
            {/* Marquee under Mockup Majalah */}
            <div className="w-screen relative -left-6 md:left-0 md:w-full overflow-hidden py-4 z-0">
               <div className="flex animate-marquee-campus whitespace-nowrap items-center">
                 <div className="flex items-center border-y-4 border-brand-accent py-4">
                    <span className="text-3xl md:text-6xl font-anton text-brand-accent uppercase tracking-tight mr-8">
                      {mockupMarquee.repeat(10)}
                    </span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Row 2: Structural balance Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {CAMPUS_ORGANIZATION_LAYOUT.row2.map((item) => (
            <IntersectionWrapper key={item.id}>
              <div className="relative group overflow-hidden bg-brand-bg rounded-3xl shadow-lg border border-brand-bg/20 h-full">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full aspect-[4016/6378] object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="p-6 bg-brand-alternate border-t border-brand-bg/10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary/80">{item.title}</h4>
                </div>
              </div>
            </IntersectionWrapper>
          ))}
        </div>

        {/* Row 3: COVER PAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="flex flex-col gap-10">
            <IntersectionWrapper>
              <div className="relative group overflow-hidden bg-brand-bg rounded-3xl shadow-lg border border-brand-bg/20 z-10">
                <img 
                  src={CAMPUS_ORGANIZATION_LAYOUT.row3[0].imageUrl} 
                  alt="Cover Majalah" 
                  className="w-full aspect-[1755/1235] object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="p-8 bg-brand-alternate border-t border-brand-bg/10">
                  <h4 className="text-lg font-bold text-brand-primary uppercase tracking-tight">COVER MAJALAH</h4>
                </div>
              </div>
            </IntersectionWrapper>

            <div className="w-screen relative -left-6 md:left-0 md:w-full overflow-hidden py-4 z-0">
              <div className="flex animate-marquee-campus-reverse whitespace-nowrap items-center">
                <div className="flex items-center border-y-4 border-brand-accent py-4">
                  <span className="text-3xl md:text-6xl font-anton text-brand-accent uppercase tracking-tight mr-8">
                    {coverMarquee.repeat(10)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <IntersectionWrapper>
            <div className="relative group overflow-hidden bg-brand-bg rounded-3xl shadow-lg border border-brand-bg/20 h-full">
              <img 
                src={CAMPUS_ORGANIZATION_LAYOUT.row3[1].imageUrl} 
                alt="Tim Pembuat" 
                className="w-full aspect-[875/1241] object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="p-8 bg-brand-alternate border-t border-brand-bg/10">
                <h4 className="text-lg font-bold text-brand-primary uppercase tracking-tight">TIM PEMBUAT</h4>
              </div>
            </div>
          </IntersectionWrapper>
        </div>
      </div>
    </section>
  );
};
