import { Helmet } from 'react-helmet-async';
import { Droplet, ShieldCheck, Leaf, Award, Target, Eye, Diamond, Globe, Users, Package, Sprout, ThumbsUp, FlaskConical, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import aboutHero from '../assets/about-hero.png';
import aboutCtaImg from '../assets/about cta image.png';
import aboutQualityImg from '../assets/about_quality_scientist.png';
import aboutExtractionImg from '../assets/about_extraction_equip.png';
import aboutWarehouseImg from '../assets/about_warehouse.png';
import aboutSustainabilityImg from '../assets/about -Sustainability.png';
import MissionVisionValues from '../components/MissionVisionValues';
import WhoWeAre from '../components/WhoWeAre';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Sree Krishna Botanicals - Trusted Oleoresin Manufacturer Since Decades</title>
        <meta name="description" content="Learn about Sree Krishna Botanicals – a trusted manufacturer and exporter of premium oleoresins and botanical spice extracts from India. Committed to purity, quality, and sustainability." />
        <meta name="keywords" content="about Sree Krishna Botanicals, oleoresin manufacturer India, botanical extracts company India, spice extracts manufacturer Andhra Pradesh, natural extracts India, sustainable spice extraction, herbal extract company, oleoresin exporter, trusted botanical brand India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sreekrishnabotanicals.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sreekrishnabotanicals.com/about" />
        <meta property="og:title" content="About Us | Sree Krishna Botanicals" />
        <meta property="og:description" content="Trusted manufacturer and exporter of premium oleoresins and botanical spice extracts from India. Committed to purity, quality, and sustainability." />
        <meta property="og:site_name" content="Sree Krishna Botanicals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Sree Krishna Botanicals" />
        <meta name="twitter:description" content="Trusted manufacturer of premium oleoresins and botanical spice extracts from India." />
      </Helmet>

      {/* Hero Section Container */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f7f0] to-[#e4eedb] lg:bg-none">

        {/* Background Image Container - Dictates height on mobile, full screen on desktop */}
        <div className="relative w-full h-auto lg:h-screen">
          <img
            src={aboutHero}
            alt="About Us Hero"
            className="w-full h-full lg:object-cover lg:object-center object-contain block"
          />

        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Mission / Vision / Values Section */}
      <MissionVisionValues />

      {/* Sree Krishna Botanicals in Numbers */}
      <section className="py-8 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#0a4a22] rounded-3xl p-10 flex flex-col items-center">
            <h3 className="text-[#c1a755] text-sm font-bold tracking-widest uppercase mb-10 text-center">Sree Krishna Botanicals In Numbers</h3>

            <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center group border-r border-[#1a6635] last:border-0 border-transparent lg:border-[#1a6635]">
                <Package className="text-[#c1a755] mb-4" size={40} strokeWidth={1.5} />
                <span className="text-white font-bold text-3xl mb-1">100+</span>
                <span className="text-gray-300 text-sm font-medium">Products</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center group border-r border-[#1a6635] last:border-0 border-transparent lg:border-[#1a6635]">
                <Sprout className="text-[#c1a755] mb-4" size={40} strokeWidth={1.5} />
                <span className="text-white font-bold text-3xl mb-1">1000+</span>
                <span className="text-gray-300 text-sm font-medium">Farmers Network</span>
              </div>

             

              {/* Stat 6 */}
              <div className="flex flex-col items-center text-center group border-r-0">
                <ThumbsUp className="text-[#c1a755] mb-4" size={40} strokeWidth={1.5} />
                <span className="text-white font-bold text-3xl mb-1">99%</span>
                <span className="text-gray-300 text-sm font-medium">Customer Satisfaction</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left Image */}
            <ScrollReveal variant="fadeLeft" className="w-full lg:w-1/2">
              <img
                src={aboutSustainabilityImg}
                alt="Sustainability at Sree Krishna Botanicals"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal variant="fadeRight" delay={0.15} className="w-full lg:w-1/2 flex flex-col relative z-10">
              <span className="text-[#327a48] font-bold text-xs tracking-widest uppercase mb-4">ROOTED IN NATURE. COMMITTED TO A BETTER TOMORROW.</span>
              <h2 className="text-[#0d4f26] font-heading font-bold text-3xl lg:text-[2.5rem] leading-[1.2] mb-12">
                Sustainability is at the <br /> Heart of What We Do
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#81bd94] flex items-center justify-center">
                    <Sprout className="text-[#327a48]" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0d4f26] font-bold text-base mb-2">Sustainable Sourcing</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We work closely with farmers and communities to promote ethical farming and fair practices.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#81bd94] flex items-center justify-center">
                    <FlaskConical className="text-[#327a48]" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0d4f26] font-bold text-base mb-2">Eco-Friendly Processes</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our advanced extraction methods minimize waste and preserve the goodness of nature.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#81bd94] flex items-center justify-center">
                    <ShieldCheck className="text-[#327a48]" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0d4f26] font-bold text-base mb-2">Responsible Production</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We follow global quality and safety standards to protect people and the planet.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#81bd94] flex items-center justify-center">
                    <Globe2 className="text-[#327a48]" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0d4f26] font-bold text-base mb-2">Better Future</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We are committed to creating long-term value for our partners, society and future generations.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Bottom Bar Section */}
      <section className="py-12 bg-white pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#0a4a22] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 shadow-xl relative overflow-hidden border border-green-900">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c1a755] opacity-[0.03] blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex-shrink-0 relative w-48 md:w-64 lg:w-72 flex items-center justify-center z-10">
              <img src={aboutCtaImg} alt="Sree Krishna Botanicals CTA" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            <ScrollReveal variant="fadeLeft" className="z-10 text-center md:text-left flex-1 max-w-3xl">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug">
                At Sree Krishna Botanicals, we don't just extract goodness from nature,
                <br className="hidden lg:block mb-3" />
                <span className="text-[#c1a755] font-bold block mt-2 md:mt-4">we deliver trust, quality and a healthier world.</span>
              </h3>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
