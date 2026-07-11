import { Helmet } from 'react-helmet-async';
import { Leaf, Wind, Activity, Filter, Box, Droplets, Droplet, Settings, ShieldCheck, Package, Globe, Zap } from 'lucide-react';
import heroImage from '../assets/Extraction process hero image.png';
import imgRawMaterials from '../assets/step_1_raw_materials.png';
import imgCleaning from '../assets/step_2_cleaning.png';
import imgDrying from '../assets/Drying.png';
import imgGrinding from '../assets/grinding.png';
import imgExtraction from '../assets/about_extraction_equip.png';
import imgFiltration from '../assets/oleoresins.png';
import imgConcentration from '../assets/powder_items.png';
import imgTesting from '../assets/about_quality_scientist.png';
import imgPackaging from '../assets/about_warehouse.png';
import trustBgImg from '../assets/ChatGPT Image Jul 11, 2026, 06_53_00 PM.png';

const steps = [
  { id: 1, title: 'Raw Material Selection', img: imgRawMaterials, icon: Leaf, desc: 'We source premium quality botanicals from trusted farmers and suppliers.' },
  { id: 2, title: 'Cleaning & Washing', img: imgCleaning, icon: Droplets, desc: 'Raw materials are cleaned thoroughly to remove impurities and residues.' },
  { id: 3, title: 'Drying', img: imgDrying, icon: Wind, desc: 'Carefully dried under controlled conditions to retain natural actives.' },
  { id: 4, title: 'Grinding', img: imgGrinding, icon: Settings, desc: 'Botanicals are ground to the right particle size for efficient extraction.' },
  { id: 5, title: 'Extraction', img: imgExtraction, icon: Droplet, desc: 'Advanced extraction using solvent or water to pull out active compounds.' },
  { id: 6, title: 'Filtration', img: imgFiltration, icon: Filter, desc: 'Filtration removes solids and impurities to ensure a pure extract.' },
  { id: 7, title: 'Concentration', img: imgConcentration, icon: Activity, desc: 'Extract is concentrated under controlled temperature to achieve desired potency.' },
  { id: 8, title: 'Quality Testing', img: imgTesting, icon: ShieldCheck, desc: 'Rigorous in-house testing ensures purity, potency, safety and consistency.' },
  { id: 9, title: 'Packaging & Storage', img: imgPackaging, icon: Package, desc: 'Packed in high-quality, food-grade packaging and stored in controlled conditions.' },
];

export default function ExtractionProcess() {
  return (
    <>
      <Helmet>
        <title>Extraction Process | Sree Krishna Botanicals</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-white">
        {/* Background Image that dictates the height to show the full image */}
        <img 
          src={heroImage} 
          alt="Extraction Equipment" 
          className="w-full h-auto block"
        />
        

        
        {/* Wave Divider */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none text-white">
          <svg className="relative block w-full h-[30px] sm:h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V120H1200V0C1032,100,560,140,0,0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-1">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c1a755]"></div>
              <h2 className="text-2xl font-bold text-[#0d4f26]">Our Extraction Process</h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c1a755]"></div>
            </div>
            <Droplet className="text-[#c1a755] fill-[#c1a755] mx-auto mt-1 mb-3" size={12} />
            <p className="text-gray-600 text-sm">From nature to purity – a seamless journey of quality and care.</p>
          </div>

          {/* Timeline Row */}
          <div className="relative max-w-7xl mx-auto">
            {/* Dashed Line */}
            <div className="hidden lg:block absolute top-[15px] left-12 right-12 h-px border-t border-dashed border-[#81bd94] z-0"></div>

            <div className="flex flex-row flex-nowrap overflow-x-auto lg:overflow-x-visible justify-between gap-4 pb-8 lg:pb-0 scrollbar-hide px-2">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center w-[120px] shrink-0 relative">
                  {/* Circle Number */}
                  <div className="w-8 h-8 rounded-full bg-[#0d4f26] text-white font-bold flex items-center justify-center text-sm mb-6 z-10 shadow-md">
                    {step.id}
                  </div>
                  
                  {/* Image Container with icon */}
                  <div className="relative mb-6">
                    <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-sm border-2 border-white ring-1 ring-gray-100">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-[#81bd94] shadow-sm flex items-center justify-center text-[#0d4f26]">
                      <step.icon size={16} strokeWidth={2} />
                    </div>
                  </div>

                  <h4 className="font-bold text-[#0d4f26] text-[13px] leading-tight mb-2 h-8 flex items-center justify-center">{step.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-snug px-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
            
            {/* Left Box: Why Our Process Matters */}
            <div className="lg:w-7/12 bg-[#f9faf9] rounded-2xl p-8 lg:p-10 flex flex-col justify-center border border-gray-100">
              <h3 className="text-xl font-bold text-[#0d4f26] mb-8 text-center">Why Our Process Matters</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center text-[#0d4f26] mb-3 bg-white">
                    <Leaf size={20} strokeWidth={2} />
                  </div>
                  <h5 className="font-bold text-[#0d4f26] text-[11px] mb-1">Maximum Potency</h5>
                  <p className="text-gray-500 text-[9px] leading-tight px-1">Advanced technology preserves natural actives.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center text-[#0d4f26] mb-3 bg-white">
                    <ShieldCheck size={20} strokeWidth={2} />
                  </div>
                  <h5 className="font-bold text-[#0d4f26] text-[11px] mb-1">Pure & Safe</h5>
                  <p className="text-gray-500 text-[9px] leading-tight px-1">No harmful chemicals. Only clean, natural extracts.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center text-[#0d4f26] mb-3 bg-white">
                    <Activity size={20} strokeWidth={2} />
                  </div>
                  <h5 className="font-bold text-[#0d4f26] text-[11px] mb-1">Consistent Quality</h5>
                  <p className="text-gray-500 text-[9px] leading-tight px-1">Standardized process for every batch, every time.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center text-[#0d4f26] mb-3 bg-white">
                    <Package size={20} strokeWidth={2} />
                  </div>
                  <h5 className="font-bold text-[#0d4f26] text-[11px] mb-1">Fully Traceable</h5>
                  <p className="text-gray-500 text-[9px] leading-tight px-1">From farm to final product with complete transparency.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center text-[#0d4f26] mb-3 bg-white">
                    <Globe size={20} strokeWidth={2} />
                  </div>
                  <h5 className="font-bold text-[#0d4f26] text-[11px] mb-1">Sustainable</h5>
                  <p className="text-gray-500 text-[9px] leading-tight px-1">Eco-friendly extraction with responsible practices.</p>
                </div>
              </div>
            </div>

            {/* Right Box: Trust */}
            <div className="lg:w-5/12 rounded-2xl overflow-hidden relative bg-[#0a3a1c]">
              <div className="absolute inset-y-0 right-0 w-2/3 lg:w-3/4">
                <img src={trustBgImg} alt="Oil Drip" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a3a1c]/80 to-[#0a3a1c]"></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-center items-start text-left">
                
                <div className="mb-6">
                  <div className="flex justify-start mb-3"><Droplet className="text-[#c1a755] fill-[#c1a755]" size={16} /></div>
                  <h3 className="text-2xl text-white font-serif italic font-light leading-snug">
                    We don't just extract <br/>ingredients,<br/>
                    <span className="font-sans font-bold text-[#c1a755] not-italic">We extract trust.</span>
                  </h3>
                </div>
                
                <div className="flex gap-6 justify-start text-[#c1a755]">
                  <div className="flex flex-col items-center gap-1">
                    <Leaf size={18} strokeWidth={1.5} />
                    <span className="text-[9px] tracking-widest uppercase font-bold text-white">Natural</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Droplet size={18} strokeWidth={1.5} />
                    <span className="text-[9px] tracking-widest uppercase font-bold text-white">Pure</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap size={18} strokeWidth={1.5} />
                    <span className="text-[9px] tracking-widest uppercase font-bold text-white">Powerful</span>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
