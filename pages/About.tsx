import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">{subtitle}</h2>
    <h3 className="text-4xl md:text-5xl font-serif text-neutral-100">{title}</h3>
  </div>
);

const About: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <main className="bg-black min-h-screen text-neutral-300">
      
      {/* 1. HERO HEADER */}
      <section className="pt-48 pb-32 px-6 max-w-6xl mx-auto text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8"
        >
          Architects of<br />
          <span className="text-neutral-600 italic">Invisible Lives.</span>
        </motion.h1>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent max-w-xl opacity-50"></div>
      </section>

      <div className="max-w-[1800px] mx-auto px-6 space-y-40 pb-40">
        
        {/* 2. ORIGINS (Image Left, Text Right) */}
        <section className="flex flex-col md:flex-row gap-24 items-center">
            <motion.div 
               style={{ y: yParallax }}
               className="w-full md:w-1/2 h-[700px] relative overflow-hidden"
            >
                <img 
                    src="/fiducia/images/p24.jpg" 
                    className="w-full h-full object-cover luxury-filter"
                    alt="Geneva Office"
                />
                <div className="absolute bottom-8 right-8 text-right">
                    <span className="block text-4xl font-serif text-white">2023</span>
                    <span className="text-xs uppercase tracking-widest text-[#d4af37]">Mumbai, India </span>
                </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full md:w-1/2 md:pr-24"
            >
                <SectionHeader subtitle="The Origin" title="Silence as a Service" />
                <p className="text-lg font-light leading-loose text-neutral-400 mb-8">
                    Fiducia was born not from a desire to be seen, but from a desperate need to disappear. 
                    Founded in a private Club in India, our agency began as a handshake agreement between 
                    three private bankers and a real estate company who realized their clients needed more than wealth management—they needed life management.
                </p>
                <p className="text-lg font-light leading-loose text-neutral-400">
                    We recognized that for the family offices and business owners, the ultimate currency is not money, but anonymity and time. 
                    We built an infrastructure to protect both.
                </p>
            </motion.div>
        </section>

        {/* 3. MANIFESTO (Centered) */}
        <section className="max-w-4xl mx-auto text-center py-24 border-y border-neutral-900">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-12">The Manifesto</h2>
            <p className="text-3xl md:text-5xl font-serif leading-tight text-white">
                "We believe that true luxury is the absence of friction. It is the table that is always waiting, 
                the jet that is always fueled, and the question that never needs to be asked."
            </p>
        </section>

        {/* 4. GLOBAL FOOTPRINT (Grid) */}
        <section>
            <SectionHeader subtitle="Presence" title="The Global Network" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 border-t border-neutral-800 pt-12">
                {[
                    { city: "London", desc: "Mayfair Concierge Hub" },
                    { city: "New York", desc: "Upper East Side Liaison" },
                    { city: "Dubai", desc: "DIFC Private Office" },
                    { city: "Singapore", desc: "Sentosa Gateway" },
                    { city: "Geneva", desc: "Global Headquarters" },
                    { city: "Monaco", desc: "Yacht & Port Logistics" },
                    { city: "India", desc: "Mumbai Operations" },
                    { city: "Bali", desc: "Regional Hub" }
                ].map((loc) => (
                    <motion.div 
                        key={loc.city}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group cursor-default"
                    >
                        <h4 className="text-3xl font-serif text-neutral-400 group-hover:text-[#d4af37] transition-colors duration-500">{loc.city}</h4>
                        <p className="text-xs uppercase tracking-widest text-neutral-600 mt-2">{loc.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 5. THE PROCESS (Steps) */}
        <section className="bg-neutral-900/20 p-12 md:p-24">
            <SectionHeader subtitle="Methodology" title="How We Operate" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { step: "01", title: "The Brief", text: "We do not use apps. We do not use portals. You speak, we listen. A dedicated Director of Lifestyle is assigned to your account immediately." },
                    { step: "02", title: "The Execution", text: "Our global network activates instantly. Whether it is sourcing a rare vintage in Bordeaux or closing a museum for a private viewing." },
                    { step: "03", title: "The Dissolution", text: "Once the task is complete, we disappear. No paper trails, no social media footprints. Just the memory of a perfect experience." }
                ].map((item) => (
                    <div key={item.step} className="space-y-6">
                        <span className="text-6xl font-serif text-[#d4af37] opacity-20">{item.step}</span>
                        <h4 className="text-xl text-white uppercase tracking-widest">{item.title}</h4>
                        <p className="text-neutral-400 font-light leading-7">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. THE CURATORS (Abstract Team) */}
        <section>
             <SectionHeader subtitle="The Team" title="The Curators" />
             <p className="max-w-2xl text-neutral-400 font-light mb-16">
                 Our team consists of former chiefs of staff to royalty, art historians, private aviation experts, 
                 and security specialists. We do not publish their faces to ensure their effectiveness in the field.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="border-l-2 border-[#d4af37] pl-6 py-4">
                     <h4 className="text-2xl font-serif text-white mb-2">Director of Europe</h4>
                     <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-4">Geneva / London</p>
                     <p className="text-neutral-400 font-light text-sm leading-relaxed">
                         Oversees all European operations, managing relationships with royal families and elite clientele across the continent.
                     </p>
                 </div>
                 <div className="border-l-2 border-[#d4af37] pl-6 py-4">
                     <h4 className="text-2xl font-serif text-white mb-2">Head of Security</h4>
                     <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-4">Tel Aviv / Dubai</p>
                     <p className="text-neutral-400 font-light text-sm leading-relaxed">
                         Leads global security operations, ensuring client safety through advanced threat assessment and protective services.
                     </p>
                 </div>
                 <div className="border-l-2 border-[#d4af37] pl-6 py-4">
                     <h4 className="text-2xl font-serif text-white mb-2">Art & Estates</h4>
                     <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-4">Paris / Mumbai</p>
                     <p className="text-neutral-400 font-light text-sm leading-relaxed">
                         Curates fine art collections and manages estate acquisitions for discerning collectors worldwide.
                     </p>
                 </div>
             </div>
        </section>

        {/* 7. DISCRETION POLICY */}
        <motion.section
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-[#d4af37] pl-12 py-8 bg-neutral-900/10"
        >
          <SectionHeader subtitle="Policy" title="Absolute Discretion" />
          <p className="font-serif text-2xl italic text-neutral-500 mb-6">
            "Silence is the ultimate luxury."
          </p>
          <p className="font-light text-neutral-400 leading-relaxed max-w-3xl">
            We do not disclose our client list. We do not seek publicity. We operate on encrypted channels 
            and maintain non-disclosure agreements that are binding in perpetuity. Your privacy is not a feature; 
            it is our foundation.
          </p>
        </motion.section>

      </div>
    </main>
  );
};

export default About;