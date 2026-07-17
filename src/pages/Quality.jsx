import { Helmet } from 'react-helmet-async';
import { Leaf, Search, TestTube, Filter, ShieldCheck, Box, CheckCircle2, Award, Droplet, Globe, ThumbsUp, Activity, FlaskConical, FileCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import qualityHeroImg from '../assets/Quality hero.png';
import advancedTestingImg from '../assets/advanced_testing_lab.png';
import expertTeamImg from '../assets/expert_team_scientists.png';
import hygienicFacilitiesImg from '../assets/hygienic_facilities.png';
const qaSteps = [
  { id: 1, title: 'Raw Material Selection', icon: Leaf, desc: 'Carefully sourced botanicals from trusted growers and suppliers.' },
  { id: 2, title: 'Incoming Inspection', icon: Search, desc: 'Raw materials are tested for identity, purity and quality before processing.' },
  { id: 3, title: 'In-Process Quality Checks', icon: TestTube, desc: 'Continuous monitoring and testing during extraction to maintain consistency.' },
  { id: 4, title: 'Finished Product Testing', icon: Filter, desc: 'Advanced testing for physical, chemical and microbiological parameters.' },
  { id: 5, title: 'Quality Approval', icon: ShieldCheck, desc: 'Only products that pass all quality standards are approved for dispatch.' },
  { id: 6, title: 'Packaging & Storage', icon: Box, desc: 'Hygienic packaging and secure storage to preserve quality and freshness.' },
];

const standards = [
  'ISO 9001:2015 Certified Quality Management System',
  'GMP (Good Manufacturing Practices) Compliant',
  'TUV SUD Certified for Quality and Safety',
  'Strict Adherence to International Regulatory Standards',
  'Advanced Laboratory & Testing Facilities',
  'Traceability from Source to Final Product'
];

const assurances = [
  { icon: Droplet, text: 'Purity & Potency' },
  { icon: Activity, text: 'Consistency in Every Batch' },
  { icon: Leaf, text: 'Safe & Natural Products' },
  { icon: Globe, text: 'Global Quality Compliance' },
  { icon: ThumbsUp, text: 'Customer Satisfaction' }
];

export default function Quality() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Quality Standards | ISO Certified Oleoresin Manufacturer - Sree Krishna Botanicals</title>
        <meta name="description" content="Sree Krishna Botanicals maintains the highest quality standards in oleoresin and botanical extract manufacturing. ISO certified, FSSAI compliant, HACCP protocols, and rigorous HPLC testing ensure purity and potency in every batch." />
        <meta name="keywords" content="oleoresin quality standards, ISO certified botanical extracts, FSSAI compliant spice extracts, HACCP oleoresin, HPLC testing botanical extracts, quality certified spice extract India, GMP certified manufacturer, food safety spice extracts, pharmaceutical grade extracts, quality assurance botanical" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sreekrishnabotanicals.com/quality" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sreekrishnabotanicals.com/quality" />
        <meta property="og:title" content="Quality Standards | Sree Krishna Botanicals" />
        <meta property="og:description" content="ISO certified, FSSAI compliant oleoresin manufacturer with HACCP protocols and rigorous HPLC testing for purity and potency." />
        <meta property="og:site_name" content="Sree Krishna Botanicals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quality Standards | Sree Krishna Botanicals" />
        <meta name="twitter:description" content="ISO certified botanical extract manufacturer with rigorous quality standards, HPLC testing and HACCP protocols." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#f0f5ee]">
        <img 
          src={qualityHeroImg} 
          alt="Laboratory Quality Control" 
          className="w-full h-auto block object-cover object-center"
        />
        


        {/* Curved Divider */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none text-white">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V120H1200V0C1032,100,560,140,0,0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Quality Assurance Timeline */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-[#c1a755]"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0d4f26]">
                Quality Assurance at Every Step
              </h2>
              <div className="w-16 h-px bg-[#c1a755]"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              From raw material selection to final packaging, our robust quality assurance system ensures purity, potency and safety.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Dotted Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0 border-t-2 border-dashed border-[#c1a755] z-0 opacity-50"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-8 relative z-10">
              {qaSteps.map((step, idx) => (
                <ScrollReveal key={step.id} variant="fadeUp" delay={idx * 0.08} className="flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#e5eadf] shadow-sm flex items-center justify-center mb-3 md:mb-6 group-hover:border-[#0d4f26] transition-colors duration-300 relative z-10">
                    <step.icon className="text-[#0d4f26] w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-bold text-[#0d4f26] text-xs md:text-sm lg:text-base mb-2 md:mb-3 max-w-[150px]">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] md:text-xs lg:text-sm leading-relaxed max-w-[160px]">
                    {step.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Facilities Grid */}
      <section className="py-12 pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Our Quality Standards */}
              <ScrollReveal variant="fadeLeft" className="w-full lg:w-1/2 bg-[#f6f8f4] rounded-2xl p-8 flex flex-col border border-[#e5eadf]">
                <h3 className="text-xl font-serif font-bold text-[#0d4f26] mb-6">Our Quality Standards</h3>
                <ul className="space-y-4">
                  {standards.map((std, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm font-semibold text-gray-800 leading-snug">{std}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Right: We Ensure */}
              <ScrollReveal variant="fadeRight" delay={0.1} className="w-full lg:w-1/2 bg-[#f6f8f4] rounded-2xl p-8 flex flex-col border border-[#e5eadf] relative overflow-hidden">
                {/* Subtle Watermark icon */}
                <FlaskConical className="absolute -bottom-10 -right-10 text-white/40 w-64 h-64 pointer-events-none" />
                
                <h3 className="text-xl font-serif font-bold text-[#0d4f26] mb-6 relative z-10">We Ensure</h3>
                <ul className="space-y-5 relative z-10">
                  {assurances.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="text-[#88b04b] flex-shrink-0" size={20} />
                      <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Middle: 3 Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{src: advancedTestingImg, alt: 'Advanced Testing', title: 'Advanced Testing', desc: 'Our state-of-the-art laboratories are equipped with cutting-edge technology for precise botanical analysis. Every batch undergoes rigorous testing for purity, potency, and safety to ensure maximum efficacy.'}, {src: expertTeamImg, alt: 'Expert Team', title: 'Expert Team', desc: 'Our skilled professionals bring decades of experience in botanical sciences and quality control. They meticulously oversee every step of the process, ensuring the highest global quality benchmarks are met.'}, {src: hygienicFacilitiesImg, alt: 'Hygienic Facilities', title: 'Hygienic Facilities', desc: 'Our modern processing facilities are designed around strict hygiene and safety protocols. We maintain an immaculate environment to prevent contamination and preserve the natural integrity of our extracts.'}].map((card, i) => (
                <ScrollReveal key={card.title} variant="zoomInSlight" delay={i * 0.12} className="flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="flex-1 min-h-[160px]"><img src={card.src} alt={card.alt} className="w-full h-full object-cover" /></div>
                  <div className="bg-[#0d4f26] text-white p-6 text-center flex flex-col justify-center min-h-[140px]">
                    <h4 className="font-bold text-xl mb-3 text-white underline underline-offset-4 decoration-[#c1a755]">{card.title}</h4>
                    <p className="text-xs text-gray-200 leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}</div>
          </div>
        </div>
      </section>

      {/* Footer Promise Bar */}
      <section className="py-8 bg-[#f9f9f6] border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white flex-shrink-0">
                <Leaf className="text-[#0d4f26]" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#0d4f26]">
                Quality is not just a process, <br className="hidden md:block"/>it's our promise.
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <Award className="text-[#88b04b]" size={24} />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Tested & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="text-[#88b04b]" size={24} />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#88b04b]" size={24} />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Safe & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-[#88b04b]" size={24} />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Trusted Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
