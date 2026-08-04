import React from 'react';

export default function PlacementsProcess() {
  const steps = [
    {
      id: 1,
      title: "Skill Development",
      desc: "Industry-relevant training\nto build in-demand skills"
    },
    {
      id: 2,
      title: "Profile Building",
      desc: "Resume, LinkedIn & portfolio\nthat stand out"
    },
    {
      id: 3,
      title: "Mock Interviews",
      desc: "Personalized mock sessions\n& expert feedback"
    },
    {
      id: 4,
      title: "Recruiter Connect",
      desc: "Access to 100+ hiring\npartners"
    },
    {
      id: 5,
      title: "Placement Support",
      desc: "End-to-end support until\nyou get placed"
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-20 drop-shadow-md">
        Our Placement Process
      </h2>

      <div className="w-full relative flex flex-col lg:flex-row justify-between items-start">
        
        {/* Desktop Connector Line */}
        <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-800 via-brand-yellow/50 to-gray-800 z-0 border-t border-dashed border-gray-600"></div>

        {/* Mobile Connector Line */}
        <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[28px] w-[2px] bg-gradient-to-b from-gray-800 via-brand-yellow/50 to-gray-800 z-0 border-l border-dashed border-gray-600"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center w-full lg:w-1/5 mb-10 lg:mb-0 group">
            
            {/* Step Number Badge */}
            <div className="w-14 h-14 rounded-full bg-[#111317] border-[3px] border-gray-800 group-hover:border-brand-yellow flex items-center justify-center shrink-0 mr-6 lg:mr-0 lg:mb-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-colors duration-300 relative">
              <span className="text-brand-yellow font-black text-xl">{step.id}</span>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-brand-yellow/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step Content */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-brand-yellow transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm whitespace-pre-line leading-relaxed">{step.desc}</p>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  );
}
