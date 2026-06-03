import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  // Animations
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const taglineY = useTransform(scrollY, [0, 300], [0, 50]);
  
  // Parallax for images
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      {/* Ambient Glow Effects - Same as Membership Page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#d4af37]/3 via-transparent to-transparent" />
      </div>
      
      {/* Hero Section - Unchanged */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {/* Adjusted overlay to be lighter so video is clearly visible */}
          <div className="absolute inset-0 bg-black/40 z-10"></div> 
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105 opacity-80"
          >
            {/* Abstract Luxury Ink/Smoke Video */}
            <source src="https://videos.pexels.com/video-files/3125902/3125902-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Logo Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-10 pointer-events-none">
          {/* Cinematic video layer */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-110"
            >
              <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Luxury animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
                initial={{
                  x: Math.random() * 600,
                  y: Math.random() * 600,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [Math.random() * 600, Math.random() * 600],
                  y: [Math.random() * 600, Math.random() * 600]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Radial gradient overlay */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)'
            }}
          />
          
          {/* Subtle rotating ring */}
          <motion.div
            className="absolute inset-0 border border-[#d4af37]/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border border-[#d4af37]/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Logo - Enhanced with cinematic background */}
        <motion.div style={{ rotate }} className="mb-12 z-20 relative">
          {/* Logo glow effect */}
          <div className="absolute inset-0 blur-3xl bg-[#d4af37]/20 scale-150 rounded-full animate-pulse" />
          <Logo className="w-32 h-32 md:w-48 md:h-48 text-[#d4af37] drop-shadow-2xl relative z-10" />
        </motion.div>
        
        {/* Main Text - Enhanced with golden glow effects */}
        <motion.h1 
          style={{ opacity, y: taglineY }}
          className="text-4xl md:text-6xl font-serif text-center text-neutral-200 tracking-tight z-20 px-4 drop-shadow-2xl relative group"
        >
          <span className="absolute inset-0 blur-2xl bg-[#d4af37]/15 scale-110 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Trust. Discretion. Excellence.</span>
        </motion.h1>
        
        
        
        {/* Subtle Gradient at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 pointer-events-none" />
      </section>

      {/* 2. THE PHILOSOPHY (Split Layout) */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-[1800px] mx-auto px-6 py-32 gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-12"
        >
          <div>
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] block mb-6">The Architect of Time</span>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-200 leading-tight relative group">
              <span className="absolute inset-0 blur-2xl bg-[#d4af37]/10 scale-110 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">
                We do not sell services.<br />
                <span className="text-neutral-600 italic group-hover:text-neutral-500 transition-colors duration-500">We return your time.</span>
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-md group-hover:text-neutral-300 transition-colors duration-500">
            In a world of noise, Fiducia offers the ultimate luxury: silence. 
            We manage the complexities of your global existence so you can inhabit the moments that matter.
            From private aviation to off-market real estate acquisition, our reach is boundless.
          </p>
          <Button 
            variant="outline" 
            onClick={() => navigate('/about')}
            className="group hover:border-[#d4af37] hover:text-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-500"
          >
            Our Ethos
          </Button>
        </motion.div>
        
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 h-[800px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          {/* Golden glow overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
          </div>
          
          <img 
            src="/fiducia/images/p1.jpg" 
            alt="Luxury Private Jet Interior" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-12 left-[-20px] bg-black p-8 border border-neutral-900 shadow-2xl group-hover:border-[#d4af37]/50 transition-colors duration-700">
             <p className="font-serif text-2xl text-[#d4af37] group-hover:text-white transition-colors duration-500">"Time is the only asset<br/>that money cannot buy."</p>
          </div>
        </motion.div>
      </section>

      {/* 3. CINEMATIC BREAK - Seamless Flow */}
      <section className="h-[80vh] w-full relative overflow-hidden flex items-center justify-center group">
        {/* Video Background for Break */}
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-[filter] duration-700"
        >
            <source src="https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Dispersed golden glow effect across entire section */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/8 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#d4af37]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#d4af37]/12 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#d4af37]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-[#d4af37]/6 rounded-full blur-3xl" />
          </div>
        </div>
        <div className="relative z-10 text-center space-y-8 px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide relative group-hover:text-[#d4af37] transition-colors duration-700">A Sanctuary for Few</h2>
          <div className="w-[1px] h-24 bg-[#d4af37] mx-auto group-hover:h-32 transition-all duration-700"></div>
        </div>
        {/* Top and bottom seamless gradients */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 pointer-events-none" />
      </section>

      {/* 4. VISUAL SYMPHONY (Grid) - Seamless Flow */}
      <section className="max-w-[1800px] mx-auto px-6 py-32">
        <div className="text-center mb-32">
          <span className="text-neutral-500 text-xs uppercase tracking-[0.3em] relative group">
            <span className="absolute inset-0 blur-1xl bg-[#d4af37]/20 scale-150 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 group-hover:text-[#d4af37] transition-colors duration-500">The Collection</span>
          </span>
          <h2 className="text-4xl font-serif text-neutral-200 mt-4 relative group">
            <span className="absolute inset-0 blur-2xl bg-[#d4af37]/10 scale-110 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Curated Perfection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
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
            <img src="/fiducia/images/p4.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Private Jet Aviation" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-serif text-[#d4af37] group-hover:text-white transition-colors duration-500">Aviation</h3>
              <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Global private jet charter without restriction.</p>
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
            <img src="/fiducia/images/p6.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Luxury Swiss Watches" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-serif text-[#d4af37] group-hover:text-white transition-colors duration-500">Horology</h3>
              <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Exclusive timepieces beyond retail.</p>
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
            <img src="/fiducia/images/p7.jpg" className="w-full h-full object-cover transition-[filter,transform] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Mansion Estate" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-serif text-[#d4af37] group-hover:text-white transition-colors duration-500">Estates</h3>
              <p className="text-sm text-neutral-400 mt-2 font-light group-hover:text-neutral-300 transition-colors duration-500">Private islands and legacy properties.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PREVIEW (Interactive) - Seamless Flow */}
      <section className="py-32 max-w-[1800px] mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-[80vh]">
            
            {/* Premium */}
            <div 
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => navigate('/membership/premium')}
            >
              <div className="absolute inset-0 bg-neutral-900 z-0">
                <img src="https://picsum.photos/seed/premium-luxury-lifestyle-exclusive/900/1200.jpg" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-[1.5s] grayscale group-hover:grayscale-0" alt="Luxury Premium Lifestyle" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 border border-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6">Membership</h3>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Premium</h2>
                <Button variant="glass">Discover</Button>
              </div>
            </div>

            {/* Elite */}
            <div 
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => navigate('/membership/elite')}
            >
              <div className="absolute inset-0 bg-neutral-900 z-0">
                <img src="https://picsum.photos/seed/elite-ultra-luxury-exclusive-vip/900/1200.jpg" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-[1.5s] grayscale group-hover:grayscale-0" alt="Ultra Luxury Elite Lifestyle" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 border border-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6">Membership</h3>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Imperium</h2>
                <Button variant="glass">Request Access</Button>
              </div>
            </div>

         </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="h-[70vh] flex flex-col items-center justify-center bg-black border-t border-neutral-900 relative overflow-hidden">
        <img 
            src="https://picsum.photos/seed/luxury-lifestyle-world-elite/1920/1080.jpg" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
            alt="Luxury World Curated"
        />
        <div className="relative z-10 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-200">
            Your World. Curated.
          </h2>
          <p className="text-neutral-500 font-light max-w-lg mx-auto">
            Join the few who understand that true luxury is not about having more,<br/>but experiencing better.
          </p>
         <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=private@fiduciagroup.in&su=Private%20Enquiry"  target="_blank" rel="noopener noreferrer"className="block mt-16">
  <Button variant="glass">Enquire Privately</Button>
</a>
        </div>
      </section>
      
    </main>
  );
};

export default Home;