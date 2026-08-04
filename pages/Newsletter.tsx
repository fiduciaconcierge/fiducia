import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NEWS_ITEMS } from '../constants';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Filter news items based on selected category
  const filteredNewsItems = useMemo(() => {
    if (selectedCategory === 'All') {
      return NEWS_ITEMS;
    }
    return NEWS_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Enhanced luxurious background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Primary flowing golden orb */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse duration-[25s]" />
        
        {/* Secondary luxury accents */}
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[#d4af37]/4 rounded-full blur-3xl animate-pulse duration-[20s] delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#d4af37]/6 via-[#f4e4c1]/3 to-transparent rounded-full blur-2xl animate-pulse duration-[18s] delay-500" />
        
        {/* Diamond-like shimmer effects */}
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#d4af37]/4 via-transparent to-[#f4e4c1]/2 rounded-full blur-2xl animate-pulse duration-[15s] delay-700" />
        <div className="absolute bottom-1/4 right-1/2 w-[350px] h-[350px] bg-gradient-to-bl from-[#d4af37]/3 via-transparent to-[#f4e4c1]/1 rounded-full blur-2xl animate-pulse duration-[17s] delay-300" />
        
        {/* Multi-layered ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/2 via-transparent to-[#d4af37]/1" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#d4af37]/1 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/0.5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#d4af37]/0.3 to-transparent" />
        
        {/* Moving light particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-3 h-3 bg-[#d4af37]/30 rounded-full animate-ping duration-[4s]" />
          <div className="absolute top-32 right-32 w-2 h-2 bg-[#f4e4c1]/25 rounded-full animate-ping duration-[3s] delay-1000" />
          <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-[#d4af37]/28 rounded-full animate-ping duration-[3.5s] delay-500" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#f4e4c1]/20 rounded-full animate-ping duration-[2.5s] delay-1500" />
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-[#d4af37]/25 rounded-full animate-ping duration-[3s] delay-800" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#f4e4c1]/22 rounded-full animate-ping duration-[2.8s] delay-1200" />
        </div>
      </div>
      
      {/* Smooth Header */}
      <section className="px-8 md:px-16 max-w-[1600px] mx-auto mb-32 flex flex-col md:flex-row justify-between items-end relative z-10">
        {/* Header luxury background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/8 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/12 rounded-full blur-3xl" />
        </div>
        
        <div className="relative group mb-8 md:mb-0 z-10">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out pointer-events-none">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4af37]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-neutral-100 mb-6 relative group-hover:text-[#d4af37] transition-all duration-700 ease-out">The Ledger</h1>
          <p className="text-neutral-500 uppercase tracking-[0.4em] text-sm relative group">
            <span className="absolute inset-0 blur-1xl bg-[#d4af37]/10 scale-150 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out" />
            <span className="relative z-10 group-hover:text-[#d4af37] transition-all duration-700 ease-out">Curated Intelligence for the Elite</span>
          </p>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-auto group z-10">
          {isSubscribed ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#d4af37] font-serif text-lg italic"
            >
              You have successfully Subscribed to our newsletter
            </motion.p>
          ) : (
            <form onSubmit={handleSubscribe} className="pb-3 border-b border-neutral-700 flex items-center gap-6 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your private email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-transparent border-none outline-none text-neutral-300 placeholder-neutral-600 w-full min-w-0 sm:w-80 font-serif text-lg italic group-hover:placeholder-neutral-500 transition-all duration-500 ease-out disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="text-neutral-400 hover:text-[#d4af37] transition-all duration-500 ease-out transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={24} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Silky Category Filter */}
      <section className="px-8 md:px-16 max-w-[1600px] mx-auto mb-24 relative z-10">
        {/* Category filter luxury background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#f4e4c1]/3 rounded-full blur-3xl" />
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center relative z-10">
          {['All', 'Horology', 'Estates', 'Aviation', 'Art', 'Yachting', 'Finance', 'Automotive', 'Real Estate', 'Fashion', 'Investment', 'Lifestyle', 'Technology', 'Health'].map((category, index) => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs uppercase tracking-[0.4em] transition-all duration-500 ease-out border-b pb-2 hover:tracking-[0.5em] relative group ${
                selectedCategory === category 
                  ? 'text-[#d4af37] border-[#d4af37]' 
                  : 'text-neutral-500 border-transparent hover:text-[#d4af37] hover:border-[#d4af37]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="absolute inset-0 blur-1xl bg-[#d4af37]/10 scale-150 rounded-full" />
              </span>
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Results Counter */}
      {selectedCategory !== 'All' && (
        <section className="px-8 md:px-16 max-w-[1600px] mx-auto mb-12 relative z-10">
          <p className="text-neutral-500 text-sm uppercase tracking-[0.3em]">
            {filteredNewsItems.length} article{filteredNewsItems.length !== 1 ? 's' : ''} in {selectedCategory}
          </p>
        </section>
      )}

      {/* Flowing Mosaic Layout - Fully Occupied */}
      <section className="px-4 md:px-8 max-w-[1800px] mx-auto relative z-10">
        {/* Enhanced luxury background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/4 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#f4e4c1]/5 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-bl from-[#d4af37]/6 to-transparent rounded-full blur-2xl" />
        </div>
        
        {filteredNewsItems.length > 0 ? (
          <div className="relative z-10">
            {/* Organic Flowing Mosaic Grid */}
            <div className="space-y-6 md:space-y-8">
              {/* Create flowing rows with varied patterns */}
              {Array.from({ length: Math.ceil(filteredNewsItems.length / 6) }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-3 md:gap-4">
                  {filteredNewsItems.slice(rowIndex * 6, (rowIndex + 1) * 6).map((item, itemIndex) => {
                    const globalIndex = rowIndex * 6 + itemIndex;
                    // Organic size patterns for visual flow
                    const sizePatterns = [
                      'w-full md:w-1/2 h-64 md:h-80', // Large horizontal
                      'w-full md:w-1/3 h-56 md:h-72', // Medium square
                      'w-full md:w-1/4 h-48 md:h-64', // Small square
                      'w-full md:w-2/3 h-72 md:h-96', // Extra wide
                      'w-full md:w-1/2 h-80 md:h-96', // Tall rectangle
                      'w-full h-56 md:h-64', // Full width mobile
                    ];
                    
                    const sizePattern = sizePatterns[globalIndex % sizePatterns.length];
                    const isLarge = globalIndex % 3 === 0; // Every 3rd item is featured
                    
                    return (
                      <motion.div
                        key={`${item.category}-${globalIndex}`}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          delay: globalIndex * 0.04, 
                          duration: 0.8, 
                          ease: [0.25, 0.46, 0.45, 0.94] 
                        }}
                        className={`${sizePattern} group relative overflow-hidden cursor-pointer rounded-3xl border border-neutral-900/50 hover:border-[#d4af37]/30 transition-all duration-700 ease-out`}
                      >
                        {/* Enhanced silky glow overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1200 ease-out pointer-events-none z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
                          <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#d4af37]/15 rounded-full blur-3xl" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#f4e4c1]/12 to-transparent rounded-full blur-2xl" />
                          {isLarge && (
                            <>
                              <div className="absolute top-10 right-10 w-20 h-20 bg-[#d4af37]/18 rounded-full blur-2xl" />
                              <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#f4e4c1]/10 rounded-full blur-2xl" />
                            </>
                          )}
                        </div>
                        
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-all duration-[2500ms ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                        
                        {/* Content with enhanced typography */}
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                          <span className={`text-[#d4af37] uppercase tracking-[0.3em] block mb-3 group-hover:text-white transition-all duration-600 ease-out ${
                            isLarge ? 'text-[11px] md:text-[12px]' : 'text-[9px] md:text-[10px]'
                          }`}>
                            {item.category}
                          </span>
                          <h3 className={`font-serif text-white leading-tight transition-all duration-600 ease-out group-hover:tracking-wide ${
                            isLarge 
                              ? 'text-xl md:text-3xl line-clamp-3' 
                              : 'text-base md:text-lg line-clamp-2'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/50 transition-all duration-600" />
                        <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/50 transition-all duration-600" />
                        
                        {/* Featured indicator */}
                        {isLarge && (
                          <div className="absolute top-3 left-3">
                            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse duration-[3s]" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            {/* Floating ambient elements */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-[#d4af37]/8 rounded-full blur-2xl animate-pulse duration-[10s]" />
            <div className="absolute bottom-32 left-32 w-16 h-16 bg-[#f4e4c1]/6 rounded-full blur-xl animate-pulse duration-[8s] delay-2000" />
            <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-[#d4af37]/10 rounded-full blur-lg animate-pulse duration-[6s] delay-1000" />
          </div>
        ) : (
          <div className="text-center py-32 relative z-10">
            {/* Enhanced empty state */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#d4af37]/8 via-transparent to-[#f4e4c1]/4 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <p className="text-neutral-500 text-xl md:text-2xl font-serif mb-8">No articles found in {selectedCategory} category.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="px-12 py-4 border border-neutral-700 text-neutral-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 ease-out uppercase tracking-[0.3em] text-sm relative group"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <span className="absolute inset-0 blur-1xl bg-[#d4af37]/15 scale-150 rounded-full" />
                </span>
                <span className="relative z-10">View All Articles</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Silky Socials Bottom */}
      <section className="mt-48 flex flex-col items-center space-y-12 relative z-10">
        {/* Socials luxury background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/4 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/6 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-[#f4e4c1]/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        <div className="flex flex-col items-center space-y-12 relative z-10">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 relative group">
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="absolute inset-0 blur-1xl bg-[#d4af37]/10 scale-150 rounded-full" />
            </span>
            <span className="relative z-10">Follow The Ledger</span>
          </span>
          <div className="flex gap-12">
            <a href="#" className="p-6 border border-neutral-800 rounded-full hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-400 transition-all duration-700 ease-out relative group transform hover:scale-110">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none">
                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-2xl" />
              </div>
              <Instagram size={28} strokeWidth={1} />
            </a>
            <a href="#" className="p-6 border border-neutral-800 rounded-full hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-400 transition-all duration-700 ease-out relative group transform hover:scale-110">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none">
                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-2xl" />
              </div>
              <Linkedin size={28} strokeWidth={1} />
            </a>
          </div>
          <p className="text-xs text-neutral-600 max-w-lg text-center mt-12 leading-relaxed">
            Exclusive insights delivered quarterly to distinguished subscribers worldwide.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Newsletter;