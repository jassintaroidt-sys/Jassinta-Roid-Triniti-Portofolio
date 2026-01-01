
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { FEATURED_WORK } from '../constants';
import { LazyVideo } from '../components/LazyVideo';

export const FeaturedWork: React.FC = () => {
  return (
    <section id="featured-work" className="py-24 bg-brand-alternate scroll-mt-24">
      <div className="container mx-auto px-6">
        <IntersectionWrapper className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary uppercase tracking-tight">Featured Work</h2>
          <h3 className="text-lg text-brand-secondary font-medium max-w-2xl mx-auto opacity-80">
            Selected Projects That Represent My Strongest And Most Impactful Work.
          </h3>
        </IntersectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURED_WORK.map((item, idx) => (
            <IntersectionWrapper key={item.id} className={`delay-[${idx * 100}ms]`}>
              <div className="group relative overflow-hidden bg-brand-bg rounded-2xl shadow-sm cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl">
                <div 
                  className="w-full overflow-hidden bg-gray-100"
                  style={{ aspectRatio: item.aspectRatio || '1/1' }}
                >
                  {item.type === 'video' ? (
  <LazyVideo 
    src={item.videoUrl!} 
    className="transition-transform duration-500 group-hover:scale-105"
  />
) : (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-8 bg-brand-alternate border-t border-brand-bg/20">
                  <h4 className="text-lg font-bold text-brand-primary mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[10px] text-brand-secondary uppercase tracking-[0.3em] font-black opacity-60">{item.subtitle}</p>
                </div>
              </div>
            </IntersectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
