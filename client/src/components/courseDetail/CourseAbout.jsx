import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CourseAbout({ about }) {
  if (!about) return null;

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold mb-3 tracking-widest uppercase">
        ABOUT THE COURSE
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
        {about.title}
      </h2>
      
      <p className="text-white font-medium text-[15px] mb-8 leading-relaxed">
        {about.description}
      </p>

      {/* Features Checklist */}
      <div className="flex flex-col gap-4 mb-10">
        {about.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
            <span className="text-white font-medium text-sm md:text-[15px]">{feature}</span>
          </div>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {about.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-[#111317]/50 border border-gray-800 p-5 rounded-xl flex flex-col items-center text-center justify-center transition-colors hover:border-brand-yellow/30">
            <span className="text-brand-yellow font-bold text-xl mb-1">{highlight.title}</span>
            <span className="text-white text-xs font-medium uppercase tracking-wider whitespace-pre-line">
              {highlight.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
