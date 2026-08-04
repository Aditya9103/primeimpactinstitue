import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PlacementsRecruiters() {
  const navigate = useNavigate();

  const recruiters = [
    { name: "Google", text: "Google", color: "hover:text-[#4285F4]" },
    { name: "Meta", text: "Meta", color: "hover:text-[#0668E1]" },
    { name: "Amazon", text: "amazon", color: "hover:text-[#FF9900]" },
    { name: "Deloitte", text: "Deloitte.", color: "hover:text-white" },
    { name: "HubSpot", text: "HubSpot", color: "hover:text-[#FF7A59]" },
    { name: "WPP", text: "WPP", color: "hover:text-white" },
    { name: "Accenture", text: "accenture", color: "hover:text-[#A100FF]" },
    { name: "IBM", text: "IBM", color: "hover:text-[#0530AD]" },
    { name: "Adobe", text: "Adobe", color: "hover:text-[#FF0000]" },
    { name: "Microsoft", text: "Microsoft", color: "hover:text-[#00A4EF]" },
    { name: "Oracle", text: "ORACLE", color: "hover:text-[#F80000]" },
    { name: "TCS", text: "tcs", color: "hover:text-[#0055A5]" },
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
