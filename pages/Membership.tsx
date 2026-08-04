import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Membership: React.FC = () => {
  const navigate = useNavigate();

  const premiumLuxuries = [
    {
      title: 'Global Access',
      description: 'Priority reservations at Michelin-starred dining and sold-out cultural events worldwide.',
      icon: '●'
    },
    {
      title: 'Travel Logistics',
      description: 'Seamless private aviation chartering, yacht brokerage, and secure ground transport.',
      icon: '●'
    },
    {
      title: 'Art Advisory',
      description: 'Expert guidance on acquisition and curation from world-renowned specialists.',
      icon: '●'
    },
    {
      title: 'Wellness & Health',
      description: 'Access to exclusive medical practitioners and personalized wellness retreats.',
      icon: '●'
    },
    {
      title: 'Family Services',
      description: 'Elite educational consulting and bespoke family experiences.',
      icon: '●'
    },
    {
      title: 'Concierge Services',
      description: '24/7 personal assistance for any request, anywhere in the world.',
      icon: '●'
    }
  ];

  const eliteLuxuries = [
    {
      title: 'Off-Market Real Estate',
      description: 'Access to properties that never list publicly. From private islands to historical estates.',
      icon: '◆'
    },
    {
      title: 'Legacy Management',
      description: 'Comprehensive succession planning, philanthropy structure, and next-generation education.',
      icon: '◆'
    },
    {
      title: 'Diplomatic Services',
      description: 'Complex cross-border bureaucratic assistance and high-level security coordination.',
      icon: '◆'
    },
    {
      title: 'Private Aviation',
      description: 'Dedicated aircraft ownership, crew management, and global landing rights.',
      icon: '◆'
    },
    {
      title: 'Investment Access',
      description: 'Exclusive opportunities in private equity, hedge funds, and pre-IPO ventures.',
      icon: '◆'
    },
    {
      title: 'Security & Intelligence',
      description: 'Executive protection, cyber security, and global intelligence services.',
      icon: '◆'
    },
    {
      title: 'Cultural Patronage',
      description: 'Private museum access, artist commissions, and cultural institution partnerships.',
      icon: '◆'
    },
    {
      title: 'Bespoke Experiences',
      description: 'Once-in-a-lifetime experiences tailored to your deepest passions and interests.',
      icon: '◆'
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-neutral-300 relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#d4af37]/3 via-transparent to-transparent" />
      </div>
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-black/80"></div>
          {/* Animated background particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37]/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight]
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-3xl bg-[#d4af37]/30 scale-150 rounded-full animate-pulse" />
              <Logo className="w-24 h-24 md:w-32 md:h-32 text-[#d4af37] mx-auto mb-8 relative z-10" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6 relative"
          >
            <span className="absolute inset-0 blur-2xl bg-[#d4af37]/20 scale-110 rounded-lg" />
            <span className="relative z-10">Choose Your</span>
            <br />
            <span className="text-[#d4af37]">Circle of Trust</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Select the level of service that aligns with your lifestyle. 
            Each tier offers unparalleled access to the world's most exclusive experiences.
          </motion.p>
        </div>
      </section>

      {/* Membership Options */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
            onClick={() => navigate('/membership/premium')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="border border-neutral-800 p-8 md:p-12 hover:border-[#d4af37]/50 transition-all duration-700 relative overflow-hidden">
              {/* Premium glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
                </div>
              </div>
              
              <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-500">Premium</h2>
                <p className="text-neutral-500 uppercase tracking-widest text-sm mb-8">The Gateway</p>
                <div className="text-sm text-neutral-400 font-light italic mb-8 group-hover:text-neutral-300 transition-colors duration-500">
                  "Exceptional living, effortless"
                </div>
              </div>
              
              <div className="space-y-6 mb-12 relative z-10">
                {premiumLuxuries.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4 group/item">
                    <span className="text-2xl text-[#d4af37] group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-medium mb-2 group-hover/item:text-[#d4af37] transition-colors duration-300">{item.title}</h4>
                      <p className="text-neutral-400 text-sm font-light group-hover/item:text-neutral-300 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/membership/premium');
                }}
                className="w-full relative z-10 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-all duration-500"
              >
                Discover Premium
              </Button>
            </div>
          </motion.div>

          {/* Elite Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => navigate('/membership/elite')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative border border-[#d4af37]/30 p-8 md:p-12 hover:border-[#d4af37] transition-all duration-700 relative overflow-hidden">
              {/* Elite glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4af37]/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#d4af37]/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/25 rounded-full blur-3xl" />
                </div>
              </div>
              
              {/* Elite Badge - Overlay on card */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                <span className="bg-[#d4af37] text-black px-6 py-2 text-xs uppercase tracking-widest font-medium group-hover:bg-white group-hover:text-black transition-all duration-500 whitespace-nowrap shadow-lg">
                  Most Exclusive
                </span>
              </div>
              
              <div className="text-center mb-12 mt-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-500">Imperium</h2>
                <p className="text-neutral-500 uppercase tracking-widest text-sm mb-8">The Summit</p>
                <div className="text-sm text-neutral-400 font-light italic mb-8 group-hover:text-neutral-300 transition-colors duration-500">
                  "Beyond luxury, beyond expectation"
                </div>
              </div>
              
              <div className="space-y-6 mb-12 relative z-10">
                {eliteLuxuries.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4 group/item">
                    <span className="text-2xl text-transparent bg-gradient-to-br from-[#d4af37] via-[#f4e4c1] to-[#d4af37] bg-clip-text group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-medium mb-2 group-hover/item:text-[#d4af37] transition-colors duration-300">{item.title}</h4>
                      <p className="text-neutral-400 text-sm font-light group-hover/item:text-neutral-300 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="primary" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/membership/elite');
                }}
                className="w-full relative z-10 group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                Request Elite Access
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Luxury Highlights */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto py-24 border-t border-neutral-900">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 relative">
            <span className="absolute inset-0 blur-2xl bg-[#d4af37]/20 scale-110 rounded-lg" />
            <span className="relative z-10">Beyond Compare</span>
          </h3>
          <p className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Services that transcend traditional luxury, available exclusively to our members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Private Island Access',
              description: 'Exclusive rights to private islands in the Caribbean, Mediterranean, and South Pacific.',
              highlight: true
            },
            {
              title: 'Art Basel VIP',
              description: 'Private viewings, artist meetings, and curated acquisitions at global art fairs.',
              highlight: false
            },
            {
              title: 'Monaco Grand Prix',
              description: 'Trackside hospitality, yacht access, and exclusive after-party invitations.',
              highlight: false
            },
            {
              title: 'Couture Fashion',
              description: 'Private appointments with creative directors and custom garment commissions.',
              highlight: true
            },
            {
              title: 'Wine Cellar Curation',
              description: 'Access to en primeur allocations and rare vintage acquisitions.',
              highlight: false
            },
            {
              title: 'Space Tourism',
              description: 'Early access to commercial space flight and zero-gravity experiences.',
              highlight: true
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`p-8 border ${item.highlight ? 'border-[#d4af37]/30 bg-[#d4af37]/5' : 'border-neutral-800'} hover:border-[#d4af37]/50 transition-all duration-700 relative overflow-hidden cursor-pointer group`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl" />
              </div>
              
              <h4 className="text-xl font-serif text-white mb-4 relative z-10 group-hover:text-[#d4af37] transition-colors duration-500">{item.title}</h4>
              <p className="text-neutral-400 text-sm font-light leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors duration-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto py-24 border-t border-neutral-900">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-neutral-400 font-light leading-relaxed mb-12">
            Schedule a confidential consultation with our membership director. 
            We'll discuss your unique needs and craft a bespoke experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a  href="https://mail.google.com/mail/?view=cm&fs&to=private@fiduciagroup.in&su=Schedule%20Meeting"  target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-12">
                Schedule Consultation
              </Button>
            </a>
            <Button variant="outline" onClick={() => navigate('/about')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Membership;
