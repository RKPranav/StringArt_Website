import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: '4x14 inches ',
    idea: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello! I would like to order a custom string art.
    
*Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Size:* ${formData.size}
*Idea/Custom Text:* ${formData.idea || 'Not provided'}

*(I have a reference image to share as well!)*`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919597983139"; // Replace with your actual number
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-transparent relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold-500)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's Create <br />
            <span className="text-gradient">Something Beautiful</span>
          </motion.h2>
          <p className="text-gray-600 mb-12 max-w-md">
            Ready to order your custom string art? Fill out the form or reach out to us directly on WhatsApp or Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/919597983139?text=Hello!%20I'm%20interested%20in%20creating%20some%20beautiful%20custom%20string%20art%20with%20VR%20Kreates." 
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-gray-900 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
            <a 
              href="https://www.instagram.com/vr_kreates" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-gray-900 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 transition-colors"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                alt="Instagram Logo" 
                className="w-6 h-6"
              />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border border-black/5 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-2xl pointer-events-none" />
          
          <form className="relative flex flex-col gap-6" onSubmit={handleWhatsAppSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold-500)] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold-500)] transition-colors"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size Selection</label>
              <select 
                value={formData.size}
                onChange={(e) => setFormData({...formData, size: e.target.value})}
                className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold-500)] transition-colors appearance-none"
              >
                <option value="4x14 inches ">4x14 inches </option>
                <option value="6x14 inches ">6x14 inches </option>
                <option value="8x14 inches ">8x14 inches </option>
                <option value="12x14 inches ">12x14 inches </option>
                <option value="14x14 inches ">14x14 inches </option>
                <option value="6x16 inches ">6x16 inches </option>
                <option value="12x16 inches ">12x16 inches </option>
                <option value="10x18 inches ">10x18 inches </option>
                <option value="12x18 inches ">12x18 inches </option>
                <option value="8x20 inches ">8x20 inches </option>

              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Text / Idea</label>
              <textarea 
                rows="4"
                value={formData.idea}
                onChange={(e) => setFormData({...formData, idea: e.target.value})}
                className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold-500)] transition-colors resize-none"
                placeholder="E.g., 'Arun & Ranji' with a small heart in the middle..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Reference Image (Optional)</label>
              <input 
                type="file" 
                className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-gold-500)]/20 file:text-[var(--color-gold-600)] hover:file:bg-[var(--color-gold-500)]/30 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-2 italic">Note: Please attach your image directly in WhatsApp after this chat opens.</p>
            </div>

            <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-[var(--color-gold-500)] text-black font-bold text-lg hover:bg-[var(--color-gold-600)] transition-colors flex items-center justify-center gap-2 neon-glow">
              <Send className="w-5 h-5" />
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
