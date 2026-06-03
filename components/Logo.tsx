import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", color = "currentColor" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Square rotated */}
      <rect 
        x="50" y="7.5" width="60" height="60" 
        transform="rotate(45 50 7.5)" 
        stroke={color} 
        strokeWidth="1.5" 
        fill="transparent"
      />
      {/* Inner Square */}
      <rect 
        x="29" y="29" width="42" height="42" 
        stroke={color} 
        strokeWidth="1.5" 
        fill="transparent"
      />
      {/* Center Point */}
      <circle cx="50" cy="50" r="1.5" fill={color} />
    </svg>
  );
};

export default Logo;