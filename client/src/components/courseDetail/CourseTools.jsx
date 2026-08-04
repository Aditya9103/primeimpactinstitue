import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export default function CourseTools({ tools }) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold mb-6 tracking-widest uppercase">
        TOOLS YOU WILL MASTER
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tools.map((tool, idx) => {
          // Find icon component in either Si or Fa
          const IconComponent = SiIcons[tool.icon] || FaIcons[tool.icon];
          
          return (
            <div 
              key={idx} 
              className="bg-[#111317]/50 border border-gray-800 p-4 rounded-xl flex items-center gap-3 transition-colors hover:bg-[#15181e] group cursor-default"
            >
              {IconComponent && (
                <IconComponent 
                  className="w-6 h-6 transition-transform group-hover:scale-110" 
                  style={{ color: tool.color }} 
                />
              )}
              <span className="text-gray-300 font-medium text-[15px] group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
