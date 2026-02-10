import React from 'react';

// Brand SVGs - Standardized to Mono
const LOGOS = [
  {
    name: 'Make',
    // Make (Integromat) Logo - roughly approximated as the "M"
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8">
        <path d="M3 3h4.5v12h-4.5zM9.75 3h4.5v9h-4.5zM16.5 3h4.5v6h-4.5z" transform="rotate(45 12 12) scale(0.6)" />
        {/* Note: The actual Make logo is complex, using a text fallback for now if path is unsure, but sticking to "Make" shape */}
        <text x="50%" y="75%" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="sans-serif">make</text>
      </svg>
    ),
  },
  {
    name: 'Voiceflow',
    svg: (
      <svg viewBox="0 0 120 24" fill="currentColor" className="w-32 h-8">
        {/* Icon */}
        <path d="M12 0L0 24h24L12 0z" transform="translate(0 2) scale(0.8)" />
        {/* Text */}
        <text x="35" y="20" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Voiceflow</text>
      </svg>
    )
  },
  {
    name: 'n8n',
    svg: (
      <svg viewBox="0 0 80 24" fill="currentColor" className="w-20 h-8">
        <path d="M10 4a4 4 0 100 8 4 4 0 000-8zM10 14a6 6 0 110-12 6 6 0 010 12zM24 16h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z M20 18h-2v-2h2v2z" />
        <text x="35" y="19" fontSize="20" fontWeight="bold" fontFamily="sans-serif">n8n</text>
      </svg>
    )
  },
  {
    name: 'Supabase',
    svg: (
      <svg viewBox="0 0 140 30" fill="currentColor" className="w-36 h-8">
        {/* Bolt */}
        <path d="M10 0l-5 15h10l-5 15" stroke="currentColor" strokeWidth="2" fill="none" transform="scale(0.8) translate(5,2)" />
        <text x="30" y="22" fontSize="20" fontWeight="bold" fontFamily="sans-serif">supabase</text>
      </svg>
    )
  },
  {
    name: 'Lovable',
    svg: (
      <svg viewBox="0 0 120 24" fill="currentColor" className="w-32 h-8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" transform="scale(0.8) translate(5,0)" />
        <text x="35" y="19" fontSize="19" fontWeight="bold" fontFamily="sans-serif">Lovable</text>
      </svg>
    )
  }
];

export const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full py-16 bg-white/50 backdrop-blur-sm border-y border-gray-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="inline-block text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50">
          WE INTEGRATE APPS LIKE...
        </p>
      </div>

      {/* Container for the sliding mechanism */}
      <div className="relative flex overflow-x-hidden group">

        {/* Gradient Masks for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* First Loop */}
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-24 px-8 md:px-12">
          {LOGOS.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="group/logo relative transition-all duration-300 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 cursor-pointer"
              title={logo.name}
            >
              <div className="h-8 md:h-10 w-auto text-current fill-current">
                {logo.svg}
              </div>
            </div>
          ))}
        </div>

        {/* Second Loop (Duplicate for seamless scroll) */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 md:space-x-24 px-8 md:px-12">
          {LOGOS.map((logo, idx) => (
            <div
              key={`${logo.name}-duplicate-${idx}`}
              className="group/logo relative transition-all duration-300 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 cursor-pointer"
              title={logo.name}
            >
              <div className="h-8 md:h-10 w-auto text-current fill-current">
                {logo.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        
        /* Pause on hover */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};