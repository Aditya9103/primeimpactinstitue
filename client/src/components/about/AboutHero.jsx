import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-15 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col text-left">

        {/* Top Label */}
        <div className="inline-flex items-center gap-2 mb-6 bg-[#111317]/80 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(248,180,23,0.05)] self-start">
          <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(248,180,23,0.8)]"></div>
          <span className="text-brand-yellow font-bold text-[10px] tracking-[0.15em] uppercase">
            About Prime Impact
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[38px] md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-md">
          Empowering Careers. <br className="hidden md:block" />
          <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.2)]">Transforming Futures.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-[15px] md:text-[16px] max-w-lg leading-relaxed mb-10 drop-shadow-sm font-medium">
          At Prime Impact, we bridge the gap between learning and real-world success. Our industry-driven training, practical approach, and placement support help students achieve outstanding careers in digital marketing.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-5">
          <button
            onClick={() => {
              const element = document.getElementById("who-we-are");
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-brand-yellow hover:bg-yellow-400 text-black font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-2 text-[15px]"
          >
            Know More About Us <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/placements')}
            className="bg-[#030303] border border-gray-700 hover:border-brand-yellow text-white font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-3 text-[15px] group"
          >
            Our Placement Stories <div className="bg-brand-yellow rounded-full p-1.5 group-hover:scale-110 transition-transform"><ArrowRight className="w-3.5 h-3.5 fill-black text-black translate-x-[1px]" /></div>
          </button>
        </div>
      </div>

      {/* Right Content / Image */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="relative">
          <img
            src="/aboutushero.png"
            alt="Empowering Careers"
            className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#111317]/90 backdrop-blur-xl border border-gray-700 p-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center gap-4 animate-bounce-slow whitespace-nowrap">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center shadow-[inset_0_0_15px_rgba(248,180,23,0.2)]">
              <Users className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-xl leading-tight">5000+</span>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Students Transformed</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
