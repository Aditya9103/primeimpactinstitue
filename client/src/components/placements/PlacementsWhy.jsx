import React from 'react';
import { Target, UserCheck, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function PlacementsWhy() {
  const reasons = [
    {
      icon: <Target className="w-6 h-6 text-brand-yellow drop-shadow-md" />,
      title: "100% Practical\n& Hands-on Training"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-yellow drop-shadow-md" />,
      title: "Industry Expert\nMentorship"
    },
    {
      icon: <Users className="w-6 h-6 text-brand-yellow drop-shadow-md" />,
      title: "Dedicated Placement\nTeam"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-yellow drop-shadow-md" />,
      title: "Strong Recruiter\nNetwork"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-yellow drop-shadow-md" />,
      title: "Interview Preparation\n& Soft Skills"
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16 drop-shadow-md max-w-2xl">
        Why Students Get Placed From Prime Impact?
      </h2>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {reasons.map((r, i) => (
          <div 
            key={i} 
            className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-yellow/30 hover:bg-[#161a23]/90 hover:-translate-y-2 transition-all duration-300 min-h-[160px]"
          >
            <div className="w-14 h-14 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(248,180,23,0.15)] group-hover:scale-110 transition-transform">
              {r.icon}
            </div>
            <h3 className="text-white font-bold text-sm md:text-[15px] group-hover:text-brand-yellow transition-colors whitespace-pre-line leading-snug">
              {r.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
