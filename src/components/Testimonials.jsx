import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya S.",
    role: "Anniversary Gift",
    content: "Absolutely stunning! The string art of our wedding date is now the centerpiece of our living room. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Rahul M.",
    role: "Birthday Present",
    content: "Gifted a custom name art to my sister. The craftsmanship and attention to detail is phenomenal. It looks so premium.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Anita & Vikram",
    role: "Couple Portrait",
    content: "We ordered a couple portrait in string art and the result brought tears to our eyes. A true masterpiece.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white/30 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Loved by <span className="text-gradient">Hundreds</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-gold-500)] text-[var(--color-gold-500)]" />
                ))}
              </div>
              <p className="text-gray-700 font-light italic mb-8">"{review.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-gold-500)]"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                  <p className="text-xs text-[var(--color-gold-500)]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
