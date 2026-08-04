import React from 'react';
import { MonitorPlay, Briefcase, Share2, BadgeCheck } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    { icon: <MonitorPlay />, title: "Live Interactive Classes", desc: "Learn from industry experts" },
    { icon: <Briefcase />, title: "Real-World Projects", desc: "Build projects that matter" },
    { icon: <Share2 />, title: "Latest Tools & Techniques", desc: "Stay ahead of the industry" },
    { icon: <BadgeCheck />, title: "Certificate of Completion", desc: "Boost your career credibility" },
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto py-12 bg-transparent relative z-10">
      <div className="border border-brand-yellow/20 rounded-xl bg-[#04060a]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(248,180,23,0.03)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 py-6 px-8 hover:bg-white/[0.02] transition-colors group border-gray-800/60
                ${i === 0 ? 'border-b md:border-r lg:border-b-0' : ''}
                ${i === 1 ? 'border-b lg:border-r lg:border-b-0' : ''}
                ${i === 2 ? 'border-b md:border-b-0 md:border-r' : ''}
              `}
            >
              <div className="w-11 h-11 rounded-full bg-[#0a0c10] border border-brand-yellow/30 shadow-[0_0_15px_rgba(248,180,23,0.1)] flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(f.icon, { className: "w-5 h-5", strokeWidth: 2 })}
              </div>
              <div>
                <h4 className="font-bold text-[14px] text-white mb-0.5 tracking-tight">{f.title} </h4>
                <p className="text-[12px] text-white tracking-tight">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
