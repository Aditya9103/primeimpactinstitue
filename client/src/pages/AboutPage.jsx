import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre';
import AboutValues from '../components/about/AboutValues';
import BookDemoCTA from '../components/bookDemo/BookDemoCTA';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative pt-10">
      <div className="relative z-10 flex flex-col gap-16 lg:gap-24 pb-20">
        <AboutHero />
        <AboutStats />
        <AboutWhoWeAre />
        <AboutValues />
        <BookDemoCTA />
      </div>
    </div>
  );
}
