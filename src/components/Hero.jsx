import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/Image/img1.jpeg',
  '/Image/img2.jpeg',
  '/Image/img3.jpeg',
  '/Image/img4.jpeg',
  '/Image/img5.jpeg',
  '/Image/img6.jpeg',
  '/Image/img7.jpeg',
  '/Image/img8.jpeg'
];
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 lg:px-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold-500)]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass w-fit mx-auto lg:mx-0 text-sm font-medium tracking-wider text-[var(--color-gold-500)]"
          >
            HANDCRAFTED WITH LOVE
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Turn Memories Into <br />
            <span className="text-gradient">String Art</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Handcrafted personalized string art gifts made with love for couples, birthdays, anniversaries, and special moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[var(--color-gold-600)] text-black font-semibold text-lg neon-glow flex items-center justify-center gap-2"
            >
              Order Now
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-black/10 glass text-gray-900 font-semibold text-lg hover:bg-black/5 transition-colors"
            >
              View Gallery
            </motion.button>
          </div>
        </motion.div>

        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-12 lg:mt-0 perspective-1000"
        >
          <div className="relative rounded-2xl overflow-hidden glass p-4 neon-glow transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={heroImages[currentImageIndex]} 
                alt="Handcrafted String Art Showcase" 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-xl shadow-2xl"
              />
            </AnimatePresence>
            {/* Overlay gradient for aesthetics */}
            <div className="absolute inset-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl z-10" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl border border-black/5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-gold-500)]/20 flex items-center justify-center text-[var(--color-gold-500)]">
              ⭐
            </div>
            <div>
              <p className="text-gray-900 font-bold">100% Custom</p>
              <p className="text-xs text-gray-600">Made for you</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
