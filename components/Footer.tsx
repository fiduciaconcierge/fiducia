import React from 'react';
import Logo from './Logo';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-500 py-24 border-t border-neutral-900">
      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full space-y-8 md:space-y-0">
          <div>
            <Logo className="w-16 h-16 text-[#d4af37] mb-8" />
            <span className="uppercase tracking-[0.3em] text-sm text-neutral-300">Fiducia</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-200">
            &copy; 2026 Fiducia Global | All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row gap-16 md:justify-end">
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="uppercase text-xs tracking-[0.2em] text-neutral-300">Contact Us</h4>
            <div className="flex flex-col space-y-2 text-sm font-light font-serif text-neutral-400">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=private@fiduciagroup.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">private@fiduciagroup.in</a>
            </div>
          </div>

          {/* Socials */}
          {/*
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="uppercase text-xs tracking-[0.2em] text-neutral-300">Socials</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">
                <Linkedin strokeWidth={1} size={20} />
              </a>
            </div>
          </div>
          */}     
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;