import React from 'react';
import { MonitorPlay, Users, Target, Tag } from 'lucide-react';
import DemoForm from './DemoForm';

export default function DemoHero() {
  return (
    <div className="relative w-full bg-transparent pt-8">
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 pt-8">
            <div className="inline-flex items-center gap-2 text-brand-yellow text-[11px] font-bold mb-6 tracking-widest uppercase">
              <div className="w-2 h-2 bg-brand-yellow rotate-45"></div>
              FREE | NO OBLIGATION
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-tight mb-6 tracking-tight">
              Book Your<br />
              <span className="text-brand-yellow">Free Demo Class</span>
            </h1>

            <p className="text-gray-300 text-[16px] max-w-md leading-relaxed mb-12">
              Experience our live training session and discover how we can help you build a successful digital marketing career.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 pt-0.5">
                  <MonitorPlay className="w-8 h-8 text-brand-yellow" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">Live Interactive Session</h4>
                  <p className="text-gray-200 drop-shadow-sm text-[13px]">60-90 minutes</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 pt-0.5">
                  <Users className="w-8 h-8 text-brand-yellow" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">Learn From Experts</h4>
                  <p className="text-gray-200 drop-shadow-sm text-[13px]">Industry professionals</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 pt-0.5">
                  <Target className="w-8 h-8 text-brand-yellow" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">Career Guidance</h4>
                  <p className="text-gray-200 drop-shadow-sm text-[13px]">Get your doubts answered</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 pt-0.5">
                  <Tag className="w-8 h-8 text-brand-yellow" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">100% Free</h4>
                  <p className="text-gray-200 drop-shadow-sm text-[13px]">No hidden charges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2">
            <DemoForm />
          </div>

        </div>
      </div>
    </div>
  );
}
