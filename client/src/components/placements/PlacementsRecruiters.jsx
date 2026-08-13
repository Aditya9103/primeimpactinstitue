import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacementsRecruiters() {
  const navigate = useNavigate();

  const recruiters = [
    { name: "Prime Time", text: "Prime Time", color: "hover:text-[#4285F4]" },
    { name: "Time Cyber Media", text: "Time Cyber Media", color: "hover:text-[#0668E1]" },
    { name: "PrimeImpact", text: "PrimeImpact", color: "hover:text-[#FF9900]" },
    { name: "TechNexus", text: "TechNexus", color: "hover:text-[#00E5FF]" },
    { name: "WebMobi", text: "WebMobi", color: "hover:text-[#FF3366]" },
    { name: "DigiSolutions", text: "DigiSolutions", color: "hover:text-white" },
    { name: "InvoTech", text: "InvoTech", color: "hover:text-[#00FF66]" },
    { name: "NextGen Media", text: "NextGen Media", color: "hover:text-[#9900FF]" },
    { name: "AppSierra", text: "AppSierra", color: "hover:text-[#FF0000]" },
    { name: "Skyline Digital", text: "Skyline Digital", color: "hover:text-[#00BFFF]" },
    { name: "Innovate Tech", text: "Innovate Tech", color: "hover:text-[#FFCC00]" },
    { name: "Creative Pixels", text: "Creative Pixels", color: "hover:text-[#33FF33]" },
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-md">
        Top Recruiters
      </h2>

      <div className="w-full bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-8 md:p-12 mb-12">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12 items-center opacity-80">
          {recruiters.map((recruiter, i) => (
            <div key={i} className={`text-2xl md:text-3xl font-black text-gray-500 tracking-tighter transition-colors duration-300 cursor-pointer ${recruiter.color}`}>
              {recruiter.text}
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => navigate('/contact')}
        className="border border-gray-700 hover:border-brand-yellow hover:text-brand-yellow px-8 py-3.5 rounded-full transition-colors text-sm font-semibold flex items-center gap-2 text-white"
      >
        View All Recruiters <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
