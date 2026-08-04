import React from 'react';

export default function CourseStatsRow({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="w-full max-w-5xl flex flex-wrap justify-between items-center bg-[#111317]/50 border border-gray-800/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl divide-x divide-gray-800/60 gap-y-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`flex flex-col items-center justify-center flex-1 min-w-[120px] px-4`}>
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-yellow mb-2">{stat.value}</span>
            <span className="text-gray-400 text-[11px] sm:text-xs font-medium tracking-wide uppercase text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
