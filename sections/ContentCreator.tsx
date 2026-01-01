
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { CONTENT_VIDEOS } from '../constants';
import { LazyVideo } from '../components/LazyVideo';

export const ContentCreator: React.FC = () => {
  const categories = [
    { key: 'travel', label: 'Tour & Travel' },
    { key: 'beauty', label: 'Beauty' },
    { key: 'culinary', label: 'Culinary' }
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <IntersectionWrapper className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary uppercase tracking-tighter">Content Creator & Video Editor</h2>
        </IntersectionWrapper>

        {categories.map((cat) => (
          <div key={cat.key} className="mb-24 last:mb-0">
            <IntersectionWrapper className="mb-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-brand-accent/20"></div>
              <h3 className="text-xl font-black uppercase tracking-[0.4em] text-brand-primary">{cat.label}</h3>
              <div className="h-px flex-1 bg-brand-accent/20"></div>
            </IntersectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {CONTENT_VIDEOS[cat.key as keyof typeof CONTENT_VIDEOS].map((video) => (
                <IntersectionWrapper key={video.id}>
                  <div className="relative aspect-[1080/1920] bg-brand-alternate overflow-hidden rounded-3xl shadow-xl group transition-all duration-500 hover:scale-[1.02]">
                    <LazyVideo src={video.videoUrl} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <a 
                        href={video.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white font-black uppercase tracking-[0.2em] hover:text-brand-accent transition-colors flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-[11px]"
                      >
                        see more here <span>→</span>
                      </a>
                    </div>
                  </div>
                </IntersectionWrapper>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
