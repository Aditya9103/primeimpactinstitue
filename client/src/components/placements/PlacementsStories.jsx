import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlacementsStories() {
  // Using generic unsplash professional portraits as placeholders for students
  const stories = [
    {
      name: "Rohit Sharma",
      role: "SEO Executive",
      company: "Deloitte",
      package: "₹6 LPA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sneha Verma",
      role: "Digital Marketer",
      company: "WPP",
      package: "₹5 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Aman Raj",
      role: "PPC Specialist",
      company: "Amazon",
      package: "₹7.5 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Kavya Singh",
      role: "Social Media Manager",
      company: "Meta",
      package: "₹6.5 LPA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <div id="placement-stories" className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-md">
        Placement Success Stories
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-12">
        Real students. Real companies. Real impact.
      </p>

      <div className="w-full relative flex items-center justify-center">
        {/* Navigation buttons - Hidden on mobile, visible on lg */}
        <button 
          onClick={prevSlide}
          className="hidden lg:flex absolute left-0 z-20 w-12 h-12 bg-[#111317]/80 hover:bg-brand-yellow hover:text-black text-white rounded-full items-center justify-center transition-colors border border-gray-700 shadow-lg -translate-x-1/2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className={`group bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-yellow/30 hover:-translate-y-2 transition-all duration-300 ${
                // Basic mobile carousel logic - hide non-active items on small screens
                i === activeIndex ? "flex" : "hidden md:flex"
              } flex-col`}
            >
              {/* Image Header */}
              <div className="w-full h-48 bg-gradient-to-t from-[#1a1f2c] to-[#0a0e17] flex items-end justify-center relative overflow-hidden pt-6">
                {/* Decorative background circle */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl"></div>
                
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-40 h-40 object-cover object-top rounded-t-full border-4 border-[#111317] drop-shadow-2xl z-10"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 text-left bg-gradient-to-b from-[#111317] to-[#0a0e17]">
                <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{story.role}</p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="font-bold text-white tracking-tight">{story.company}</span>
                  <span className="text-brand-yellow font-extrabold text-sm bg-brand-yellow/10 px-2 py-1 rounded-md">{story.package}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - Right */}
        <button 
          onClick={nextSlide}
          className="hidden lg:flex absolute right-0 z-20 w-12 h-12 bg-[#111317]/80 hover:bg-brand-yellow hover:text-black text-white rounded-full items-center justify-center transition-colors border border-gray-700 shadow-lg translate-x-1/2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Pagination Dots */}
      <div className="flex md:hidden gap-2 mt-8">
        {stories.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-brand-yellow w-6" : "bg-gray-700"}`}
          />
        ))}
      </div>

      <button className="mt-12 border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black px-8 py-3.5 rounded-full transition-colors text-sm font-bold flex items-center gap-2">
        View More Success Stories <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
