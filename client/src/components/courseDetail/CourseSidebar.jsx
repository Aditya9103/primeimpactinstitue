import React from 'react';
import { ArrowRight, Download, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CourseSidebar({ course }) {
  const navigate = useNavigate();

  if (!course) return null;

  return (
    <div className="sticky top-28 bg-[#111317]/50 border border-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col backdrop-blur-md">
      
      {/* Mini Header */}
      <div className="inline-flex items-center gap-2 text-brand-yellow text-[10px] font-bold mb-3 tracking-widest uppercase">
        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(248,180,23,0.8)]"></div>
        {course.tag}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-6 whitespace-pre-line leading-tight">
        {course.title.replace('\n', ' ')}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {course.description}
      </p>

      {/* Mini Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {course.heroStats.map((stat, idx) => (
           <div key={idx} className="flex flex-col">
             <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">{stat.label}</span>
             <span className="text-gray-200 text-sm font-medium">{stat.value}</span>
           </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mb-6">
        <button 
          onClick={() => navigate('/book-demo')}
          className="w-full flex items-center justify-center gap-2 bg-brand-yellow text-black font-bold py-3.5 px-4 rounded hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(248,180,23,0.3)]"
        >
          Book Free Demo Class
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white font-bold py-3.5 px-4 rounded hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4" />
          Download Syllabus
        </button>
      </div>

      {/* Footer text */}
      <div className="flex flex-col items-center gap-3 pt-6 border-t border-gray-800">
        <div className="flex -space-x-2">
          {/* Avatar bubbles */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#111317] flex items-center justify-center z-10">
              <Users className="w-3.5 h-3.5 text-gray-500" />
            </div>
          ))}
        </div>
        <span className="text-gray-400 text-xs font-medium">Trusted by {course.statsRow[0]?.value || '5000+'} Students</span>
      </div>

    </div>
  );
}
