import { motion } from 'framer-motion';
import { Hammer, Type, Heart, TreePine, Truck, Image as ImageIcon } from 'lucide-react';

const features = [
  { icon: Hammer, title: '100% Handmade', desc: 'Crafted with passion, strings, and nails.' },
  { icon: Type, title: 'Custom Name Designs', desc: 'Your name, beautifully woven into art.' },
  { icon: Heart, title: 'Perfect Gift', desc: 'For loved ones, couples, and special moments.' },
  { icon: TreePine, title: 'Premium Wood Finish', desc: 'High-quality dark wooden backgrounds.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Safely packed and delivered to your doorstep.' },
  { icon: ImageIcon, title: 'Personalized Artwork', desc: 'From photos to string art masterpieces.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-20 relative overflow-hidden bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our <span className="text-gradient">Art</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Every piece is uniquely handcrafted with attention to detail, making it the perfect timeless gift.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group border border-black/5 hover:border-[var(--color-gold-500)]/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold-500)]/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[var(--color-gold-500)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
