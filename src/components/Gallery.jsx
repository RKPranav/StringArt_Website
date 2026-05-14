import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Family Arts', 'Name Arts', 'Anniversary Gifts', 'Cartoon Arts'];

const galleryItems = [
  { id: 1, category: 'Anniversary Gifts', src: '/Image/img1.jpeg' },
  { id: 2, category: 'Anniversary Gifts', src: '/Image/img2.jpeg' },
  { id: 3, category: 'Family Arts', src: '/Image/img3.jpeg' },
  { id: 4, category: 'Cartoon Arts', src: '/Image/img4.jpeg' },
  { id: 5, category: 'Family Arts', src: '/Image/img5.jpeg' },
  { id: 6, category: 'Name Arts', src: '/Image/img6.jpeg' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = galleryItems.filter(
    item => activeTab === 'All' || item.category === activeTab
  );

  return (
    <section id="gallery" className="py-24 px-6 lg:px-20 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of handcrafted string art pieces.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-[var(--color-gold-500)] text-black neon-glow' 
                  : 'glass text-gray-600 hover:text-gray-900 hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden glass aspect-square cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.category} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.category}</h4>
                    <p className="text-[var(--color-gold-500)] text-sm">View Details</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
