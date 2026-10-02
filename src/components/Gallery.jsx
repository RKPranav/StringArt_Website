import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Family Arts', 'Name Arts', 'Anniversary Gifts', 'Cartoon Arts'];

const galleryItems = [
  { id: 1, category: 'Anniversary Gifts', src: `${import.meta.env.BASE_URL}Image/img1.jpeg` },
  { id: 2, category: 'Anniversary Gifts', src: `${import.meta.env.BASE_URL}Image/img2.jpeg` },
  { id: 3, category: 'Family Arts', src: `${import.meta.env.BASE_URL}Image/img3.jpeg` },
  { id: 4, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img4.jpeg` },
  { id: 5, category: 'Family Arts', src: `${import.meta.env.BASE_URL}Image/img5.jpeg` },
  { id: 6, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img6.jpeg` },
  { id: 7, category: 'Anniversary Gifts', src: `${import.meta.env.BASE_URL}Image/img7.jpeg` },
  { id: 8, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img8.jpeg` },
  { id: 9, category: 'Family Arts', src: `${import.meta.env.BASE_URL}Image/img9.jpeg` },
  { id: 10, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img10.jpeg` },
  { id: 11, category: 'Cartoon Arts', src: `${import.meta.env.BASE_URL}Image/img11.jpeg` },
  { id: 12, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img13.jpeg` },
  { id: 13, category: 'Cartoon Arts', src: `${import.meta.env.BASE_URL}Image/img14.jpeg` },
  { id: 14, category: 'Family Arts', src: `${import.meta.env.BASE_URL}Image/img16.jpeg` },
  { id: 15, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img18.jpeg` },
  { id: 16, category: 'Anniversary Gifts', src: `${import.meta.env.BASE_URL}Image/img19.jpeg` },
  { id: 17, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img20.jpeg` },
  { id: 18, category: 'Name Arts', src: `${import.meta.env.BASE_URL}Image/img21.jpeg` },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredItems = galleryItems.filter(
    item => activeTab === 'All' || item.category === activeTab
  );

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredItems]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 lg:px-20 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--color-gold-500)]/5 rounded-full blur-[100px] pointer-events-none" />

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
              onClick={() => {
                setActiveTab(cat);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat
                  ? 'bg-[var(--color-gold-500)] text-black neon-glow'
                  : 'glass text-gray-600 hover:text-gray-900 hover:bg-black/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Container with Navigation Arrows */}
        <div className="relative group/arrows px-2">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full glass border border-black/5 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${canScrollLeft
                ? 'opacity-100 cursor-pointer text-gray-800 hover:bg-[var(--color-gold-500)] hover:text-black hover:border-[var(--color-gold-500)]/30'
                : 'opacity-0 pointer-events-none'
              }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full glass border border-black/5 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${canScrollRight
                ? 'opacity-100 cursor-pointer text-gray-800 hover:bg-[var(--color-gold-500)] hover:text-black hover:border-[var(--color-gold-500)]/30'
                : 'opacity-0 pointer-events-none'
              }`}
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrollable Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 scrollbar-none py-6 snap-x snap-mandatory scroll-smooth px-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(item)}
                  className="w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] shrink-0 snap-start relative group rounded-2xl overflow-hidden glass aspect-square cursor-pointer"
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
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage.src}
              alt={selectedImage.category}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
