import React from 'react';
import { Clock, Users, Compass } from 'lucide-react';

export default function ContactHero() {
  const badges = [
    {
      icon: (
        <svg className="w-5 h-5 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Quick Response",
      desc: "We reply within 24 hours"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a5 5 0 0 1 5 5c0 4.5-5 9-5 9s-5-4.5-5-9a5 5 0 0 1 5-5z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="7" r="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Expert Guidance",
      desc: "Get help from our specialists"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Personalized Support",
      desc: "Tailored to your career goals"
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-25 pb-8 relative z-10 w-full overflow-hidden md:overflow-visible min-h-[400px] flex flex-col justify-center">

      {/* Globe Map Image on the Right */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-8 md:-right-16 lg:-right-24 w-full md:w-[60%] h-[400px] md:h-[600px] flex items-center justify-end pointer-events-none opacity-30 md:opacity-90 z-0">
        {/* Glow behind globe */}
        <div className="absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/15 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        <img src="/globe.png" alt="Global Network" className="w-full h-full object-contain object-right drop-shadow-[0_0_30px_rgba(248,180,23,0.15)]" />
      </div>

      <div className="text-left relative z-10 max-w-2xl">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-[#111317]/80 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(248,180,23,0.05)]">
          <div className="w-2 h-2 rotate-45 bg-brand-yellow shadow-[0_0_8px_rgba(248,180,23,0.8)]"></div>
          <span className="text-brand-yellow font-bold text-[10px] tracking-[0.15em] uppercase">
            We'd Love To Hear From You
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[38px] md:text-5xl lg:text-[52px] font-extrabold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-md">
          Let's Connect & <br />
          <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.2)]">Build Your Future Together</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-[15px] md:text-[16px] max-w-lg leading-relaxed mb-12 drop-shadow-sm font-medium">
          Have questions about our courses, placements, or admissions? Reach out to us and our team will get back to you shortly.
        </p>

        {/* Badges Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#111317] border border-brand-yellow/30 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_10px_rgba(248,180,23,0.1)] flex-shrink-0 text-brand-yellow">
                {badge.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-[13px] leading-tight mb-0.5 drop-shadow-sm">{badge.title}</span>
                <span className="text-gray-400 text-[11px]">{badge.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
