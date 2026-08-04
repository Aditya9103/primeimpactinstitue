import React from 'react';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full object-cover opacity-40 mix-blend-screen" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#f8b417" opacity="0.5" />
          </pattern>
          <linearGradient id="edgeFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="15%" stopColor="white" stopOpacity="0" />
            <stop offset="85%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.8" />
          </linearGradient>
          <mask id="dotMask">
            <rect x="0" y="0" width="1000" height="500" fill="url(#edgeFade)" />
          </mask>
        </defs>
        <rect x="0" y="0" width="1000" height="500" fill="url(#dotPattern)" mask="url(#dotMask)" />
        <g>
          {[...Array(35)].map((_, i) => (
            <path key={`wave1-${i}`} d={`M -200,${450 + i * 8} C ${200 + i * 15},${600 - i * 15} ${600 - i * 10},${50 + i * 12} 1200,${150 + i * 20}`} stroke="#f8b417" strokeWidth={0.5} fill="none" opacity={0.1 + (i * 0.015)} />
          ))}
          {[...Array(25)].map((_, i) => (
            <path key={`wave2-${i}`} d={`M -100,${200 + i * 12} C ${350 - i * 8},${400 + i * 5} ${550 + i * 12},${-50 + i * 10} 1100,${100 + i * 15}`} stroke="#f8b417" strokeWidth={0.3} fill="none" opacity={0.08 + (i * 0.012)} />
          ))}
          {[...Array(15)].map((_, i) => (
            <path key={`wave3-${i}`} d={`M -50,${350 + i * 20} C ${400},${350 - i * 20} ${700},${250 + i * 15} 1150,${350 - i * 10}`} stroke="#f8b417" strokeWidth={0.2} fill="none" opacity={0.05 + (i * 0.01)} />
          ))}
        </g>
      </svg>
    </div>
  );
}
