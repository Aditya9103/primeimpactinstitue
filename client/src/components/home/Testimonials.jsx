import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Star, Target, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Testimonials() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Add 5 testimonials to demonstrate the slider
  const testimonials = [
    {
      text: "The course content is top-notch and the support from mentors is amazing. I got placed as an SEO Executive within 2 months!",
      name: "Sneha Sharma",
      role: "SEO Executive ",
      img: ""
    },
    {
      text: "Practical learning and real-world projects helped me build confidence. Now I'm working as a Social Media Manager!",
      name: "Rohit Verma",
      role: "Social Media Manager ",
      img: ""
    },
    {
      text: "Best decision I made! The Google Ads course helped me grow my freelancing career to the next level.",
      name: "Priya Patel",
      role: "Freelance Marketer",
      img: ""
    },
    {
      text: "I was struggling to find a job, but the placement assistance here is genuine. Currently working at a top agency.",
      name: "Amit Kumar",
      role: "Digital Marketing Executive",
      img: ""
    },
    {
      text: "The mentor's real-world insights were invaluable. I learned more here in 3 months than I did in my entire degree.",
      name: "Neha Gupta",
      role: "Content Strategist",
      img: ""
    }
  ];

  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const handleScroll = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild;
      if (card) {
        const setWidth = (card.offsetWidth + 20) * testimonials.length;
        const { scrollLeft } = scrollRef.current;

        // Seamless infinite loop: jump instantly when reaching the duplicates
        if (scrollLeft >= setWidth * 2 - 10) {
          scrollRef.current.scrollLeft = scrollLeft - setWidth;
        } else if (scrollLeft <= 10) {
          scrollRef.current.scrollLeft = scrollLeft + setWidth;
        }
      }
    }
  };

  useEffect(() => {
    // Initial jump to the middle set so we can scroll infinitely in both directions
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild;
      if (card) {
        const setWidth = (card.offsetWidth + 20) * testimonials.length;
        scrollRef.current.scrollLeft = setWidth;
      }
    }

    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculate scroll amount based on 1 card width + gap
      const card = scrollRef.current.firstElementChild;
      if (card) {
        const scrollAmount = card.offsetWidth + 20; // 20px is gap-5
        scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Auto-slider effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-stretch">

        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 text-brand-yellow text-[10px] font-bold mb-4 tracking-widest uppercase">
            <Target className="w-3.5 h-3.5" strokeWidth="2" />
            STUDENT SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-[42px] font-bold leading-tight mb-4 tracking-tight">
            <span className="text-white block">Real Students.</span>
            <span className="text-brand-yellow block">Real Success.</span>
          </h2>
          <p className="text-gray-200 drop-shadow-sm text-[14px] leading-relaxed mb-8 max-w-sm">
            Hear from our students who turned their skills into successful careers.
          </p>
          <div>
            <button
              onClick={() => navigate('/placements')}
              className="border border-brand-yellow/50 hover:border-brand-yellow px-6 py-2.5 rounded-md transition-colors text-[13px] font-bold flex items-center gap-3 text-white group"
            >
              View All Testimonials <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Slider Wrapper */}
        <div className="w-full lg:w-[65%] flex flex-col items-center">

          {/* Slider Container */}
          <div
            className="relative flex items-center group/slider w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
          >

            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 -ml-4 lg:-ml-6 z-10 w-10 h-10 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center transition-all ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-gray-800 hover:border-brand-yellow hover:text-brand-yellow text-white shadow-lg'}`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Slider Track */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full py-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-full md:w-[calc(50%-10px)] xl:w-[calc(33.333%-14px)] bg-[#0a0e17] border border-gray-800 rounded-xl p-7 flex flex-col justify-between shadow-2xl hover:border-gray-700 transition-colors"
                >
                  <div>
                    <div className="flex gap-1 text-brand-yellow mb-5">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-[13px] text-gray-300 leading-relaxed mb-8">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {t.img ? (
                      <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full shadow-md object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full shadow-md bg-[#111] border border-brand-yellow/30 flex items-center justify-center text-brand-yellow font-bold text-[16px]">
                        <User size={20} />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h5 className="font-bold text-white text-[13px]">{t.name}</h5>
                      <p className="text-[11px] text-gray-300 drop-shadow-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 -mr-4 lg:-mr-6 z-10 w-10 h-10 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center transition-all ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-gray-800 hover:border-brand-yellow hover:text-brand-yellow text-white shadow-lg'}`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Decorative Dots (centered under slider) */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>

        </div>
      </div>

      {/* Add global style to hide scrollbar explicitly for webkit just in case */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
