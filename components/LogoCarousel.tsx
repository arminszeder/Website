import React from 'react';
import { LOGOS } from '../constants';

export const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-widest">Powering solutions with modern tech</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-12">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-12 px-12">
          {LOGOS.map((logo) => (
            <span key={`${logo}-duplicate`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};