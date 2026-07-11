import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function GlobalUI() {
  const { scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primaryGreen transform origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-darkGreen text-white rounded-full flex items-center justify-center shadow-luxury hover:bg-brand-primaryGreen transition-colors duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
