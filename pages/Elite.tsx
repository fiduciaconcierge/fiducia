import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ELITE_SERVICES } from '../constants';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Elite: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <main className="bg-[#050505] min-h-screen relative overflow-hidden pt-32 pb-24">
      
      {/* Subtle animated background mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#d4af37] blur-[150px] rounded-full mix-blend-screen animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-neutral-800 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl font-serif text-[#d4af37] opacity-90 mb-4"
          >
            Beyond Experience.
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-6xl md:text-8xl font-serif text-neutral-800"
          >
            Beyond Value.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm uppercase tracking-[0.3em] text-neutral-500"
          >
            By Invitation Only
          </motion.p>
        </section>

        {/* Cinematic Break */}
        <section className="w-full h-[60vh] relative overflow-hidden mb-40 flex items-center justify-center">
            <motion.div style={{ y: yBg }} className="absolute inset-0">
               <img src="https://picsum.photos/seed/elite-ultra-luxury-black-tie/1920/1080.jpg" className="w-full h-[120%] object-cover grayscale brightness-50" alt="Elite Ultra Luxury Black Tie" />
            </motion.div>
            <div className="relative z-10 text-center p-8 border border-[#d4af37]/30 bg-black/40 backdrop-blur-sm max-w-2xl">
                <p className="font-serif text-2xl md:text-3xl text-neutral-200 italic">
                    "For those who have seen everything, we offer what remains unseen."
                </p>
            </div>
        </section>

        {/* Elite Services Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 gap-40">
          {ELITE_SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-neutral-900 hover:border-[#d4af37]/30 transition-colors duration-700">
                
                {/* Image Area */}
                <div className={`lg:col-span-7 h-[600px] overflow-hidden relative ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                   <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale sepia-[0.3] contrast-125 transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-6 left-6 text-[#d4af37] text-xs tracking-[0.2em] border border-[#d4af37]/30 px-3 py-1 bg-black/50 backdrop-blur-md">
                    ELITE ONLY
                  </div>
                </div>

                {/* Text Area */}
                <div className="lg:col-span-5 p-16 flex flex-col justify-center bg-[#0a0a0a] border-l border-neutral-900 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Logo className="w-32 h-32 text-white" />
                  </div>
                  <h3 className="text-4xl font-serif text-neutral-100 mb-8">{service.title}</h3>
                  <div className="w-12 h-[1px] bg-[#d4af37] mb-8"></div>
                  <p className="text-neutral-500 font-light leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <p className="text-xs text-neutral-600 italic mt-auto">
                    * Available exclusively to Tier 1 members.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Rare Access Gallery */}
        <section className="mt-40 px-6 md:px-12 max-w-[1800px] mx-auto mb-24">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-neutral-800 pb-4">
                <h2 className="text-3xl font-serif text-[#d4af37]">Private Access</h2>
                <p className="text-neutral-500 uppercase tracking-widest text-xs">Unlock the globe</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                <img src="/images/p19.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Private Exclusive Access" />
                <img src="/images/p12.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="VIP Gala Events" />
                <img src="/images/p20.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="High Society Lifestyle" />
                <img src="/images/p22.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Global Private Jet Access" />
             </div>
        </section>

        {/* Contact */}
        <section className="mt-40 flex justify-center pb-20">
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Directoroffice@fiduciagroup.in&su=Elite%20Invitation%20Request" target="_blank" rel="noopener noreferrer" className="block">
             <Button variant="glass" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-12 py-6 text-sm">
               Request Invitation
             </Button>
           </a>
        </section>
      </div>
    </main>
  );
};

export default Elite;