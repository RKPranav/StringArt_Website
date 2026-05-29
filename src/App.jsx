import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-[var(--color-gold-500)] selection:text-white">
      {/* Global Background Elements */}
      <AnimatedBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <Gallery />
        <HowItWorks />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-gray-500 text-sm glass">
        <p>&copy; {new Date().getFullYear()} String Art by Pranav. Handcrafted with love.</p>
      </footer>
    </div>
  );
}

export default App;
