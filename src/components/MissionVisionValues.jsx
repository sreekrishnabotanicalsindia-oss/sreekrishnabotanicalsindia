import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, CheckCircle2, Leaf, Diamond, ArrowRight, Zap, Globe, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const MissionVisionValues = () => {
  return (
    <section className="relative py-12 lg:py-16 bg-[#FAFBF9] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#0F7B47]/[0.03] to-[#C89D3D]/[0.02] rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0A5A36]/[0.04] to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#C89D3D]/[0.03] rounded-full blur-3xl"></div>
        <Leaf className="absolute top-20 right-20 text-[#0F7B47]/5 w-64 h-64 -rotate-12" />
        <Leaf className="absolute bottom-20 left-10 text-[#0F7B47]/5 w-48 h-48 rotate-45" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E8ECE8] shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#0F7B47] animate-pulse"></span>
            <span className="text-[#0A5A36] text-xs md:text-sm font-semibold tracking-widest uppercase">Our Foundation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1E293B] mb-6 leading-tight"
          >
            Driven by purpose,<br className="hidden md:block" /> inspired by nature.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#0F7B47] to-[#C89D3D] rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/85 backdrop-blur-xl rounded-[24px] p-8 md:p-10 border border-[#E8ECE8] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_80px_rgba(15,123,71,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F7B47]/0 via-[#0F7B47]/0 to-[#C89D3D]/0 group-hover:from-[#0F7B47]/5 group-hover:to-[#C89D3D]/10 transition-colors duration-500"></div>
            
            {/* Top Corner Accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#0F7B47]/5 to-[#C89D3D]/10 rounded-full blur-2xl group-hover:bg-[#0F7B47]/10 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Premium Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FAFBF9] to-[#E8ECE8] border border-white shadow-sm flex items-center justify-center mb-8 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(15,123,71,0.15)] transition-all duration-500">
                <Target className="text-[#0F7B47] w-10 h-10 group-hover:text-[#C89D3D] transition-colors duration-500" strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-heading font-bold text-[#1E293B] mb-5 group-hover:text-[#0F7B47] transition-colors duration-300">
                Our Mission
              </h3>
              
              <div className="w-12 h-px bg-[#E8ECE8] mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#0F7B47] group-hover:to-transparent transition-all duration-700"></div>

              <p className="text-[#64748B] font-body text-base md:text-lg leading-[1.8] font-medium mb-8 flex-grow group-hover:text-[#1E293B]/80 transition-colors duration-300">
                To deliver nature's finest botanical extracts with uncompromising quality, purity, and value. We strive to create long-term partnerships across global markets through innovation and excellence.
              </p>

              {/* Bottom Badge */}
              <div className="mt-auto flex flex-wrap gap-3">
                {['Quality Driven', 'Global Reach'].map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFBF9] border border-[#E8ECE8] text-xs font-semibold text-[#0A5A36] group-hover:bg-white group-hover:border-[#0F7B47]/20 transition-all duration-300">
                    <CheckCircle2 size={12} className="text-[#C89D3D]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0F7B47] to-[#C89D3D] group-hover:w-full transition-all duration-700 ease-out"></div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/85 backdrop-blur-xl rounded-[24px] p-8 md:p-10 border border-[#E8ECE8] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_80px_rgba(15,123,71,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#0F7B47]/0 via-[#0F7B47]/0 to-[#C89D3D]/0 group-hover:from-[#0F7B47]/5 group-hover:to-[#C89D3D]/10 transition-colors duration-500"></div>
            
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#0F7B47]/5 to-[#C89D3D]/10 rounded-full blur-2xl group-hover:bg-[#0F7B47]/10 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FAFBF9] to-[#E8ECE8] border border-white shadow-sm flex items-center justify-center mb-8 group-hover:-rotate-[8deg] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(200,157,61,0.15)] transition-all duration-500 relative">
                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C89D3D]/30 rounded-2xl animate-pulse"></div>
                <Eye className="text-[#0A5A36] w-10 h-10 group-hover:text-[#0F7B47] transition-colors duration-500" strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-heading font-bold text-[#1E293B] mb-5 group-hover:text-[#0F7B47] transition-colors duration-300">
                Our Vision
              </h3>
              
              <div className="w-12 h-px bg-[#E8ECE8] mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#0F7B47] group-hover:to-transparent transition-all duration-700"></div>

              <p className="text-[#64748B] font-body text-base md:text-lg leading-[1.8] font-medium mb-8 flex-grow group-hover:text-[#1E293B]/80 transition-colors duration-300">
                To become a trusted global leader in natural extracts and spice ingredients, recognized worldwide for our unwavering innovation, integrity, and deep commitment to a sustainable future.
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                {['Future Goal', 'Innovation'].map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFBF9] border border-[#E8ECE8] text-xs font-semibold text-[#0A5A36] group-hover:bg-white group-hover:border-[#0F7B47]/20 transition-all duration-300">
                    <Globe className="w-3 h-3 text-[#0F7B47]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#C89D3D] to-[#0F7B47] group-hover:w-full transition-all duration-700 ease-out"></div>
          </motion.div>

          {/* Values Card - Wide */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 group relative bg-white/90 backdrop-blur-2xl rounded-[24px] p-8 md:p-12 border border-[#E8ECE8] shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(15,123,71,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0F7B47]/[0.03] to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 group-hover:from-[#0F7B47]/[0.06] transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAFBF9] to-[#E8ECE8] border border-white shadow-sm flex items-center justify-center mb-6 group-hover:rotate-[5deg] group-hover:scale-105 transition-all duration-500">
                    <Diamond className="text-[#C89D3D] w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-[#1E293B] group-hover:text-[#0F7B47] transition-colors duration-300">
                    Our Core Values
                  </h3>
                </div>
                <p className="text-[#64748B] font-body text-sm md:text-base font-medium max-w-sm">
                  The foundational principles that guide our decisions, actions, and commitment to excellence every single day.
                </p>
              </div>

              {/* Premium Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  { text: 'Integrity & Transparency', icon: ShieldCheck },
                  { text: 'Uncompromising Quality', icon: Target },
                  { text: 'Continuous Innovation', icon: Zap },
                  { text: 'Sustainable Practices', icon: Leaf },
                  { text: 'Customer Success', icon: Heart },
                  { text: 'Global Responsibility', icon: Globe },
                ].map((value, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-4 rounded-xl bg-[#FAFBF9] border border-transparent hover:border-[#0F7B47]/20 hover:bg-white hover:shadow-[0_8px_30px_rgba(15,123,71,0.06)] transition-all duration-300 cursor-default group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E8ECE8] flex items-center justify-center shadow-sm group-hover/item:bg-[#0F7B47] group-hover/item:border-[#0F7B47] transition-colors duration-300">
                         <value.icon className="w-5 h-5 text-[#0F7B47] group-hover/item:text-white transition-colors duration-300" strokeWidth={2} />
                      </div>
                      <span className="font-body font-semibold text-[#1E293B] text-sm md:text-base group-hover/item:text-[#0F7B47] transition-colors duration-300">
                        {value.text}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C89D3D] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#C89D3D] to-[#0F7B47] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
