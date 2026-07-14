import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  Microscope, 
  Globe2, 
  Award, 
  CheckCircle2, 
  Play, 
  ArrowRight,
  ShieldCheck,
  Factory,
  PackageCheck
} from 'lucide-react';
import aboutQualityImg from '../assets/about_quality_scientist.png';
import aboutExtractionImg from '../assets/about_extraction_equip.png';
import aboutWarehouseImg from '../assets/about_warehouse.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const CountUp = ({ end, suffix = "" }) => {
  // A simple representation of count up since we can't easily import a complex external library without verifying.
  // Using framer motion to animate the number is possible, but for simplicity we'll just display it with a fade.
  // In a real scenario, you might use 'react-countup' here.
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
      className="flex items-baseline"
    >
      <span className="text-3xl md:text-4xl font-heading font-bold text-[#0F7B47]">{end}</span>
      <span className="text-xl md:text-2xl font-bold text-[#C89D3D]">{suffix}</span>
    </motion.div>
  );
};

export default function WhoWeAre() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#FAFBF9] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0F7B47]/[0.03] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#C89D3D]/[0.03] rounded-full blur-[100px] translate-y-1/3 translate-x-1/3"></div>
        <motion.div style={{ y: y1 }} className="absolute top-40 left-10 opacity-10">
          <Leaf size={120} className="text-[#0F7B47] -rotate-45" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-40 right-20 opacity-5">
          <Leaf size={200} className="text-[#0F7B47] rotate-12" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Section Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E8ECE8] shadow-sm mb-8 w-max">
              <div className="w-2 h-2 rounded-full bg-[#C89D3D] animate-pulse"></div>
              <span className="text-[#083D2B] text-xs font-semibold tracking-[0.2em] uppercase">Who We Are</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1E293B] leading-[1.1] mb-8">
              Driven by Nature.<br />
              Powered by Science.<br />
              <span className="text-[#0F7B47]">Trusted Worldwide.</span>
            </motion.h2>

            {/* Intro Content */}
            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <p className="text-[#64748B] font-body text-lg leading-[1.8] max-w-2xl">
                Sree Krishna Botanicals is a premier manufacturer of high-value botanical extracts, oleoresins, and essential oils. For decades, we have bridged the gap between traditional agricultural wisdom and cutting-edge extraction technology.
              </p>
              <p className="text-[#64748B] font-body text-lg leading-[1.8] max-w-2xl">
                We partner with global industries—from food and beverage to pharmaceuticals and cosmetics—delivering ingredients that guarantee uncompromised purity, consistency, and sustainability.
              </p>
            </motion.div>

            {/* Highlight Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { icon: Leaf, title: 'Premium Extracts', desc: '100% natural, unadulterated ingredients.' },
                { icon: Globe2, title: 'Global Standards', desc: 'Exporting to over 50+ countries worldwide.' },
                { icon: Factory, title: 'Modern Facility', desc: 'State-of-the-art CO2 & solvent extraction.' },
                { icon: ShieldCheck, title: 'Quality Assured', desc: 'Rigorous testing at every production stage.' }
              ].map((highlight, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8ECE8] shadow-sm hover:shadow-[0_10px_40px_rgba(15,123,71,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFBF9] flex items-center justify-center text-[#0F7B47] group-hover:bg-[#0F7B47] group-hover:text-white transition-colors duration-300 shrink-0">
                    <highlight.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[#1E293B] font-semibold mb-1 group-hover:text-[#0F7B47] transition-colors duration-300">{highlight.title}</h4>
                    <p className="text-[#64748B] text-sm leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>


            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#0F7B47] text-white rounded-full font-semibold overflow-hidden shadow-[0_8px_20px_rgba(15,123,71,0.25)] hover:shadow-[0_15px_30px_rgba(15,123,71,0.4)] transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A36] to-[#0F7B47] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Products</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#083D2B] rounded-full font-semibold border border-[#E8ECE8] hover:border-[#0F7B47]/30 hover:bg-[#FAFBF9] transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#0F7B47]/10 flex items-center justify-center group-hover:bg-[#0F7B47] group-hover:text-white transition-colors duration-300 text-[#0F7B47]">
                  <Play size={14} className="ml-0.5" fill="currentColor" />
                </div>
                <span>Factory Tour</span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - IMAGES */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] xl:h-[800px] w-full hidden md:block"
          >
            {/* Main Hero Image */}
            <div className="absolute inset-0 w-full h-[500px] xl:h-[650px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] group mt-10 xl:mt-20">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" 
                alt="Botanical Manufacturing" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083D2B]/80 via-[#083D2B]/20 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">🌿</div>
                <div>
                  <p className="text-white font-semibold leading-tight">100% Natural<br/>Extracts</p>
                </div>
              </div>
            </div>

            {/* Floating Image Cards */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[240px] xl:w-[280px] bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E8ECE8] z-20 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-[160px] rounded-xl overflow-hidden mb-3">
                <img src={aboutQualityImg} alt="QC Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg">
                  <Microscope size={16} className="text-[#0F7B47]" />
                </div>
              </div>
              <p className="text-center font-semibold text-[#1E293B] text-sm pb-2">QC Laboratory</p>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute top-1/3 -left-12 xl:-left-24 w-[220px] xl:w-[260px] bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#E8ECE8] z-20 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-[140px] rounded-xl overflow-hidden mb-3">
                <img src={aboutExtractionImg} alt="Extraction Facility" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg">
                  <Factory size={16} className="text-[#C89D3D]" />
                </div>
              </div>
              <p className="text-center font-semibold text-[#1E293B] text-sm pb-2">Modern Facility</p>
            </motion.div>

            <motion.div 
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -right-8 xl:-right-16 w-[200px] xl:w-[240px] bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E8ECE8] z-20 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-[120px] rounded-xl overflow-hidden mb-3">
                <img src={aboutWarehouseImg} alt="Global Warehouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg">
                  <PackageCheck size={16} className="text-[#0F7B47]" />
                </div>
              </div>
              <p className="text-center font-semibold text-[#1E293B] text-sm pb-2">Global Warehouse</p>
            </motion.div>

            {/* Trust Badges - Floating Elements */}
            <div className="absolute top-1/2 right-full mr-8 translate-y-1/2 flex flex-col gap-4">
              {['ISO Certified', 'FSSAI Approved', 'GMP Certified'].map((badge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="bg-white/90 backdrop-blur-md border border-[#E8ECE8] shadow-lg rounded-xl py-2 px-4 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(15,123,71,0.15)] transition-all cursor-default hover:-translate-y-1"
                >
                  <Award size={16} className="text-[#C89D3D]" />
                  <span className="text-xs font-bold text-[#083D2B]">{badge}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
          
          {/* Mobile Images Fallback (Simplified) */}
          <div className="block md:hidden space-y-6 mt-8">
             <div className="w-full h-[300px] rounded-[24px] overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Botanical Manufacturing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083D2B]/80 to-transparent flex items-end p-6">
                   <p className="text-white font-semibold text-lg">🌿 100% Natural Extracts</p>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <img src={aboutQualityImg} alt="QC Lab" className="w-full h-24 object-cover rounded-xl shadow-sm" />
                <img src={aboutExtractionImg} alt="Factory" className="w-full h-24 object-cover rounded-xl shadow-sm" />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
