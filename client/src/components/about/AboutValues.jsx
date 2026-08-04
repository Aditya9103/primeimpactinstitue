import React from 'react';
import { Award, ShieldCheck, Rocket, GraduationCap, Users } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: "Excellence",
      desc: "We strive for the highest standards in everything we do."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-yellow" />,
      title: "Integrity",
      desc: "We believe in transparency, honesty, and ethical practices."
    },
    {
      icon: <Rocket className="w-8 h-8 text-brand-yellow" />,
      title: "Innovation",
      desc: "We stay ahead by embracing change and encouraging creativity."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-yellow" />,
      title: "Student Success",
      desc: "Your growth and success are at the heart of our mission."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-yellow" />,
      title: "Community",
      desc: "We build a supportive community that learns and grows together."
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
      
      <h3 className="text-brand-yellow font-bold text-sm tracking-[0.2em] uppercase mb-4">
        Our Values
      </h3>
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mb-16 drop-shadow-md">
        What Drives Us Every Day
      </h2>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {values.map((value, i) => (
          <div 
            key={i} 
            className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-start text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-yellow/30 hover:bg-[#161a23]/90 hover:-translate-y-2 transition-all duration-300 min-h-[220px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(248,180,23,0.15)] group-hover:scale-110 transition-transform">
              {value.icon}
            </div>
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-brand-yellow transition-colors">
              {value.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
