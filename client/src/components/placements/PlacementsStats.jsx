import React from 'react';
import { Users, Briefcase, Trophy, Star } from 'lucide-react';

export default function PlacementsStats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-brand-yellow" />,
      title: "5000+",
      subtitle: "Students Placed",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-yellow" />,
      title: "100+",
      subtitle: "Hiring Partners",
    },
    {
      icon: <Trophy className="w-6 h-6 text-brand-yellow" />,
      title: "95%",
      subtitle: "Placement Rate",
    },
    {
      icon: <Star className="w-6 h-6 text-brand-yellow" />,
      title: "10+",
      subtitle: "Years of Excellence",
    },
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full">
      <div className="bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-800">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i > 0 ? 'md:pl-8' : ''}`}>
              <div className="w-14 h-14 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-4 shadow-[inset_0_0_15px_rgba(248,180,23,0.1)]">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 drop-shadow-md">{stat.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
