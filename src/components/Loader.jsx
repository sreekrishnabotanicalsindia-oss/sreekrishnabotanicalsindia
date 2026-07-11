import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-brand-darkGreen flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated SVG/Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand-gold mb-6"
          >
            <Leaf size={64} />
          </motion.div>
          
          <div className="flex flex-col items-center">
            <h1 className="font-heading font-bold text-3xl text-white tracking-widest mb-2">
              SREE KRISHNA
            </h1>
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em]">Botanicals</p>
          </div>

          {/* Progress Line */}
          <motion.div 
            className="w-48 h-[2px] bg-white/20 mt-8 rounded-full overflow-hidden relative"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "anticipate" }}
              className="absolute top-0 bottom-0 left-0 w-full bg-brand-gold"
            ></motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
