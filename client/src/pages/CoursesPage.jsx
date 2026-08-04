import React, { useEffect } from 'react';
import CoursesHero from '../components/courses/CoursesHero';
import CoursesGrid from '../components/courses/CoursesGrid';
import CoursesWhyChoose from '../components/courses/CoursesWhyChoose';
import BookDemoCTA from '../components/bookDemo/BookDemoCTA';

export default function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative pt-15">
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12 pb-20">
        <CoursesHero />
        <CoursesGrid />
        <CoursesWhyChoose />
        <BookDemoCTA />
      </div>
    </div>
  );
}
