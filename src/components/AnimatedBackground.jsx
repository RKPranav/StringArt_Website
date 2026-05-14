import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      initial: {
        opacity: Math.random() * 0.5 + 0.1,
        x: Math.random() * 100 + 'vw',
        y: Math.random() * 100 + 'vh',
        scale: Math.random() * 0.5 + 0.5,
      },
      animate: {
        y: [null, Math.random() * -100 + -50 + 'vh'],
        opacity: [null, 0],
      },
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: 'linear',
      }
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fdfbf7]">
      {/* Base radial gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#fdfbf7] to-[#f4eee0] opacity-90" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: ['0%', '20%', '-20%', '0%'],
          y: ['0%', '30%', '-10%', '0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-gold-500)]/10 blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: ['0%', '-30%', '10%', '0%'],
          y: ['0%', '-20%', '20%', '0%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: ['0%', '10%', '-10%', '0%'],
          y: ['0%', '-30%', '30%', '0%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-gold-600)]/5 blur-[150px]"
      />

      {/* Tiny floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={particle.initial}
          animate={particle.animate}
          transition={particle.transition}
          className="absolute w-1 h-1 rounded-full bg-[var(--color-gold-500)]/40"
        />
      ))}
    </div>
  );
}
