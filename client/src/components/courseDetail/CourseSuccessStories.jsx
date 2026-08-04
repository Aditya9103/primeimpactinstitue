import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function CourseSuccessStories({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold tracking-widest uppercase">
          STUDENT SUCCESS STORIES
        </div>
        <button className="text-gray-400 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors">
          See All Reviews &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-[#111317]/50 border border-gray-800 p-6 rounded-2xl flex flex-col relative">
            <Quote className="w-8 h-8 text-brand-yellow/20 absolute top-6 right-6" />
            
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6 flex-grow">
              "{testimonial.text}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              {/* Avatar Placeholder */}
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-sm">{testimonial.author.charAt(0)}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white text-[13px] font-bold">{testimonial.author}</span>
                <span className="text-gray-500 text-[11px]">{testimonial.role}</span>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < testimonial.rating ? 'fill-brand-yellow text-brand-yellow' : 'fill-gray-700 text-gray-700'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
