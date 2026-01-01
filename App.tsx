
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { FeaturedWork } from './sections/FeaturedWork';
import { ContentCreator } from './sections/ContentCreator';
import { GraphicDesign } from './sections/GraphicDesign';
import { Experience } from './sections/Experience';
import { CampusProjects } from './sections/CampusProjects';
import { AboutMe } from './sections/AboutMe';
import { Contact } from './sections/Contact';

const App: React.FC = () => {
  return (
    <main className="w-full bg-brand-bg font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <ContentCreator />
      <GraphicDesign />
      <Experience />
      <CampusProjects />
      <AboutMe />
      <Contact />
    </main>
  );
};

export default App;
