
import React from 'react';
import { IntersectionWrapper } from '../components/IntersectionObserver';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-brand-alternate scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <IntersectionWrapper className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-8 uppercase tracking-tighter">Let’s Work Together</h2>
          <h3 className="text-xl md:text-2xl text-brand-secondary font-medium max-w-2xl mx-auto opacity-70">
            Open for collaboration, freelance projects, professional opportunities.
          </h3>
        </IntersectionWrapper>

        <IntersectionWrapper className="flex flex-wrap justify-center gap-8 mb-32">
          <Button 
            label="Email Me" 
            className="px-12"
            onClick={() => window.open('mailto:jassintaroidt@gmail.com')} 
          />
          <Button 
            label="WhatsApp" 
            variant="outline" 
            className="px-12"
            onClick={() => window.open('https://wa.me/6281324366055')} 
          />
          <Button 
            label="LinkedIn" 
            variant="outline" 
            className="px-12"
            onClick={() => window.open('https://www.linkedin.com/in/jassinta-roid-triniti-74380327b/')} 
          />
          <Button 
            label="Instagram" 
            variant="outline" 
            className="px-12"
            onClick={() => window.open('https://www.instagram.com/digipolia/')} 
          />
        </IntersectionWrapper>

        {/* Social Feed Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <IntersectionWrapper className="aspect-[1080/2408] bg-brand-bg rounded-[2.5rem] overflow-hidden group shadow-2xl relative z-0">
            <img 
              src="/images/ss1_travel_tiktok.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="TikTok Beauty"
            />
          </IntersectionWrapper>
          <IntersectionWrapper className="aspect-[1080/2408] bg-brand-bg rounded-[2.5rem] overflow-hidden group shadow-2xl relative z-0">
            <img 
              src="/images/ss2_kecantikan_ig.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="TikTok Travel"
            />
          </IntersectionWrapper>
          <IntersectionWrapper className="aspect-[1080/2408] bg-brand-bg rounded-[2.5rem] overflow-hidden group shadow-2xl hidden md:block relative z-0">
            <img 
              src="/images/ss3_kecantikan_tiktok.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Instagram Feed"
            />
          </IntersectionWrapper>
        </div>
      </div>

      <footer className="mt-40 pt-16 border-t border-brand-bg/50 text-center text-brand-secondary text-[10px] font-black uppercase tracking-[0.5em] pb-10">
        <p>&copy; 2026 Jassinta Roid Triniti. Strategic Content. Editorial Design.</p>
      </footer>
    </section>
  );
};
