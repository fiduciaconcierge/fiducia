import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubItemClick = (path: string) => {
    setHoveredNav(null);
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
      <div className="max-w-[1800px] mx-auto px-6 py-8 flex justify-between items-start">
        {/* Brand Name */}
        <NavLink to="/" className="uppercase tracking-[0.3em] font-serif text-xl z-50 relative group">
          Fiducia
          <span className="block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out mt-1"></span>
        </NavLink>

        {/* Navigation */}
        <nav className="flex gap-12 text-xs tracking-[0.2em] uppercase font-light relative items-center">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `py-2 block opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`
                }
              >
                {item.label}
              </NavLink>

              {/* Dropdown for Membership */}
              <AnimatePresence>
                {item.subItems && hoveredNav === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-4 w-48 py-4 bg-[#0a0a0a] border border-neutral-800 backdrop-blur-md"
                  >
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleSubItemClick(sub.path)}
                        className="block w-full text-right px-6 py-3 text-[10px] tracking-[0.25em] text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors duration-300"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {/* CTA Button */}
          <Button 
            variant="glass" 
            onClick={() => navigate('/membership')}
            className="ml-8"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;