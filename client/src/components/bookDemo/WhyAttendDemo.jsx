import React from 'react';
import { MonitorPlay, Users, BookOpen, Compass, MessageSquare } from 'lucide-react';

export default function WhyAttendDemo() {
  const reasons = [
    {
      icon: <MonitorPlay className="w-6 h-6 text-brand-yellow" />,
      title: "Experience Live Class",
      desc: "Attend a real class and experience our teaching style."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-yellow" />,
      title: "Meet Our Trainers",
      desc: "Interact with industry experts and ask your questions."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brand-yellow" />,
      title: "Understand Courses",
      desc: "Know the curriculum, tools & career opportunities."
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-yellow" />,
      title: "Career Guidance",
      desc: "Get personalized guidance for your career path."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-yellow" />,
      title: "Doubt Clearing",
      desc: "Clear all your doubts before you enroll."
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10">
      <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/30 rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.08),inset_0_-3px_10px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-yellow/10 blur-[80px] pointer-events-none"></div>

        <h2 className="text-center text-3xl font-extrabold text-white mb-12 tracking-tight relative z-10">
          Why Attend a <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.3)]">Demo Class?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#05070a] border border-gray-800/80 flex items-center justify-center mb-5 relative shadow-[inset_0_3px_6px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.5)] group-hover:border-brand-yellow/50 group-hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.6),0_5px_20px_rgba(248,180,23,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                {/* Decorative dots in corners of icon container */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-yellow/40 group-hover:bg-brand-yellow transition-colors"></div>
                <div className="absolute bottom-2 left-1.5 w-1 h-1 rounded-full bg-brand-yellow/60 group-hover:bg-brand-yellow transition-colors"></div>
              </div>
              
              {/* Text */}
              <h4 className="font-bold text-white drop-shadow-sm text-[15px] mb-2 group-hover:text-brand-yellow transition-colors">{reason.title}</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-[13px] leading-relaxed max-w-[200px]">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
