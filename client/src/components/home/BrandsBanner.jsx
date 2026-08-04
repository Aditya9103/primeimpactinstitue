import React from 'react';

const BrandContent = () => (
  <div className="flex items-center gap-10 md:gap-16 px-8">
    {/* Google */}
    <span className="text-xl font-bold font-sans tracking-tighter shrink-0">Google</span>
    
    {/* Meta */}
    <div className="flex items-center gap-1.5 shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-8C8.686 4 6 6.686 6 10s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm8.125 5c-1.353 0-2.45-1.097-2.45-2.45S18.772 4.1 20.125 4.1s2.45 1.097 2.45 2.45-1.097 2.45-2.45 2.45zm-16.25 0c-1.353 0-2.45-1.097-2.45-2.45S2.522 4.1 3.875 4.1s2.45 1.097 2.45 2.45S5.228 9 3.875 9z" />
      </svg>
      <span className="text-xl font-semibold tracking-tight">Meta</span>
    </div>

    {/* Amazon */}
    <div className="flex flex-col relative mt-1 shrink-0">
      <span className="text-[22px] font-bold tracking-tighter leading-none">amazon</span>
      <svg className="w-[50px] h-3 absolute -bottom-2 left-1 text-white" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <path d="M 5 5 Q 50 25 95 5" />
        <path d="M 85 -5 L 95 5 L 85 15" strokeLinejoin="round" />
      </svg>
    </div>

    {/* Microsoft */}
    <div className="flex items-center gap-2 shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="9" height="9" />
        <rect x="13" y="2" width="9" height="9" />
        <rect x="2" y="13" width="9" height="9" />
        <rect x="13" y="13" width="9" height="9" />
      </svg>
      <span className="text-[19px] font-semibold tracking-tight">Microsoft</span>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center shrink-0">
      <span className="text-[20px] font-bold tracking-tight mr-1">Linked</span>
      <div className="bg-gray-300 text-black text-xs font-bold px-1 rounded-sm">in</div>
    </div>

    {/* HubSpot */}
    <div className="flex items-center gap-1 shrink-0">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9V4" />
        <path d="M12 15v5" />
        <path d="M14.5 10.5l4-3" />
        <path d="M9.5 13.5l-4 3" />
        <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="19.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="4.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      <span className="text-[20px] font-bold tracking-tight">HubSpot</span>
    </div>
    
    {/* Flipkart */}
    <div className="flex items-center gap-1 shrink-0">
      <span className="text-[19px] font-bold italic tracking-tight">Flipkart</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2L4 8l1 1v11h14V9l1-1-2-6H6zm10 2l1 3H7l1-3h8z" />
      </svg>
    </div>

    {/* Zomato */}
    <span className="text-[22px] font-black italic tracking-tighter shrink-0">zomato</span>
  </div>
);

export default function BrandsBanner() {
  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto py-12 bg-transparent relative z-10">
      <div className="border border-gray-800/80 rounded-xl py-6 opacity-80 hover:opacity-100 transition-opacity bg-[#0a0e17]/80 backdrop-blur-sm shadow-xl overflow-hidden flex flex-col md:flex-row items-center text-gray-300 group relative">
        
        {/* Fixed Title (Top on mobile, Left on desktop) */}
        <div className="flex w-full md:w-auto justify-center md:justify-start px-8 pb-4 md:pb-0 bg-[#0a0e17] z-10 shrink-0 border-b md:border-b-0 md:border-r border-gray-800/50 relative md:shadow-[10px_0_15px_-5px_rgba(10,14,23,1)]">
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-yellow">
            Trusted by leading brands
          </span>
        </div>
        
        {/* Sliding Marquee Track for Logos */}
        <div className="flex flex-1 w-full overflow-hidden whitespace-nowrap pt-2 md:pt-0">
          {/* First Marquee Track */}
          <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
            <BrandContent />
          </div>
          
          {/* Second Duplicate Marquee Track for Seamless Loop */}
          <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
            <BrandContent />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
