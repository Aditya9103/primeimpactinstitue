import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesBanner from '../components/home/FeaturesBanner';
import PopularCourses from '../components/home/PopularCourses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import BrandsBanner from '../components/home/BrandsBanner';
import BrandsAndCTA from '../components/home/BrandsAndCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesBanner />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />
      <BrandsBanner />
      <BrandsAndCTA />
    </>
  );
}
