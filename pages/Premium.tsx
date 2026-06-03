import React from 'react';
import { motion } from 'framer-motion';
import { PREMIUM_SERVICES } from '../constants';
import Button from '../components/Button';

const Premium: React.FC = () => {
  return (
    <main className="bg-[#080808] min-h-screen pt-32 pb-24">
      
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-neutral-100 mb-6"
        >
          Expect More.<br />
          <span className="text-neutral-500 italic">Experience Better.</span>
        </motion.h1>
        <div className="w-24 h-[1px] bg-[#d4af37] mb-8 opacity-60"></div>
        <p className="max-w-xl text-neutral-400 font-light leading-relaxed">
          The Fiducia Premium membership is the gateway to a life without friction. 
          Designed for individuals who value time above all else.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto space-y-40">
        {PREMIUM_SERVICES.map((service, index) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 overflow-hidden relative group">
               <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[500px] object-cover luxury-filter group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-xs text-[#d4af37] uppercase tracking-[0.2em]">{`0${index + 1}`}</span>
              <h3 className="text-4xl font-serif text-neutral-200">{service.title}</h3>
              <p className="text-neutral-400 font-light leading-8 text-lg whitespace-pre-line">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Visual Lifestyle Gallery */}
      <section className="mt-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <h2 className="text-center text-3xl font-serif text-neutral-500 mb-16">The Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[600px] overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Golden glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
            </div>
            <img src="/fiducia/images/p11.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Premium Five Star Service" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Five-star Lifestyle service worldwide.</p>
            </div>
          </motion.div>

          {/* Card 2 (Offset) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative h-[600px] lg:mt-24 overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Golden glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
            </div>
            <img src="/images/p13.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Exclusive Lifestyle Club" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Private clubs and elite Networks.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative h-[600px] overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Golden glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
            </div>
            <img src="/fiducia/images/p15.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Private Concierge Service" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Experiences beyond expectations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 py-24 bg-neutral-900/30 text-center">
         <h2 className="text-3xl font-serif text-white mb-8">Ready for seamless living?</h2>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=premium@fiduciagroup.in&su=Premium%20Concierge%20Enquiry" target="_blank" rel="noopener noreferrer" className="block mt-16">
           <Button variant="glass">Contact Us</Button>
         </a>
      </section>
    </main>
  );
};

export default Premium;