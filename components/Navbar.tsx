import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl glass-nav rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 shadow-lg shadow-black/5">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="/logo.svg" alt="redberri.ai logo" className="h-10 w-auto" />
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-black pt-1">redberri.ai</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const id = item.href.replace('#', '');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-gray-600 hover:text-brand-black hover:bg-black/5 px-4 py-2 rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="primary"
            className="!py-2.5 !px-6 text-sm !bg-brand-red hover:!bg-red-600 border border-transparent shadow-none"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
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