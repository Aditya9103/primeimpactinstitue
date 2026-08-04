import React from 'react';
import { Target, ShieldCheck, CalendarClock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { 
      icon: (
        <svg className="w-7 h-7 xl:w-8 xl:h-8" viewBox="0 0 24 24" fill="none" stroke="#f8b417" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8l2 2 4-4" />
          <path d="M20 12v8" />
          <path d="M18 20h4" />
        </svg>
      ), 
      title: "Industry Expert Trainers", 
      desc: "Learn from active\nmarketing professionals" 
    },
    { 
      icon: (
        <svg className="w-7 h-7 xl:w-8 xl:h-8" viewBox="0 0 24 24" fill="none" stroke="#f8b417" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 19a6 6 0 0 0-8 0" />
          <circle cx="10" cy="9" r="4" />
          <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
          <path d="M12 21h6" />
          <path d="M15 18h3" />
          <path d="M16 15h1" />
        </svg>
      ), 
      title: "Practical Learning", 
      desc: "Hands-on projects &\nreal-world case studies" 
    },
    { 
      icon: <ShieldCheck className="w-7 h-7 xl:w-8 xl:h-8" stroke="#f8b417" strokeWidth="1.2" />, 
      title: "100% Placement Support", 
      desc: "Resume, interview &\njob assistance" 
    },
    { 
      icon: (
        <svg className="w-7 h-7 xl:w-8 xl:h-8" viewBox="0 0 24 24" fill="none" stroke="#f8b417" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="12" cy="15" r="3" />
          <path d="M12 12v.01" />
          <path d="M12 18v.01" />
          <path d="M15 15h.01" />
          <path d="M9 15h.01" />
          <path d="M14.12 12.88l.01.01" />
          <path d="M9.88 17.12l.01.01" />
          <path d="M14.12 17.12l.01.01" />
          <path d="M9.88 12.88l.01.01" />
        </svg>
      ), 
      title: "Advanced Curriculum", 
      desc: "Updated with latest tools\n& industry trends" 
    },
    { 
      icon: <CalendarClock className="w-7 h-7 xl:w-8 xl:h-8" stroke="#f8b417" strokeWidth="1.2" />, 
      title: "Flexible Batches", 
      desc: "Weekday, weekend &\nonline classes available" 
    },
    { 
      icon: (
        <svg className="w-7 h-7 xl:w-8 xl:h-8" viewBox="0 0 24 24" fill="none" stroke="#f8b417" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h0M2 9.5h20" />
          <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          <path d="M9 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
      ), 
      title: "Lifetime Access", 
      desc: "Access to resources\neven after completion" 
    },
  ];

  return (
    <div className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="inline-flex items-center gap-2 text-brand-yellow text-[10px] font-bold mb-3 tracking-widest uppercase">
          <Target className="w-3.5 h-3.5" strokeWidth="2" />
          WHY CHOOSE PRIME IMPACT?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          We Don't Just Teach. <span className="text-brand-yellow">We Transform.</span>
        </h2>
      </div>
      
      <div className="border border-gray-800/80 rounded-xl overflow-hidden bg-[#0a0e17] py-4 lg:py-6 px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {reasons.map((r, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-start text-center p-4 xl:p-6 border-gray-800/80 hover:bg-white/[0.01] transition-colors
                ${i % 2 === 0 ? 'border-r' : 'border-r-0'}
                ${i < 4 ? 'border-b' : 'border-b-0'}
                
                ${i % 3 !== 2 ? 'md:border-r' : 'md:border-r-0'}
                ${i < 3 ? 'md:border-b' : 'md:border-b-0'}
                
                ${i < 5 ? 'lg:border-r' : 'lg:border-r-0'}
                lg:border-b-0
              `}
            >
              <div className="text-brand-yellow mb-4 drop-shadow-[0_0_8px_rgba(248,180,23,0.3)] hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <h4 className="font-bold text-white text-[12px] xl:text-[13px] mb-2 leading-snug">{r.title}</h4>
              <p className="text-gray-300 drop-shadow-sm text-[10px] xl:text-[11px] whitespace-pre-line leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
