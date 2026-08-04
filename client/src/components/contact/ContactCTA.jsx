import React from 'react';
import { GraduationCap, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10 w-full">
      <div className="relative rounded-xl overflow-hidden p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-yellow/20 shadow-[0_0_30px_rgba(248,180,23,0.05)] bg-[#04060a]/80 backdrop-blur-sm">

        {/* Background Swooshes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 200">
            {/* Left wave bundle */}
            <path d="M -50,250 C 150,100 200,50 400,200" stroke="#f8b417" strokeWidth="0.5" fill="none" opacity="0.6" />
            <path d="M -50,220 C 120,80 230,70 400,230" stroke="#f8b417" strokeWidth="0.5" fill="none" opacity="0.4" />
            <path d="M -50,280 C 180,120 170,30 400,170" stroke="#f8b417" strokeWidth="0.3" fill="none" opacity="0.5" />
            <path d="M -50,190 C 90,60 260,90 400,260" stroke="#f8b417" strokeWidth="0.3" fill="none" opacity="0.3" />
            <path d="M -50,310 C 210,140 140,10 400,140" stroke="#f8b417" strokeWidth="0.2" fill="none" opacity="0.4" />

            {/* Right wave bundle */}
            <path d="M 600,0 C 750,150 850,200 1050,-50" stroke="#f8b417" strokeWidth="0.5" fill="none" opacity="0.6" />
            <path d="M 600,-30 C 780,120 820,220 1050,-20" stroke="#f8b417" strokeWidth="0.5" fill="none" opacity="0.4" />
            <path d="M 600,30 C 720,180 880,180 1050,-80" stroke="#f8b417" strokeWidth="0.3" fill="none" opacity="0.5" />
            <path d="M 600,-60 C 810,90 790,240 1050,10" stroke="#f8b417" strokeWidth="0.3" fill="none" opacity="0.3" />
            <path d="M 600,60 C 690,210 910,160 1050,-110" stroke="#f8b417" strokeWidth="0.2" fill="none" opacity="0.4" />
            <path d="M 600,-90 C 840,60 760,260 1050,40" stroke="#f8b417" strokeWidth="0.1" fill="none" opacity="0.5" />
            <path d="M 600,90 C 660,240 940,140 1050,-140" stroke="#f8b417" strokeWidth="0.1" fill="none" opacity="0.3" />
          </svg>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 blur-[80px] rounded-full"></div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 blur-[80px] rounded-full"></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 w-full md:w-auto">
          {/* Glowing Icon */}
          <div className="w-16 h-16 shrink-0 rounded-full bg-[#111317] flex items-center justify-center text-brand-yellow border border-brand-yellow shadow-[0_0_20px_rgba(248,180,23,0.25)] relative">
            <div className="absolute inset-0 rounded-full border border-brand-yellow/50 scale-110"></div>
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-[22px] text-white font-bold mb-1.5 tracking-tight">Still have questions?</h3>
            <p className="text-brand-yellow font-bold text-[18px]">We're here to help you succeed.</p>
            <p className="text-gray-400 text-[13px] mt-1">Talk to our career experts and take the first step toward your dream career.</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full md:w-auto mt-2 md:mt-0">
          <button
            onClick={() => navigate('/book-demo')}
            className="w-full sm:w-auto bg-gradient-to-r from-[#d99820] to-[#f4be47] hover:from-[#f4be47] hover:to-[#f4be47] text-black font-bold text-sm px-6 py-3.5 rounded-md transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(248,180,23,0.3)] hover:scale-[1.02]"
          >
            Book Free Demo Class <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto bg-[#080b11] border border-gray-700/80 hover:border-brand-yellow/50 text-gray-200 text-sm font-semibold px-6 py-3.5 rounded-md transition-all flex justify-center items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-brand-yellow" /> Contact Admissions
          </button>
        </div>

      </div>
    </div>
  );
}
