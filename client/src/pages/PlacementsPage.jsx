import React, { useEffect } from 'react';
import PlacementsHero from '../components/placements/PlacementsHero';
import PlacementsStats from '../components/placements/PlacementsStats';
import PlacementsRecruiters from '../components/placements/PlacementsRecruiters';
import PlacementsStories from '../components/placements/PlacementsStories';
import PlacementsProcess from '../components/placements/PlacementsProcess';
import PlacementsWhy from '../components/placements/PlacementsWhy';
import BookDemoCTA from '../components/bookDemo/BookDemoCTA';

export default function PlacementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative pt-10">
      <div className="relative z-10 flex flex-col gap-16 lg:gap-24 pb-20">
        <PlacementsHero />
        <PlacementsStats />
        <PlacementsRecruiters />
        <PlacementsStories />
        <PlacementsProcess />
        <PlacementsWhy />
        <BookDemoCTA />
      </div>
    </div>
  );
}
