import React from 'react';
import { Play, ArrowRight, Users, ShieldCheck, Award, Star, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative pt-28 pb-12 lg:pt-20 lg:pb-10 lg:min-h-[calc(100vh-80px)] px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center font-sans overflow-hidden">

      {/* Seamless Global Background Environment */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 blur-[150px] rounded-full"></div>

        {/* Right ambient glow */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 blur-[120px] rounded-full"></div>

        {/* Glowing Floor Surface spanning the whole bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

        {/* Laptop Base Reflection */}
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[20px] bg-brand-yellow/30 blur-[25px] rounded-full"></div>

        {/* ROI Card Floor Reflection */}
        <div className="absolute bottom-[10%] right-[5%] w-[100px] h-[15px] bg-brand-yellow/50 blur-[20px] rounded-full"></div>
      </div>

      {/* Left Content Column */}
      <div className="w-full lg:w-[55%] xl:w-[60%] z-10 lg:pr-8 relative">
        {/* Top Badge - solid filled pill like the reference */}
        <div className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-brand-yellow mb-4 shadow-[0_4px_14px_rgba(248,180,23,0.25)]">
          <div className="w-4.5 h-4.5 rounded-full bg-black/15 flex items-center justify-center">
            <Star className="w-2.5 h-2.5 fill-black text-black" />
          </div>
          <span className="text-black text-[10px] font-bold uppercase tracking-widest">
            India's Leading Digital Marketing Institute
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] md:text-5xl lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] mb-3 tracking-tight text-white sm:whitespace-nowrap">
          Master Digital Skills<br />
          <span className="text-brand-yellow">Build Your Future.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-[20px] mb-6 max-w-xl leading-relaxed">
          <span className="text-white font-medium">Industry-focused training. Real-world projects. </span><br />

          <span className="text-white font-medium">100% Placement Support.</span>
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-start gap-6 md:gap-10 mb-8 max-w-[650px]">
          {/* Stat 1 - Expert Courses */}
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-brand-yellow flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-bold text-white text-[18px] md:text-[20px] leading-tight drop-shadow-md">12+</span>
              <span className="text-[12px] md:text-[13px] text-gray-200 drop-shadow-sm font-medium whitespace-nowrap">Expert Courses</span>
            </div>
          </div>

          {/* Stat 2 - Students Trained */}
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-brand-yellow flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-bold text-white text-[18px] md:text-[20px] leading-tight drop-shadow-md">5000+</span>
              <span className="text-[12px] md:text-[13px] text-gray-200 drop-shadow-sm font-medium whitespace-nowrap">Students Trained</span>
            </div>
          </div>

          {/* Stat 3 - Placement Support */}
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-yellow flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-bold text-white text-[18px] md:text-[20px] leading-tight drop-shadow-md">100%</span>
              <span className="text-[12px] md:text-[13px] text-gray-200 drop-shadow-sm font-medium whitespace-nowrap">Placement Support</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-5">
          <button
            onClick={() => navigate('/book-demo')}
            className="bg-brand-yellow hover:bg-yellow-400 text-black font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-2 text-[15px]"
          >
            Book Free Demo Class <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/courses')}
            className="bg-[#030303] border border-gray-700 hover:border-brand-yellow text-white font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-3 text-[15px] group"
          >
            Explore Courses <div className="bg-brand-yellow rounded-full p-1.5 group-hover:scale-110 transition-transform"><Play className="w-3.5 h-3.5 fill-black text-black translate-x-[1px]" /></div>
          </button>
        </div>

        {/* Trust Badge & Arrow */}
        <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-4 relative">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-[#030303] bg-gray-700 overflow-hidden shadow-sm relative z-10">
                <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="student" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-[14px] text-gray-200 font-medium drop-shadow-sm">Trusted by 5000+ students across India</p>

          {/* Hand-drawn arrow SVG pointing back up toward the buttons */}
          <div className="hidden xl:block absolute -right-10 -top-2">
            <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse opacity-80">
              <path d="M 4 30 Q 20 6 40 10 L 33 8 M 40 10 L 35 16" stroke="#f8b417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Content Column - Custom 3D UI composition */}
      <div className="w-full lg:w-[45%] xl:w-[40%] relative z-10 mt-10 lg:mt-0 flex justify-center items-center">

        <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center z-10 mt-10">

          {/* Main Laptop Body Replaced With Image */}
          <img
            src="/homeHero1.png"
            alt="Digital Marketing Dashboard"
            className="relative z-10 w-full max-w-[600px] xl:max-w-[700px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />

          {/* Floating Cards (Framer Motion) */}
          {/* Card 1: Google Ads */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-2 left-4 sm:-left-4 z-30 bg-[#111111]/40 backdrop-blur-xl border border-white/10 border-t-white/30 border-l-white/20 p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 w-[120px] sm:w-[140px]"
            style={{ transform: 'perspective(1000px) rotateY(15deg) rotateZ(-5deg)' }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
              {/* Google Ads Icon approximation */}
              <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                <path fill="#FABB05" d="M23.7 10.4L11.7.3c-.5-.4-1.3-.4-1.8.1L.3 10.3c-.4.5-.4 1.3.1 1.8l12 10.1c.5.4 1.3.4 1.8-.1l9.6-10.1c.4-.4.4-1.2-.1-1.6z" />
                <path fill="#4285F4" d="M12.6 1.1L23.7 10.4c.5.4.5 1.2.1 1.6l-9.6 10.1c-.5.5-1.3.5-1.8.1l-12-10.1c-.5-.4-.5-1.3-.1-1.8l9.6-10.1c.5-.5 1.3-.5 1.8-.1z" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-bold text-[9px] sm:text-[10px] leading-tight tracking-wide">Google Ads</span>
              <span className="text-[#4ade80] font-bold text-[10px] sm:text-[11px] flex items-center gap-0.5 drop-shadow-md"><ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 32.4%</span>
            </div>
          </motion.div>

          {/* Card 2: Meta Ads */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute top-4 right-4 sm:-right-2 z-30 bg-[#111111]/40 backdrop-blur-xl border border-white/10 border-t-white/30 border-r-white/20 p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 w-[110px] sm:w-[130px]"
            style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateZ(5deg)' }}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 bg-transparent">
              {/* Meta icon styling like in the image (just the blue gradient logo, not a circle bg) */}
              <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0668E1" />
                    <stop offset="100%" stopColor="#00c6ff" />
                  </linearGradient>
                </defs>
                <path fill="url(#metaGrad)" d="M22.56,9.52c-1-2-3-3.15-5.5-3.15a6.67,6.67,0,0,0-5.12,2.41A6.67,6.67,0,0,0,6.82,6.37C4.31,6.37,2.32,7.5,1.3,9.52a6.3,6.3,0,0,0,0,5.65c1,2,3,3.14,5.5,3.14a6.62,6.62,0,0,0,5.13-2.42,6.63,6.63,0,0,0,5.13,2.42c2.51,0,4.5-1.13,5.51-3.15A6.36,6.36,0,0,0,22.56,9.52ZM6.82,15.68c-1.2,0-2-.52-2.4-1.29a3.78,3.78,0,0,1,0-3.4c.41-.78,1.2-1.29,2.4-1.29a3.6,3.6,0,0,1,2.83,1.48L11.51,13A3.66,3.66,0,0,1,6.82,15.68Zm10.25,0a3.66,3.66,0,0,1-4.69-2.72l1.86-1.8a3.6,3.6,0,0,1,2.83-1.48c1.2,0,2,.51,2.41,1.29a3.79,3.79,0,0,1,0,3.4C19.06,15.16,18.26,15.68,17.07,15.68Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-bold text-[9px] sm:text-[10px] leading-tight tracking-wide">Meta Ads</span>
              <span className="text-[#4ade80] font-bold text-[10px] sm:text-[11px] flex items-center gap-0.5 drop-shadow-md"><ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 28.1%</span>
            </div>
          </motion.div>

          {/* Card 3: ROI */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-2 right-2 sm:-right-0 z-40 bg-[#111111]/50 backdrop-blur-2xl border border-brand-yellow/40 border-t-brand-yellow/60 p-2 sm:p-3.5 rounded-2xl shadow-[0_15px_40px_rgba(234,179,8,0.2)] flex flex-col items-start gap-0.5 min-w-[90px] sm:min-w-[110px]"
            style={{ transform: 'perspective(1000px) rotateY(-20deg) rotateZ(5deg)' }}
          >
            <span className="text-white font-bold text-[9px] sm:text-[11px] leading-tight tracking-wider">ROI</span>
            <span className="text-[#4ade80] font-bold text-[14px] sm:text-[18px] flex items-center gap-1 drop-shadow-md"><ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" /> 45.2%</span>
          </motion.div>

          {/* Decorative potted plant, bottom-right corner */}
          <div className="hidden lg:block absolute bottom-8 -right-16 z-0 opacity-90 pointer-events-none">
            <svg width="150" height="190" viewBox="0 0 150 190" fill="none">
              {/* Pot */}
              <path d="M45 150 L105 150 L98 190 L52 190 Z" fill="#1a1610" stroke="#3a2e1a" strokeWidth="1" />
              <rect x="42" y="142" width="66" height="12" rx="2" fill="#241d12" />
              {/* Leaves */}
              <path d="M75 145 C 60 110 40 90 20 80 C 45 75 65 90 75 120 Z" fill="#2e5b3e" opacity="0.9" />
              <path d="M75 145 C 90 100 115 75 140 65 C 120 55 90 70 78 105 Z" fill="#25522f" opacity="0.9" />
              <path d="M75 145 C 65 95 55 60 45 30 C 70 30 82 65 80 105 Z" fill="#3a6b48" opacity="0.9" />
              <path d="M75 145 C 85 90 95 55 105 25 C 82 28 68 62 72 100 Z" fill="#2a4f34" opacity="0.9" />
              <path d="M75 145 C 78 105 82 70 90 40 C 100 55 98 85 80 118 Z" fill="#f8b417" opacity="0.15" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}