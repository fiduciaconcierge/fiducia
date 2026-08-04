import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubItemClick = (path: string) => {
    setHoveredNav(null);
    setIsOpen(false);
    navigate(path);
  };

  const handleMobileNav = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="max-w-[1800px] mx-auto px-6 py-8 flex justify-between items-start mix-blend-difference text-white relative z-50">
        {/* Brand Name */}
        <NavLink to="/" onClick={() => setIsOpen(false)} className="uppercase tracking-[0.3em] font-serif text-xl z-50 relative group">
          Fiducia
          <span className="block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out mt-1"></span>
        </NavLink>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex gap-12 text-xs tracking-[0.2em] uppercase font-light relative items-center">
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

        {/* Hamburger Toggle - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden z-50 relative text-white"
        >
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col h-full justify-center px-10"
            >
              <span className="uppercase tracking-[0.3em] font-serif text-sm text-[#d4af37] mb-12">
                Fiducia
              </span>

              <nav className="flex flex-col gap-8">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="space-y-4">
                    <button
                      onClick={() => handleMobileNav(item.path)}
                      className="block text-4xl font-serif text-neutral-200 hover:text-[#d4af37] transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                    {item.subItems?.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleMobileNav(sub.path)}
                        className="block pl-6 text-sm uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors duration-300 text-left"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>

              <div className="mt-16">
                <Button
                  variant="glass"
                  onClick={() => handleMobileNav('/membership')}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
