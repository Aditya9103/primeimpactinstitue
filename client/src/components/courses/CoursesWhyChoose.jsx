import React from 'react';
import { Target, Users, Briefcase, Award, HeadphonesIcon, Globe2, Sparkles } from 'lucide-react';

export default function CoursesWhyChoose() {
  const reasons = [
    {
      icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Practical Learning",
      desc: "Hands-on training with real\ncampaigns & tools."
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Expert Trainers",
      desc: "Learn from industry experts\nwith 5+ years of experience."
    },
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Placement Focused",
      desc: "Resume preparation and\n100% placement support."
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Certification",
      desc: "Get recognized certificates\nupon course completion."
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Lifetime Support",
      desc: "Get lifetime access to course\nmaterial & support."
    },
    {
      icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-md" />,
      title: "Community Access",
      desc: "Join our exclusive student\ncommunity & network."
    }
  ];

  return (
    <div className="bg-transparent py-10 relative z-10 w-full overflow-hidden">
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-between">

        {/* Left Side: Content */}
        <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col relative z-20">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 mb-6 shadow-[0_4px_14px_rgba(248,180,23,0.1)]">
              <div className="w-4.5 h-4.5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-brand-yellow" />
              </div>
              <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">
                WHY CHOOSE OUR COURSES?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Learn. Practice. <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(248,180,23,0.3)]">Get Placed.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="group bg-[#111317]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-5 md:p-6 flex flex-col items-start gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#161a23]/90 hover:border-brand-yellow/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(248,180,23,0.1)]">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15px] md:text-[17px] mb-2 group-hover:text-brand-yellow transition-colors">{r.title}</h3>
                  <p className="text-gray-400 text-[12px] md:text-[13px] leading-relaxed whitespace-pre-line">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
            {/* Background Blob/Circle */}
            <div className="absolute inset-0 bg-brand-yellow/10 blur-[80px] rounded-full scale-[0.85] lg:scale-[0.9] origin-bottom mix-blend-screen pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none opacity-40"></div>

            {/* Main Image - Replace src with actual student image path when available */}
            <img
              src="/student-laptop.png"
              alt="Student learning"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] lg:w-[90%] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }}
            />

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-4 sm:bottom-16 sm:-left-8 z-30 bg-[#111317]/90 backdrop-blur-xl border border-gray-700 p-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center gap-4 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_15px_rgba(248,180,23,0.4)]">
                <Users className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg leading-tight">5000+</span>
                <span className="text-gray-400 text-xs font-medium">Students Trained</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
