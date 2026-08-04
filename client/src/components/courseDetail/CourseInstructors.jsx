import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function CourseInstructors({ instructors }) {
  if (!instructors || instructors.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold mb-6 tracking-widest uppercase">
        MEET YOUR INSTRUCTORS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructors.map((instructor, idx) => (
          <div 
            key={idx} 
            className={`bg-[#111317]/50 border border-gray-800 p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-6 hover:border-gray-700 transition-colors ${
              instructors.length % 2 !== 0 && idx === instructors.length - 1 ? 'md:col-span-2' : ''
            }`}
          >
            {/* Avatar Placeholder */}
            <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/5 border border-brand-yellow/20 flex items-center justify-center">
              <span className="text-brand-yellow font-bold text-2xl">{instructor.name.charAt(0)}</span>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-lg">{instructor.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{instructor.role}</p>
              
              <div className="flex items-center gap-3 mb-4">
                <a href="#" className="text-gray-500 hover:text-[#0A66C2] transition-colors"><FaLinkedin className="w-4 h-4" /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaXTwitter className="w-4 h-4" /></a>
                <a href="#" className="text-gray-500 hover:text-[#E1306C] transition-colors"><FaInstagram className="w-4 h-4" /></a>
              </div>
              
              <p className="text-gray-400 text-[13px] leading-relaxed">
                {instructor.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
