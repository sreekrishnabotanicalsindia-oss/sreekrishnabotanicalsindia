import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  { id: 1, name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
  { id: 2, name: 'ISO 22000', desc: 'Food Safety Management Systems' },
  { id: 3, name: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
  { id: 4, name: 'GMP', desc: 'Good Manufacturing Practice' },
  { id: 5, name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
  { id: 6, name: 'HALAL', desc: 'Halal Certified Production' },
  { id: 7, name: 'KOSHER', desc: 'Kosher Certified Production' },
  { id: 8, name: 'Organic', desc: 'Certified Organic Products (EU/NPOP)' },
];

export default function Certificates() {
  return (
    <>
      <Helmet>
        <title>Certificates | Sree Krishna Botanicals</title>
      </Helmet>

      <section className="pt-40 pb-32 bg-[#0a0a0a] text-center relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
              Global <span className="font-subheading italic font-light text-brand-gold">Compliance</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              We operate under the strictest international guidelines. Our certifications are a testament to our relentless pursuit of purity and quality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {certificates.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-[#111] p-10 flex flex-col items-start border border-transparent hover:border-brand-primaryGreen/30 transition-all duration-500 group"
              >
                <div className="text-brand-gold mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <Award size={40} strokeWidth={1} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{cert.name}</h3>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">{cert.desc}</p>
                
                <button className="text-[10px] uppercase tracking-widest font-bold text-brand-primaryGreen group-hover:text-brand-gold transition-colors">
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
