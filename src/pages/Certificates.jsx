import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
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
        <title>Certifications | ISO, FSSAI, HACCP Certified Botanical Extract Manufacturer - Sree Krishna Botanicals</title>
        <meta name="description" content="Sree Krishna Botanicals holds ISO, FSSAI, HACCP, and GMP certifications ensuring the highest standards in botanical extract and oleoresin manufacturing. View our accreditations." />
        <meta name="keywords" content="oleoresin certifications India, ISO certified botanical extracts, FSSAI certified spice extract, HACCP certified manufacturer, GMP certified oleoresin, certified botanical extract India, food safety certification spice, quality certified natural extract, accredited botanical manufacturer" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sree-krishna-botanicals.vercel.app/certificates" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sree-krishna-botanicals.vercel.app/certificates" />
        <meta property="og:title" content="Certifications | Sree Krishna Botanicals" />
        <meta property="og:description" content="ISO, FSSAI, HACCP and GMP certified botanical extract manufacturer from India. View our quality accreditations." />
        <meta property="og:site_name" content="Sree Krishna Botanicals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certifications | Sree Krishna Botanicals" />
        <meta name="twitter:description" content="ISO, FSSAI, HACCP certified oleoresin and botanical extract manufacturer from India." />
      </Helmet>

      <section className="pt-40 pb-32 bg-[#0a0a0a] text-center relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal 
            variant="fadeUp"
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
              Global <span className="font-subheading italic font-light text-brand-gold">Compliance</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              We operate under the strictest international guidelines. Our certifications are a testament to our relentless pursuit of purity and quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {certificates.map((cert, index) => (
              <ScrollReveal 
                key={cert.id}
                variant="fadeUp"
                delay={index * 0.1}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
