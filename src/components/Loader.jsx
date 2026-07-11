import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loaderBg from '../assets/hero.png';
import logoImg from '../assets/logo.png';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smoothly increment progress from 0 to 100 over ~2.5s
    const duration = 2500;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment + (Math.random() * increment * 0.5); // slight randomness
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // SVG circular progress
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #f5f9f2 0%, #e8f2e0 50%, #f0f7ea 100%)' }}
        >
          {/* Background botanical image */}
          <div className="absolute inset-0">
            <img
              src={loaderBg}
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.35, filter: 'blur(2px) saturate(1.1)' }}
            />
            {/* Soft white vignette overlay */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.55) 0%, rgba(230,245,220,0.3) 60%, rgba(200,230,185,0.15) 100%)'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-8">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <img
                src={logoImg}
                alt="Sree Krishna Botanicals"
                className="w-44 h-44 object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Circular Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex items-center justify-center"
              style={{ width: 110, height: 110 }}
            >
              {/* Background circle */}
              <svg
                width="110"
                height="110"
                className="absolute top-0 left-0 -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(13,79,38,0.12)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.1s ease' }}
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d4f26" />
                    <stop offset="100%" stopColor="#2a8c4a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Percentage text */}
              <div className="flex flex-col items-center">
                <span
                  className="font-bold text-xl leading-none"
                  style={{ color: '#0d4f26', fontFamily: 'sans-serif' }}
                >
                  {progress}%
                </span>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-1">
                <span style={{ color: '#0d4f26', fontSize: '15px', fontWeight: 500, letterSpacing: '0.05em' }}>
                  Loading
                </span>
                {/* Animated dots */}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.5, 1] }}
                  style={{ color: '#c1a755', fontSize: '15px', fontWeight: 700 }}
                >
                  ...
                </motion.span>
              </div>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="w-24 h-px"
                style={{ background: 'linear-gradient(to right, transparent, #c1a755, transparent)', transformOrigin: 'center' }}
              />

              {/* Tagline */}
              <p style={{ color: '#3a6a4a', fontSize: '12px', letterSpacing: '0.04em', textAlign: 'center' }}>
                Goodness of Nature, Delivered with Care
              </p>

              {/* Gold oil drop icon */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                  <path
                    d="M6 0C6 0 0 7.2 0 10.5C0 13.6 2.7 16 6 16C9.3 16 12 13.6 12 10.5C12 7.2 6 0 6 0Z"
                    fill="#c1a755"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
