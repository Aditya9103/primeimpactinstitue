import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

export default function CoursesHero() {
  const badges = [
    { icon: <Shield className="w-6 h-6 lg:w-7 lg:h-7" />, title: "12+", subtitle: "Expert Courses" },
    { icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />, title: "5000+", subtitle: "Students Trained" },
    { icon: <Award className="w-6 h-6 lg:w-7 lg:h-7" />, title: "100%", subtitle: "Placement Support" },
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-18 pb-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col text-left">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-[#111317]/80 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(248,180,23,0.05)] self-start">
          <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(248,180,23,0.8)]"></div>
          <span className="text-brand-yellow font-bold text-[10px] tracking-[0.15em] uppercase">
            Our Courses
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[38px] md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-md">
          Explore. Learn. Excel.<br />
          <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.2)]">Your Journey</span> Starts Here.
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-[15px] md:text-[16px] max-w-lg leading-relaxed mb-10 drop-shadow-sm font-medium">
          Industry-focused courses designed to build real skills and help you achieve your career goals in digital marketing.
        </p>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-6 sm:gap-10">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-brand-yellow drop-shadow-[0_0_10px_rgba(248,180,23,0.2)]">
                {badge.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-extrabold text-[16px] lg:text-[18px] leading-tight">{badge.title}</span>
                <span className="text-gray-400 text-[11px] lg:text-[12px]">{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <img
          src="/coursehero1.png"
          alt="Digital Marketing Courses"
          className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />
      </div>

    </div>
  );
}
