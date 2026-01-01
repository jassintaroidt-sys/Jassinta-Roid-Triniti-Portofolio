
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', className = "" }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm uppercase tracking-widest";
  const variants = {
    primary: "bg-brand-accent text-white hover:shadow-lg",
    outline: "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};
