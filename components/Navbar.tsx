import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-1 group">
           <div className="transform group-hover:rotate-12 transition-transform duration-300">
             <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
               <path d="M6.5 9.5C6.5 5.5 9.5 3.5 12 3.5C14.5 3.5 17.5 5.5 17.5 9.5C17.5 14.5 12 20.5 12 20.5C12 20.5 6.5 14.5 6.5 9.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M12 3.5C10.5 1.5 8 1.5 7 2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M12 3.5C13.5 1.5 16 1.5 17 2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="9.5" cy="9" r="1.2" fill="currentColor"/>
               <circle cx="14.5" cy="9" r="1.2" fill="currentColor"/>
               <circle cx="12" cy="13.5" r="1.2" fill="currentColor"/>
             </svg>
           </div>
           <span className="font-bold text-lg tracking-tight text-brand-black pt-1">redberri.ai</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-black hover:bg-black/5 px-4 py-2 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="primary" className="!py-2.5 !px-6 text-sm !bg-brand-red hover:!bg-red-600 border border-transparent shadow-none" onClick={() => window.location.href='#contact'}>
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-brand-black p-2">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};