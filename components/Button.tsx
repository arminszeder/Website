import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-500/20",
    secondary: "bg-brand-black text-white hover:bg-gray-800",
    outline: "border border-brand-black/20 text-brand-black hover:border-brand-black hover:bg-brand-black/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};