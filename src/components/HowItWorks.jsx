import { motion } from 'framer-motion';
import { Upload, PenTool, Scissors, Gift } from 'lucide-react';

const steps = [
  { icon: Upload, title: "1. Send Your Idea", desc: "Upload your photo or share your custom name/design idea with us." },
  { icon: PenTool, title: "2. We Design It", desc: "Our artists create a digital draft for your approval." },
  { icon: Scissors, title: "3. Handcrafted", desc: "We meticulously hammer nails and weave strings to bring it to life." },
  { icon: Gift, title: "4. Delivered", desc: "Securely packed and delivered straight to your doorstep." }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-20 relative bg-transparent">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-gold-500)]/30 to-transparent hidden lg:block" />

      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
        </div>

        <div className="relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex-1 w-full flex ${idx % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className="glass p-8 rounded-2xl w-full max-w-md relative group hover:border-[var(--color-gold-500)]/30 transition-colors">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-gold-500)]/0 to-[var(--color-gold-500)]/0 group-hover:from-[var(--color-gold-500)]/20 group-hover:to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative">
                    <step.icon className="w-12 h-12 text-[var(--color-gold-500)] mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 font-light">{step.desc}</p>
                  </div>
                </div>
              </div>
              
              {/* Center Dot for Desktop */}
              <div className="hidden lg:flex w-16 justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-[var(--color-gold-500)] neon-glow" />
              </div>

              <div className="flex-1 w-full hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
