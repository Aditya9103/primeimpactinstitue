import React, { useEffect } from 'react';
import DemoHero from '../components/bookDemo/DemoHero';
import WhyAttendDemo from '../components/bookDemo/WhyAttendDemo';
import HowItWorks from '../components/bookDemo/HowItWorks';
import BookDemoCTA from '../components/bookDemo/BookDemoCTA';

export default function BookDemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative pt-15">

      <div className="relative z-10 flex flex-col gap-10 lg:gap-12 pb-20">
        <DemoHero />
        <WhyAttendDemo />
        <HowItWorks />
        <BookDemoCTA />
      </div>
    </div>
  );
}
