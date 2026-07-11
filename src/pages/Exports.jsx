import { Helmet } from 'react-helmet-async';
import { Leaf, Globe, ShieldCheck, Award, CheckCircle2, ClipboardList, FlaskConical, FileText, Factory, Box, Plane, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import exportHeroImg from '../assets/export hero image.png';
import globalPartnersImg from '../assets/ChatGPT Image Jul 11, 2026, 06_45_03 PM.png';
import ctaBannerBgImg from '../assets/ChatGPT Image Jul 11, 2026, 06_53_00 PM.png';

const exportSteps = [
  { id: 1, title: 'Inquiry & Requirement', icon: ClipboardList, desc: 'Understanding your requirements.' },
  { id: 2, title: 'Sampling & Approval', icon: FlaskConical, desc: 'Providing samples for quality approval.' },
  { id: 3, title: 'Order Confirmation', icon: FileText, desc: 'Confirming order with specifications.' },
  { id: 4, title: 'Production & Quality Check', icon: Factory, desc: 'Manufacturing with strict quality control.' },
  { id: 5, title: 'Packaging', icon: Box, desc: 'Secure & export-ready packaging.' },
  { id: 6, title: 'Shipping', icon: Plane, desc: 'Timely dispatch via air or sea freight.' },
  { id: 7, title: 'Delivery & Support', icon: HeartHandshake, desc: 'On-time delivery with continuous support.' },
];

export default function Exports() {
  return (
    <div className="bg-[#fcfdfa] min-h-screen font-sans text-gray-800">
      <Helmet>
        <title>Global Exports | Sree Krishna Botanicals</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#eaf1e6]">
        <img 
          src={exportHeroImg} 
          alt="Global Shipping" 
          className="w-full h-auto block object-cover object-center"
        />
      </section>

      {/* Global Reach & Why Choose Us */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Global Reach */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0d4f26] mb-6 flex items-center gap-3">
                Global Reach, Natural Impact
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                Our commitment to quality and sustainability has earned the trust of businesses across the globe. We export to 40+ countries and continue to expand our footprint every day.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start items-center gap-2 text-[#0d4f26] mb-1">
                    <Globe size={20} />
                    <span className="text-xl md:text-2xl font-bold">40+</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Countries</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start items-center gap-2 text-[#0d4f26] mb-1">
                    <Leaf size={20} />
                    <span className="text-xl md:text-2xl font-bold">200+</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Global Clients</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start items-center gap-2 text-[#0d4f26] mb-1">
                    <Box size={20} />
                    <span className="text-xl md:text-2xl font-bold">500+</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Products Shipped</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start items-center gap-2 text-[#0d4f26] mb-1">
                    <HeartHandshake size={20} />
                    <span className="text-xl md:text-2xl font-bold">100%</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Column: Why Global Partners Choose Us */}
            <div className="w-full lg:w-1/2 bg-[#f6f8f4] rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center border border-[#e5eadf]">
              <div className="w-full md:w-3/5 z-10 relative">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0d4f26] mb-6">Why Global Partners Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800">Consistent quality with every shipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800">Compliance with international standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800">Secure & hygienic packaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800">On-time delivery, every time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#88b04b] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800">Transparent communication & support</span>
                    </li>
                  </ul>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center md:justify-end z-10 relative">
                  <img 
                      src={globalPartnersImg} 
                      alt="Global Partners Bags" 
                      className="rounded-lg shadow-md max-w-xs md:max-w-none w-full h-auto object-cover border-4 border-white"
                  />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Export Process */}
      <section className="pt-8 md:pt-12 pb-16 bg-[#fcfdfa]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#c1a755]"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0d4f26]">
                Our Export Process
              </h2>
              <div className="w-16 h-px bg-[#c1a755]"></div>
            </div>
          </div>

          <div className="relative">
            {/* Dotted Line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-[5%] right-[5%] h-0 border-t-2 border-dashed border-gray-300 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4 relative z-10">
              {exportSteps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-green-800 flex items-center justify-center mb-4 relative z-10 bg-white shadow-sm">
                    <step.icon className="text-green-800 w-6 h-6" />
                  </div>
                  
                  <h3 className="font-bold text-[#0d4f26] text-xs mb-2">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] leading-relaxed max-w-[120px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e5eadf]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
            
            {/* Left: Certifications */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-10">
                 <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0d4f26]">Certifications & Compliance</h2>
                 <div className="flex-1 h-px bg-[#c1a755] opacity-50"></div>
              </div>
              
              <div className="flex flex-wrap justify-between gap-4">
                  {/* Mock Certification Logos */}
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <span className="font-black text-[#0d4f26] text-xl">ISO</span>
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">ISO 9001:2015<br/>Certified</p>
                  </div>
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <span className="font-black text-[#0d4f26] text-xl">GMP</span>
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">GMP Certified<br/>Facility</p>
                  </div>
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <span className="font-bold text-[#0d4f26] text-base">حلال</span>
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">HALAL<br/>Certified</p>
                  </div>
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <span className="font-black text-[#0d4f26] text-xl">K</span>
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">Kosher<br/>Certified</p>
                  </div>
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <span className="font-bold text-[#0d4f26] text-[10px] text-center leading-tight">USDA<br/>ORGANIC</span>
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">USDA<br/>Compliant</p>
                  </div>
                  <div className="flex flex-col items-center text-center group cursor-default w-20">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:border-green-800 transition-colors">
                          <ShieldCheck className="text-[#0d4f26] w-6 h-6" />
                      </div>
                      <p className="text-[9px] text-gray-500 uppercase font-semibold">REACH<br/>Compliant</p>
                  </div>
              </div>
            </div>

            {/* Right: CTA Banner */}
            <div className="w-full lg:w-1/2">
                <div className="bg-[#105a2b] rounded-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center text-white shadow-md min-h-[250px]">
                    <img 
                        src={ctaBannerBgImg} 
                        alt="Background Texture" 
                        className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-50"
                    />
                    <div className="relative z-10 w-full flex flex-col items-start">
                        <div className="flex items-center gap-4 mb-5 w-full">
                            <div className="w-12 h-px bg-[#c1a755]"></div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Let's Grow Together</h3>
                            <div className="w-12 h-px bg-[#c1a755]"></div>
                        </div>
                        <p className="text-sm md:text-base font-light text-white mb-8 leading-relaxed max-w-sm">
                            We are always open to new partnerships and opportunities to bring the goodness of nature to more people worldwide.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d1a03a] hover:bg-[#b0852e] text-white px-8 py-3 rounded-full font-bold text-sm transition-colors shadow-sm">
                            Request a Quote
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
