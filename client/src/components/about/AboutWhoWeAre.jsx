import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutWhoWeAre() {
  const navigate = useNavigate();

  const features = [
    "Industry-focused curriculum",
    "Practical learning with live projects",
    "100% placement assistance",
    "Learn from industry experts",
    "Flexible learning options"
  ];

  return (
    <div id="who-we-are" className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col text-left">
        <h3 className="text-brand-yellow font-bold text-sm tracking-[0.2em] uppercase mb-4">
          Who We Are
        </h3>
        
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight mb-6 text-white drop-shadow-md tracking-tight">
          India's Trusted Digital Marketing Training Institute
        </h2>
        
        <p className="text-gray-400 text-[15px] md:text-base leading-relaxed mb-8">
          Prime Impact is a leading digital marketing institute committed to providing industry-relevant training and 100% placement assistance. Our mission is to equip students with the right skills, mindset, and confidence to excel in the digital world.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 drop-shadow-[0_0_10px_rgba(248,180,23,0.5)]" />
              <span className="text-gray-200 font-medium text-[15px]">{feature}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate('/book-demo')}
          className="border border-gray-700 hover:border-brand-yellow text-white font-bold px-8 py-3.5 rounded-lg transition-colors self-start flex items-center gap-3 text-[15px] group bg-[#111317]/80 backdrop-blur-sm"
        >
          Book Free Demo Class <div className="bg-brand-yellow rounded-full p-1 group-hover:scale-110 transition-transform"><ArrowRight className="w-4 h-4 fill-black text-black" /></div>
        </button>
      </div>

      {/* Right Content / Image Grid */}
      <div className="w-full lg:w-1/2 relative flex flex-col gap-4">
        {/* Glow behind images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* Large Image (Top row) */}
        <div className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
          <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src="/classroomimage.png" 
            alt="Prime Impact Classroom"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Small Images (Bottom row divided in two) */}
        <div className="w-full h-[180px] lg:h-[200px] flex gap-4">
          <div className="w-1/2 h-full rounded-2xl overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
            <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Students learning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-1/2 h-full rounded-2xl overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
            <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Practical session"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
