import React from 'react';
import { FileText, Mail, MonitorPlay, MessageCircle, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <FileText className="w-6 h-6 text-brand-yellow" />,
      title: "Fill The Form",
      desc: "Share your details and select your preferred date & time."
    },
    {
      num: "02",
      icon: <Mail className="w-6 h-6 text-brand-yellow" />,
      title: "Confirmation",
      desc: "Our team will confirm your booking via call or email."
    },
    {
      num: "03",
      icon: <MonitorPlay className="w-6 h-6 text-brand-yellow" />,
      title: "Join Demo Class",
      desc: "Attend the live demo session and experience our training."
    },
    {
      num: "04",
      icon: <MessageCircle className="w-6 h-6 text-brand-yellow" />,
      title: "Get Guidance",
      desc: "Talk to our experts and get all your queries resolved."
    },
    {
      num: "05",
      icon: <Rocket className="w-6 h-6 text-brand-yellow" />,
      title: "Start Your Journey",
      desc: "Choose the right course and start your career journey with us."
    }
  ];

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10">
      <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/30 rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.08),inset_0_-3px_10px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-yellow/10 blur-[80px] pointer-events-none"></div>

        <h2 className="text-center text-3xl font-extrabold text-white mb-16 tracking-tight relative z-10">
          How It <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.3)]">Works?</span>
        </h2>

        <div className="relative z-10">
          
          {/* Dashed Line */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-gray-700 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full border border-gray-700 bg-[#05070a] flex items-center justify-center text-white font-bold text-[14px] mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.5)] group-hover:border-brand-yellow/50 group-hover:text-brand-yellow group-hover:shadow-[0_0_15px_rgba(248,180,23,0.3)] transition-all duration-300 z-10">
                  {step.num}
                </div>
                
                {/* Icon */}
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Text */}
                <h4 className="text-white font-bold text-[15px] mb-2 group-hover:text-brand-yellow transition-colors">{step.title}</h4>
                <p className="text-gray-200 drop-shadow-sm group-hover:text-white transition-colors text-[13px] leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
