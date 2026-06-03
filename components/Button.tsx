import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'glass';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "uppercase tracking-[0.2em] text-xs font-medium py-4 px-8 transition-all duration-500 ease-out border backdrop-blur-sm";
  
  const variants = {
    primary: "bg-neutral-100 text-neutral-900 border-neutral-100 hover:bg-transparent hover:text-neutral-100",
    outline: "bg-transparent text-neutral-300 border-neutral-700 hover:border-neutral-300 hover:text-white",
    glass: "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black hover:border-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;