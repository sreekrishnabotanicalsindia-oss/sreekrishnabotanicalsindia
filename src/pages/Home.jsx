import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import {
  ArrowRight,
  MessageSquare,
  Leaf,
  MapPin,
  Globe2,
  Award,
  Globe,
  Users,
  Box,
  Sprout,
  CalendarDays,
  Smile,
  ShieldCheck,
  Microscope,
  Sparkles,
  Utensils,
  Pill,
  HeartPulse,
  Flower2,
  Flame,
  Palette,
  CheckCircle2,
  Quote,
  Star
} from 'lucide-react';

import heroImage from '../assets/hero.png';
import qualityImg from '../assets/quality_assurance.png';
import sustainabilityImg from '../assets/sustainability.png';
import globalReachImg from '../assets/global_reach.png';
import oleoresinsImg from '../assets/oleoresins.png';
import powderItemsImg from '../assets/powder_items.png';
import wholeSpicesImg from '../assets/whole_spices.png';
import aboutMainImg from '../assets/about_main.png';
import aboutLabImg from '../assets/about_lab.png';
import aboutFarmerImg from '../assets/about_farmer.png';

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const reviewsData = [
    [
      { text: "Excellent quality and consistent supply. Sree Krishna Botanicals is our trusted partner.", name: "John Miller", loc: "USA" },
      { text: "The purity and color of their oleoresins are unmatched. Highly recommended!", name: "Maria Garcia", loc: "Spain" },
      { text: "Professional team, great support and on-time delivery every time.", name: "Ahmed Khan", loc: "UAE" }
    ],
    [
      { text: "Their natural food colorings have transformed our product line. Superb quality.", name: "Li Wei", loc: "China" },
      { text: "A truly reliable source for premium extracts. We appreciate their sustainable practices.", name: "Sophie Laurent", loc: "France" },
      { text: "Incredible attention to detail and customer service. They always deliver.", name: "Daniel Smith", loc: "Australia" }
    ],
    [
      { text: "Top notch organic ingredients. Our customers love the rich flavor profiles.", name: "Elena Rossi", loc: "Italy" },
      { text: "Fast shipping and secure packaging. We've never had a single damaged shipment.", name: "Kenji Sato", loc: "Japan" },
      { text: "Their spice extracts are potent and pure. A game changer for our formulations.", name: "Priya Sharma", loc: "India" }
    ]
  ];


  return (
    <>
      <Helmet>
        <title>Sree Krishna Botanicals | Essential Oils & Botanical Extracts Manufacturer India</title>
        <meta name="description" content="Sree Krishna Botanicals is a leading manufacturer and exporter of premium quality essential oils, oleoresins, spice extracts, and botanical extracts from India. Trusted globally." />
        <meta name="keywords" content="Sree Krishna, Sree Krishna Botanicals, essential oils India, essential oils supplier, pure essential oils, oleoresin manufacturer India, spice extracts exporter, botanical extracts India, natural spice extracts, food grade oleoresin, Sree Krishna essential oils, spice oil India, herbal extracts India, bulk essential oils" />
        <meta name="author" content="Sree Krishna Botanicals" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://sreekrishnabotanicals.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sreekrishnabotanicals.com/" />
        <meta property="og:title" content="Sree Krishna Botanicals | Essential Oils & Botanical Extracts" />
        <meta property="og:description" content="Leading manufacturer and exporter of premium quality essential oils, oleoresins, and botanical extracts from India." />
        <meta property="og:image" content="https://sreekrishnabotanicals.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Sree Krishna Botanicals" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sree Krishna Botanicals | Essential Oils & Botanical Extracts" />
        <meta name="twitter:description" content="Leading manufacturer and exporter of premium quality essential oils and botanical extracts from India." />
        <meta name="twitter:image" content="https://sreekrishnabotanicals.com/og-image.jpg" />
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sree Krishna Botanicals",
            "url": "https://sreekrishnabotanicals.com",
            "logo": "https://sreekrishnabotanicals.com/logo.png",
            "description": "Leading manufacturer and exporter of premium quality oleoresins, spice extracts, and botanical extracts from India.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "PT. 33, Sy. No. 88/1 & 89/1, Lingampalli, Serilingampally",
              "addressLocality": "K.V.Rangareddy",
              "postalCode": "500019",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Telugu", "Hindi"]
            },
            "sameAs": [
              "https://github.com/sreekrishnabotanicalsindia-oss/sreekrishnabotanicalsindia"
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero Section Container */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f7f0] to-[#e4eedb] lg:bg-none">
        
        {/* Background Image Container - Dictates height on mobile, full screen on desktop */}
        <div className="relative w-full h-auto lg:h-screen">
          <img 
            src={heroImage} 
            alt="Sree Krishna Botanicals Hero" 
            className="w-full h-full lg:object-cover lg:object-center object-contain block"
          />

          {/* Absolute Text Overlay */}
          <div className="absolute inset-0 z-10 container mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center">
            
            {/* Left Content Area - Restricted width to not cover the right side */}
            <div className="w-[55%] sm:w-[50%] lg:w-1/2 flex flex-col justify-center">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                <span className="text-[clamp(14px,3.5vw,60px)] leading-[1.1] font-body text-[#3f5742] font-light tracking-wide mb-[1%] lg:mb-2 uppercase">
                  NATURE EXTRACTED.
                </span>
                <span className="text-[clamp(14px,3.5vw,60px)] leading-[1.1] font-body text-[#0d4f26] font-bold tracking-tight mb-[3%] lg:mb-6 uppercase">
                  PURITY DELIVERED.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#2c4731] text-[clamp(8px,1.8vw,20px)] leading-[1.3] font-medium mb-[5%] lg:mb-12 max-w-lg"
              >
                Premium Oleoresins, Powders & Spices from Nature to the World.
              </motion.p>

              {/* 4 Circular Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-[clamp(6px,1.5vw,40px)] mb-[5%] lg:mb-12"
              >
                {[
                  { icon: Leaf, label: "100%\nNATURAL" },
                  { icon: MapPin, label: "MADE IN\nINDIA" },
                  { icon: Globe2, label: "EXPORT\nWORLDWIDE" },
                  { icon: Award, label: "ISO\nCERTIFIED" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center group">
                    <div className="w-[clamp(24px,5vw,64px)] h-[clamp(24px,5vw,64px)] rounded-full border border-brand-gold/60 flex items-center justify-center mb-1 lg:mb-3 bg-white/50 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <item.icon size={20} className="text-[#0d4f26] w-[clamp(12px,2.5vw,28px)] h-[clamp(12px,2.5vw,28px)]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[clamp(5px,1.2vw,10px)] uppercase font-bold text-[#0d4f26] whitespace-pre-line leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-2 lg:gap-4"
              >
                <Link
                  to="/products"
                  className="bg-[#0b3c1d] text-white px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] rounded text-[clamp(6px,1.5vw,14px)] font-bold tracking-wide flex items-center justify-center gap-1 lg:gap-2 hover:bg-[#12572b] transition-colors shadow-md"
                >
                  EXPLORE PRODUCTS
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-[#0b3c1d] border border-[#d4af37] px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] rounded text-[clamp(6px,1.5vw,14px)] font-bold tracking-wide flex items-center justify-center gap-1 lg:gap-2 hover:bg-[#fffdf5] transition-colors shadow-sm"
                >
                  GET A QUOTE <MessageSquare size={14} className="text-[#d4af37] w-[clamp(8px,1.5vw,16px)] h-[clamp(8px,1.5vw,16px)]" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Bottom Stats Bar */}
      <div className="relative z-30 container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 mt-4 sm:mt-8 lg:-mt-24 mb-8 lg:mb-0">
        <div className="bg-[#063318] rounded-2xl p-4 py-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl grid grid-cols-3 md:flex md:flex-wrap md:justify-between items-start md:items-center gap-y-6 gap-x-2 md:gap-6 border-b-4 border-brand-primaryGreen">

          {[
            { icon: Box, count: "100+", label: "Products" },
            { icon: Sprout, count: "1000+", label: "Farmers\nNetwork" },
            { icon: Smile, count: "99%", label: "Customer\nSatisfaction" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start text-center flex-1 md:min-w-[120px] relative">
              {/* Divider lines between items except last one */}
              {idx !== 5 && (
                <div className="hidden lg:block absolute right-[-50%] lg:right-[-20%] xl:right-[-15%] top-1/2 -translate-y-1/2 h-12 w-px bg-white/10"></div>
              )}

              <div className="text-[#c1a755] mb-1 sm:mb-2">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-lg sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 leading-tight">{stat.count}</h4>
              <p className="text-[#8ab398] text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider font-semibold text-center whitespace-pre-line leading-tight">{stat.label}</p>
            </div>
          ))}

        </div>
      </div>

      {/* About Us Module */}
      <section className="pt-4 pb-4 md:pt-12 md:pb-8 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">

            {/* Left Images */}
            <ScrollReveal variant="fadeLeft" className="w-full lg:w-1/2 flex gap-4 h-[450px]">
              {/* Main Large Image */}
              <div className="w-2/3 h-full relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl border-b-[6px] border-l-[6px] border-[#c1a755]">
                <img
                  src={aboutMainImg}
                  alt="Sree Krishna Facility"
                  className="w-full h-full object-cover"
                />
                {/* Decorative Leaves Overlay */}
                <img
                  src="https://images.unsplash.com/photo-1618683162772-7634f19b26e9?q=80&w=600&auto=format&fit=crop"
                  alt="Leaves"
                  className="absolute bottom-[-10%] left-[-10%] w-32 md:w-48 opacity-90 mix-blend-multiply"
                />
              </div>

              {/* Stacked Small Images */}
              <div className="w-1/3 h-full flex flex-col gap-4">
                <div className="flex-1 rounded-[40px] overflow-hidden shadow-md">
                  <img src={aboutLabImg} alt="Laboratory" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-[40px] overflow-hidden shadow-md">
                  <img src={aboutFarmerImg} alt="Farmer" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal variant="fadeRight" delay={0.15} className="w-full lg:w-1/2">
              <span className="text-[#a88931] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0d4f26] leading-tight mb-6">
                Bringing Nature's <br /> Finest to the World
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                We are a forward-looking agribusiness dedicated to exporting premium-quality chillies and manufacturing high-value oleoresin using advanced extraction technology.
              </p>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
                Our mission is to transform India's finest botanicals into world-class products that meet the highest international standards of quality, safety, and consistency. By partnering with trusted farmers and implementing strict quality control throughout the process, we ensure purity, potency and traceability in every batch.
              </p>

              <button className="bg-[#0b3c1d] text-white px-6 py-3 rounded-md text-sm font-bold tracking-wide flex items-center gap-3 hover:bg-[#12572b] transition-colors shadow-md">
                READ MORE ABOUT US <ArrowRight size={16} className="text-[#d4af37]" />
              </button>

              <div className="h-px w-full bg-gray-200 my-10"></div>

              {/* Bottom 3 Features */}
              <div className="w-full overflow-hidden md:overflow-visible">
                <div className="flex animate-marquee md:animate-none w-max md:w-full md:flex-wrap gap-6 md:gap-8 pb-2">
                  {[
                    { icon: ShieldCheck, title: "Premium Quality", desc: "Natural Products" },
                    { icon: Microscope, title: "Advanced", desc: "Extraction Technology" },
                    { icon: Leaf, title: "Sustainable", desc: "& Ethical Practices" },
                    // Duplicates for mobile marquee
                    { icon: ShieldCheck, title: "Premium Quality", desc: "Natural Products", isDup: true },
                    { icon: Microscope, title: "Advanced", desc: "Extraction Technology", isDup: true },
                    { icon: Leaf, title: "Sustainable", desc: "& Ethical Practices", isDup: true },
                  ].map((feat, idx) => (
                    <div key={idx} className={`flex items-center gap-3 shrink-0 pr-4 md:pr-0 ${feat.isDup ? 'md:hidden' : ''}`}>
                      <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#0d4f26]">
                        <feat.icon size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#0d4f26]">{feat.title}</span>
                        <span className="text-[10px] text-gray-500">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="pt-4 pb-16 md:py-12 bg-[#fcfdfa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">

          <ScrollReveal className="text-center mb-12">
            <span className="text-[#8b9185] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">OUR PRODUCTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0d4f26]">
              Wide Range of Natural Products
            </h2>
          </ScrollReveal>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">

            {/* Card 1: Oleoresins */}
            <ScrollReveal variant="zoomInSlight" delay={0} className="group relative h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-lg border-2 border-transparent hover:border-[#0d4f26] transition-all duration-300">
              <img
                src={oleoresinsImg}
                alt="Oleoresins"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-white text-2xl font-bold tracking-wider mb-4">OLEORESINS</h3>
                <p className="text-gray-300 text-sm max-w-[250px] leading-relaxed mb-6 font-light">
                  Concentrated extracts that capture the natural essence and potency.
                </p>
                <button className="self-start mt-auto md:mt-0 border border-white/40 rounded-full px-6 py-2.5 text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                  VIEW PRODUCTS <ArrowRight size={14} className="text-[#d4af37]" />
                </button>
              </div>
            </ScrollReveal>

            {/* Card 2: Powder Items */}
            <ScrollReveal variant="zoomInSlight" delay={0.1} className="group relative h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-lg border-2 border-transparent hover:border-[#0d4f26] transition-all duration-300">
              <img
                src={powderItemsImg}
                alt="Powder Items"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-white text-2xl font-bold tracking-wider mb-4">POWDER ITEMS</h3>
                <p className="text-gray-300 text-sm max-w-[250px] leading-relaxed mb-6 font-light">
                  Finely processed powders ensuring purity, flavor and rich aroma.
                </p>
                <button className="self-start mt-auto md:mt-0 border border-white/40 rounded-full px-6 py-2.5 text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                  VIEW PRODUCTS <ArrowRight size={14} className="text-[#d4af37]" />
                </button>
              </div>
            </ScrollReveal>

            {/* Card 3: Whole Spices */}
            <ScrollReveal variant="zoomInSlight" delay={0.2} className="group relative h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-lg border-2 border-transparent hover:border-[#0d4f26] transition-all duration-300">
              <img
                src={wholeSpicesImg}
                alt="Whole Spices"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-white text-2xl font-bold tracking-wider mb-4">WHOLE SPICES</h3>
                <p className="text-gray-300 text-sm max-w-[250px] leading-relaxed mb-6 font-light">
                  Handpicked spices with natural oils and authentic flavor.
                </p>
                <button className="self-start mt-auto md:mt-0 border border-white/40 rounded-full px-6 py-2.5 text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                  VIEW PRODUCTS <ArrowRight size={14} className="text-[#d4af37]" />
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <Link
              to="/products"
              className="bg-[#063318] text-white px-8 py-3 rounded-md text-sm font-bold tracking-wide flex items-center gap-3 hover:bg-[#12572b] transition-colors shadow-md"
            >
              VIEW ALL PRODUCTS <ArrowRight size={16} className="text-[#d4af37]" />
            </Link>
          </div>

        </div>
      </section>



      {/* Industries We Serve Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-8 md:mb-12">
            <span className="text-[#8b9185] text-xs font-bold tracking-[0.2em] uppercase mb-1 md:mb-2 block">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0d4f26]">
              Natural Solutions for Various Industries
            </h2>
          </ScrollReveal>

          <div className="flex overflow-x-auto flex-nowrap md:flex-wrap justify-start md:justify-center items-start md:items-center gap-6 md:gap-14 max-w-6xl mx-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { icon: Utensils, label: "Food &\nBeverages" },
              { icon: Pill, label: "Pharmaceuticals" },
              { icon: HeartPulse, label: "Nutraceuticals" },
              { icon: Sparkles, label: "Cosmetics &\nPersonal Care" },
              { icon: Flower2, label: "Ayurveda &\nHerbal" },
              { icon: Flame, label: "Seasonings &\nFlavors" },
              { icon: Palette, label: "Natural Food\nColoring" }
            ].map((ind, idx) => (
              <div key={idx} className="flex flex-col items-center group w-24 md:w-28 shrink-0 snap-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#d4af37]/50 flex items-center justify-center mb-3 md:mb-4 text-[#063318] group-hover:scale-110 transition-transform duration-300 bg-white shadow-sm">
                  <ind.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.2} />
                </div>
                <span className="text-[#063318] text-[10px] md:text-xs font-bold text-center whitespace-pre-line leading-tight">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#fcfdfa] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">

            {/* Left Content */}
            <ScrollReveal variant="fadeLeft" className="w-full lg:w-1/3 flex flex-col justify-center">
              <span className="text-[#8b9185] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">WHY CHOOSE US?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0d4f26] mb-8 leading-tight">
                Excellence in Every Drop & Every Grain
              </h2>

              <ul className="space-y-4">
                {[
                  "Premium Quality Raw Materials",
                  "Advanced Extraction Technology",
                  "International Quality Standards",
                  "Sustainable & Ethical Practices",
                  "Custom Solutions for Global Markets",
                  "On-time Delivery & Reliable Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <CheckCircle2 size={20} className="text-[#598c69] shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right Cards */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{img:qualityImg,title:'Quality\nAssurance',desc:'Rigorous testing at every stage ensures consistent quality.'},{img:sustainabilityImg,title:'Sustainability\n& Ethics',desc:'We care for nature and empower our farmers.'},{img:globalReachImg,title:'Global Reach',desc:'Exporting to 50+ countries with trust and reliability.'}].map((card, idx) => (
                <ScrollReveal key={idx} variant="zoomInSlight" delay={idx * 0.12} className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-gray-100">
                  <div className="h-48 w-full overflow-hidden p-3 pb-0">
                    <img src={card.img} alt={card.title.replace('\n',' ')} className="w-full h-full object-cover rounded-[20px]" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-[#0d4f26] mb-3 whitespace-pre-line leading-tight">{card.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-12 bg-white px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden bg-[#063318] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <ScrollReveal variant="fadeLeft" className="w-full lg:w-2/5 flex flex-col relative z-10">
              <span className="text-[#c1a755] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">GLOBAL PRESENCE</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-10 leading-tight">
                Exporting Nature's Goodness Across the World
              </h2>

              <div className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-[#c1a755] mb-1">50+</span>
                  <span className="text-white text-xs md:text-sm font-medium">Countries</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-[#c1a755] mb-1">1000+</span>
                  <span className="text-white text-xs md:text-sm font-medium">Shipments</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-[#c1a755] mb-1">98%</span>
                  <span className="text-white text-xs md:text-sm font-medium">On-time Delivery</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Map Image (Simulated with generic map background) */}
            <div className="w-full lg:w-3/5 relative z-10 flex justify-end">
              <div className="w-full h-[250px] md:h-[350px] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-xl opacity-80 mix-blend-screen" style={{ maskImage: 'radial-gradient(ellipse, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse, black 60%, transparent 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications Section */}
      <section className="py-16 bg-[#fcfdfa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[#8b9185] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">OUR CERTIFICATIONS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0d4f26]">
              Certified Quality You Can Trust
            </h2>
          </ScrollReveal>

          <div className="flex overflow-x-auto flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 md:gap-6 max-w-6xl mx-auto mb-12 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Since we don't have the actual logo images, we simulate them elegantly with pure CSS */}
            {[
              { type: 'iso', label: '9001:2015' },
              { type: 'haccp', label: 'CERTIFIED' },
              { type: 'fssai', label: '' },
              { type: 'gmp', label: 'CERTIFIED' },
              { type: 'halal', label: 'HALAL\nCERTIFIED' },
              { type: 'kosher', label: 'KOSHER\nCERTIFIED' },
              { type: 'organic', label: 'ORGANIC\nCERTIFIED' },
            ].map((cert, idx) => (
              <div key={idx} className="w-28 h-28 md:w-36 md:h-36 shrink-0 snap-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-transform duration-300">
                {cert.type === 'iso' && (
                  <>
                    <div className="text-[#0e3b8a] text-2xl md:text-3xl font-black tracking-tighter">ISO</div>
                    <div className="text-[#0e3b8a] text-[9px] md:text-[10px] font-bold mt-1">{cert.label}</div>
                  </>
                )}
                {cert.type === 'haccp' && (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-[#4a72b2] flex items-center justify-center text-[#4a72b2] font-bold text-sm md:text-lg">HACCP</div>
                )}
                {cert.type === 'fssai' && (
                  <div className="text-[#e26a26] text-2xl md:text-3xl font-serif italic font-bold flex items-center">
                    <span className="text-[#20499e]">fssa</span>i
                  </div>
                )}
                {cert.type === 'gmp' && (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-double border-[#1e7336] flex items-center justify-center text-[#1e7336] font-bold text-sm md:text-lg">GMP</div>
                )}
                {cert.type === 'halal' && (
                  <>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-green-600 flex items-center justify-center mb-1 md:mb-2">
                      <span className="text-green-600 font-serif text-base md:text-lg">حلال</span>
                    </div>
                    <div className="text-center text-[8px] md:text-[9px] font-bold text-gray-700 whitespace-pre-line leading-tight">{cert.label}</div>
                  </>
                )}
                {cert.type === 'kosher' && (
                  <>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-green-700 flex items-center justify-center mb-1 md:mb-2">
                      <span className="text-green-700 font-bold text-lg md:text-xl">K</span>
                    </div>
                    <div className="text-center text-[8px] md:text-[9px] font-bold text-gray-700 whitespace-pre-line leading-tight">{cert.label}</div>
                  </>
                )}
                {cert.type === 'organic' && (
                  <>
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-1 md:mb-2">
                      <Leaf size={28} className="text-[#3c8c4e]" fill="currentColor" />
                    </div>
                    <div className="text-center text-[8px] md:text-[9px] font-bold text-gray-700 whitespace-pre-line leading-tight">{cert.label}</div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/certificates"
              className="bg-[#0b3c1d] text-white px-8 py-3 rounded-md text-sm font-bold tracking-wide flex items-center gap-3 hover:bg-[#12572b] transition-colors shadow-md border border-[#0b3c1d]"
            >
              VIEW ALL CERTIFICATES <ArrowRight size={16} className="text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-10">
            <span className="text-[#4a5d23] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">WHAT OUR CLIENTS SAY</span>
          </ScrollReveal>

          {/* Mobile Reviews: Google Style Auto Scroll */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-marquee-slow w-max gap-4 pb-4">
              {[...reviewsData.flat(), ...reviewsData.flat()].map((review, rIdx) => {
                const bgColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500', 'bg-teal-500'];
                const avatarBg = bgColors[rIdx % bgColors.length];
                return (
                  <div key={rIdx} className="w-[85vw] shrink-0 bg-white rounded-[12px] p-5 border border-gray-200 shadow-sm flex flex-col">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-10 h-10 rounded-full ${avatarBg} text-white flex items-center justify-center font-bold text-lg uppercase`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#202124] text-[15px] leading-tight">{review.name}</p>
                      <p className="text-gray-500 text-[11px] leading-tight mt-0.5">{review.loc}</p>
                    </div>
                  </div>
                  <div className="flex gap-[1px] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="text-[#fbbc04]" fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="text-[#3c4043] text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              );
            })}
            </div>
          </div>

          {/* Desktop Reviews: Slider */}
          <div className="hidden md:block relative overflow-hidden w-full max-w-6xl mx-auto mb-10 py-4 -my-4 px-2 -mx-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeDot * 100}%)` }}
            >
              {reviewsData.map((group, gIdx) => (
                <div key={gIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.map((review, rIdx) => (
                    <div key={rIdx} className="bg-white rounded-[16px] p-8 border border-[#a3b18a] shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col h-full relative">
                      <Quote size={24} className="text-[#0d4f26] mb-4 opacity-80" />
                      <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                        {review.text}
                      </p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="font-bold text-[#0d4f26] text-sm">- {review.name}</p>
                          <p className="text-gray-500 text-xs">{review.loc}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-[#facc15]" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Slider Dots */}
          <div className="hidden md:flex justify-center items-center gap-3">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveDot(dot)}
                className={`w-3 h-3 rounded-full transition-all border-2 ${activeDot === dot ? 'border-[#c1a755] bg-transparent' : 'border-[#8b9185] bg-transparent'
                  }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
