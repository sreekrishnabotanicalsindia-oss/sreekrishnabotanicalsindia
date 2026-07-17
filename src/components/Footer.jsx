import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight, Headset, ShieldCheck, Leaf, Award, Handshake, FlaskConical, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ctaLeftImg from '../assets/ChatGPT Image Jul 11, 2026, 06_32_35 PM.png';
import ctaRightImg from '../assets/ChatGPT Image Jul 11, 2026, 06_35_18 PM.png';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full relative">
      {/* Top Full-Width CTA Strip */}
      <div className="w-full bg-[#f2f4e9] relative z-20 py-6 md:py-10 border-b-4 border-[#0b2816] overflow-hidden">
        
        {/* Left side Image Placeholder */}
        <div className="absolute left-[-30px] md:left-0 bottom-0 h-full w-32 sm:w-40 md:w-64 xl:w-96 pointer-events-none opacity-40 md:opacity-100">
            <img 
                src={ctaLeftImg} 
                alt="Oil" 
                className="w-full h-full object-contain object-left-bottom mix-blend-multiply"
            />
        </div>

        {/* Right side Image Placeholder */}
        <div className="absolute right-[-30px] md:right-0 bottom-0 h-full w-32 sm:w-40 md:w-72 xl:w-96 pointer-events-none opacity-40 md:opacity-100">
            <img 
                src={ctaRightImg} 
                alt="Leaves" 
                className="w-full h-full object-contain object-right-bottom mix-blend-multiply"
            />
        </div>

        <div className="container mx-auto px-1 md:px-4 relative z-10 flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-16">
            
            {/* Icon and Text */}
            <div className="flex items-center gap-1.5 md:gap-4 text-left">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#e3e8d8] flex items-center justify-center shrink-0 border border-white md:border-2 shadow-sm">
                    <Headset className="text-[#0d4f26] w-4 h-4 md:w-7 md:h-7" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xs sm:text-sm md:text-3xl font-serif font-bold text-[#0d4f26] mb-0 md:mb-1">Let's Connect</h3>
                    <p className="text-[7px] sm:text-[9px] md:text-sm text-gray-700 font-medium leading-[1.2] md:leading-normal max-w-[100px] md:max-w-none">Have a question or need more <br className="hidden md:block"/>information? We're here to help.</p>
                </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 md:h-16 bg-gray-300"></div>

            {/* Action */}
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-3">
                <Link to="/contact" className="bg-[#0d4f26] hover:bg-[#156a31] text-white px-3 py-1.5 md:px-8 md:py-3 rounded md:rounded-md font-bold text-[8px] sm:text-[10px] md:text-sm transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md whitespace-nowrap">
                    Request a Quote <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
                <div className="flex items-center gap-1 md:gap-1.5 text-[6px] sm:text-[8px] md:text-xs text-gray-600 font-medium whitespace-nowrap">
                    <CheckCircle2 className="text-[#0d4f26] w-2.5 h-2.5 md:w-3.5 md:h-3.5" strokeWidth={2.5} />
                    We respond within 24 hours
                </div>
            </div>
            
        </div>
      </div>

      {/* Main Dark Footer Area */}
      <div className="bg-[#0b2816] pt-12 md:pt-16 pb-6 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* 5-Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-6 mb-16">
            
            {/* Column 1: Logo & Intro (Takes up more space) */}
            <div className="col-span-2 lg:col-span-4 flex flex-col gap-4 items-start pr-0 lg:pr-8">
              <Link to="/" className="flex flex-col items-start gap-1">
                <img src={logo} alt="Sree Krishna Botanicals Logo" className="h-16 md:h-20 w-auto object-contain bg-white rounded-md p-2" />
              </Link>
              
              <p className="text-xs text-green-50 leading-relaxed font-light">
                We are a leading manufacturer, exporter and supplier of high-quality botanical extracts and essential oils, delivering nature's goodness to the world.
              </p>
              
              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61591655908221" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2816] transition-colors"><FaFacebookF size={14} /></a>
                <a href="https://www.instagram.com/sreekrishnabotanicalsindia/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2816] transition-colors"><FaInstagram size={14} /></a>
                <a href="https://x.com/SreeKrishna_Ind" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2816] transition-colors"><FaXTwitter size={14} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6 text-white relative inline-block pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#c1a755]"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Home</Link></li>
                <li><Link to="/about" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> About Us</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Products</Link></li>
                <li><Link to="/extraction-process" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Extraction Process</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Industries</Link></li>
                <li><Link to="/quality" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Quality</Link></li>
                <li><Link to="/exports" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Exports</Link></li>
                <li><Link to="/contact" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Products */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6 text-white relative inline-block pb-2">
                Our Products
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#c1a755]"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Botanical Extracts</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Essential Oils</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Oleoresins</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Herbal Powders</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Floral Extracts</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Spice Extracts</Link></li>
                <li><Link to="/products" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Fruit Extracts</Link></li>
                <li><Link to="/contact" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Custom Solutions</Link></li>
              </ul>
            </div>

            {/* Column 4: Industries We Serve */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6 text-white relative inline-block pb-2">
                Industries We Serve
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#c1a755]"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Food & Beverages</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Nutraceuticals</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Cosmetics & Personal Care</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Pharmaceuticals</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Aromatherapy</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Animal Nutrition</Link></li>
                <li><Link to="/industries" className="text-green-50 text-xs font-light hover:text-[#c1a755] transition-colors flex items-center gap-2"><ChevronRight size={12} className="text-[#c1a755]"/> Household Products</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6 text-white relative inline-block pb-2">
                Contact Us
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#c1a755]"></span>
              </h4>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-3 text-green-50 items-start">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#c1a755]" size={14} />
                  </div>
                  <div>
                      <span className="block text-[11px] font-bold text-white mb-0.5">Address</span>
                      <span className="text-[10px] leading-relaxed font-light">Plot No. 123, Green Valley Industrial Area,<br/>Karakapatla, Anantapur - 515002,<br/>Andhra Pradesh, India.</span>
                  </div>
                </li>
                <li className="flex gap-3 text-green-50 items-start">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Phone className="text-[#c1a755]" size={14} />
                  </div>
                  <div>
                      <span className="block text-[11px] font-bold text-white mb-0.5">Phone</span>
                      <span className="text-[10px] font-light block">+91 9327336699</span>
                  </div>
                </li>
                <li className="flex gap-3 text-green-50 items-start">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Mail className="text-[#c1a755]" size={14} />
                  </div>
                  <div>
                      <span className="block text-[11px] font-bold text-white mb-0.5">Email</span>
                      <span className="text-[10px] font-light block break-all">support@sreekrishnabotanicals.info</span>
                  </div>
                </li>
                <li className="flex gap-3 text-green-50 items-start">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Globe className="text-[#c1a755]" size={14} />
                  </div>
                  <div>
                      <span className="block text-[11px] font-bold text-white mb-0.5">Website</span>
                      <span className="text-[10px] font-light block break-all">www.sreekrishnabotanicals.com</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Features Strip */}
          <div className="py-8 border-y border-white/10 mb-6 relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="flex items-center gap-3">
                    <Leaf size={32} className="text-[#a4d16d] font-light" strokeWidth={1.5} />
                    <div>
                        <h5 className="text-white text-xs font-bold mb-0.5">100% Natural</h5>
                        <p className="text-green-50/70 text-[10px]">Pure & Safe</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Award size={32} className="text-[#a4d16d] font-light" strokeWidth={1.5} />
                    <div>
                        <h5 className="text-white text-xs font-bold mb-0.5">Premium Quality</h5>
                        <p className="text-green-50/70 text-[10px]">International Standards</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Globe size={32} className="text-[#a4d16d] font-light" strokeWidth={1.5} />
                    <div>
                        <h5 className="text-white text-xs font-bold mb-0.5">Trusted Worldwide</h5>
                        <p className="text-green-50/70 text-[10px]">40+ Countries</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck size={32} className="text-[#a4d16d] font-light" strokeWidth={1.5} />
                    <div>
                        <h5 className="text-white text-xs font-bold mb-0.5">Ethical & Sustainable</h5>
                        <p className="text-green-50/70 text-[10px]">Sourcing</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Handshake size={32} className="text-[#a4d16d] font-light" strokeWidth={1.5} />
                    <div>
                        <h5 className="text-white text-xs font-bold mb-0.5">Customer Satisfaction</h5>
                        <p className="text-green-50/70 text-[10px]">Our Priority</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative py-2">
            <p className="text-green-50/60 text-[10px] font-medium">
              &copy; 2024 Sree Krishna Botanicals. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-[10px] text-green-50/60 font-medium">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="w-px h-3 bg-white/20"></span>
                <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <span className="w-px h-3 bg-white/20"></span>
                <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
             <FlaskConical size={120} className="text-white" />
          </div>

        </div>
      </div>
    </footer>
  );
}
