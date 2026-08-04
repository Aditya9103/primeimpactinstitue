import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';

export default function CourseCurriculum({ curriculum }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!curriculum || curriculum.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold mb-3 tracking-widest uppercase">
        WHAT YOU WILL LEARN
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          Course Curriculum
        </h2>
        
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-brand-yellow text-brand-yellow rounded hover:bg-brand-yellow/10 transition-colors text-sm font-bold w-fit">
          <FileText className="w-4 h-4" />
          Download Full Syllabus
        </button>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-3">
        {curriculum.map((module, idx) => (
          <div 
            key={idx} 
            className={`border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-[#111317]' : 'bg-transparent'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
            >
              <div className="flex items-start md:items-center gap-4 md:gap-6 pr-4">
                <span className="text-gray-500 font-mono text-sm md:text-base mt-0.5 md:mt-0">{module.module}</span>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                  <span className="text-white font-semibold text-[15px] md:text-base w-full md:w-64 shrink-0">{module.title}</span>
                  <span className="text-gray-400 text-sm hidden md:block">{module.description}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-gray-500 text-xs md:text-sm font-medium">{module.topics}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-yellow' : ''}`} />
              </div>
            </button>
            
            {/* Expanded Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 md:p-5 pt-0 pl-14 md:pl-20 border-t border-gray-800/50 mt-2">
                <p className="text-gray-400 text-sm md:hidden mb-4">{module.description}</p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm before:content-[''] before:w-1.5 before:h-1.5 before:bg-brand-yellow before:rounded-full">
                    Detailed topic breakdown goes here...
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm before:content-[''] before:w-1.5 before:h-1.5 before:bg-brand-yellow before:rounded-full">
                    Another detailed topic...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
