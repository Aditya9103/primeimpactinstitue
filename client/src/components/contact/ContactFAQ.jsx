import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Enrolling is easy! Just browse to your desired course page, click 'Enroll Now', and follow the simple registration steps. Our admissions team will guide you through the rest of the process."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer flexible hybrid and fully online options for most of our courses, so you can learn from anywhere at your own pace."
    },
    {
      question: "What is the course duration?",
      answer: "Course duration varies from 3 months for specialized modules to 6 months for the comprehensive Master Course. You can find detailed timelines on each specific course page."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Absolutely. We have a dedicated placement cell that helps with resume building, mock interviews, and connecting you directly with our 150+ hiring partners."
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-10">
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
        <a href="#" className="text-brand-yellow text-sm font-semibold hover:underline flex items-center gap-1">
          View All FAQs <span className="text-lg">›</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`bg-[#0a0e17] border ${isOpen ? 'border-brand-yellow/50 shadow-[0_0_15px_rgba(248,180,23,0.15)]' : 'border-gray-800/80'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="p-5 flex items-center justify-between gap-4">
                <h3 className={`font-bold text-[14px] ${isOpen ? 'text-brand-yellow' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-yellow text-black' : 'bg-[#111317] text-brand-yellow border border-brand-yellow/30'}`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-[13px] leading-relaxed border-t border-gray-800 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
