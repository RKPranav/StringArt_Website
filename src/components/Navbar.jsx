import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Features', href: 'features' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'How It Works', href: 'how-it-works' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: active section detection on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // triggers when the section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glass border-b border-black/5 bg-[#fdfbf7]/80 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        {/* Brand Logo / Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScrollTo('home')}
        >
          {/* Decorative String Art Logo Icon */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 group">
            <svg
              className="w-5 h-5 text-[var(--color-gold-500)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Geometric string art representation (star/spiderweb lines) */}
              <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
              <circle cx="12" cy="12" r="3" className="fill-[var(--color-gold-500)]/30" />
            </svg>
            <div className="absolute inset-0 bg-[var(--color-gold-500)]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <span className="text-xl font-bold tracking-wider text-gray-900 font-sans">
            VR <span className="text-gradient">Kreates</span>
          </span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className="relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 text-gray-700 hover:text-gray-900"
            >
              {link.name}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-gold-500)] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-2.5 rounded-full bg-[var(--color-gold-600)] text-black font-semibold text-sm neon-glow hover:bg-[var(--color-gold-500)] transition-colors"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center rounded-full glass border border-black/5 hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-gray-800 rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-[2px] bg-gray-800 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-gray-800 rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-b border-black/5 bg-[#fdfbf7]/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col px-6 py-8 gap-5">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.href}
                  onClick={() => handleScrollTo(link.href)}
                  className={`text-left text-lg font-semibold tracking-wide py-1.5 transition-colors ${
                    activeSection === link.href
                      ? 'text-[var(--color-gold-600)]'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleScrollTo('contact')}
                className="w-full mt-4 py-3 rounded-xl bg-[var(--color-gold-500)] text-black font-bold text-center neon-glow"
              >
                Order Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
