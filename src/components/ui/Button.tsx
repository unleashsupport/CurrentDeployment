import React from 'react';
import { scrollToSection } from './ScrollToSection';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  scrollTo?: string;
  trackingId?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  scrollTo = 'contact',
  trackingId,
  onClick,
  ...props 
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
    
    if (trackingId) {
      console.log(`Button clicked: ${trackingId}`);
    }
    
    onClick?.(e);
  };

  const baseStyles = "relative rounded-full font-medium transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-lg hover:shadow-green-500/25",
    secondary: "border-2 border-white text-white hover:bg-white/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;