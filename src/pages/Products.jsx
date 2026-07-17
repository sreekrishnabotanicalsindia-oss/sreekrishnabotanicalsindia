import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Droplet, Leaf, Package, ArrowRight, ArrowRightCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { products } from '../data/products';
import productsHeroImg from '../assets/Products -hero.png';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    Oleoresins: true,
    'Powder Items': true,
    'Whole Spices': true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getFilteredProducts = (category) => {
    return products.filter(product => {
      const matchesCategory = category === 'All' ? true : product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const oleoresins = getFilteredProducts('Oleoresins');
  const powders = getFilteredProducts('Powders');
  const wholeSpices = getFilteredProducts('Whole Spices');

  return (
    <>
      <Helmet>
        <title>Oleoresin Products | Turmeric, Chilli, Black Pepper, Ginger Extracts - Sree Krishna Botanicals</title>
        <meta name="description" content="Explore our premium range of oleoresins and spice extracts – Turmeric, Chilli, Black Pepper, Ginger, Cardamom, Coriander. High purity, food-grade, pharma-grade botanical extracts from India." />
        <meta name="keywords" content="oleoresin products India, turmeric oleoresin, chilli oleoresin, black pepper oleoresin, ginger oleoresin, cardamom oleoresin, coriander oleoresin, spice extracts buy, food grade oleoresin, pharma grade oleoresin, buy botanical extracts India, natural spice oil India, curcumin extract supplier, capsaicin oleoresin, piperine extract supplier, spice extract manufacturer" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sreekrishnabotanicals.com/products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sreekrishnabotanicals.com/products" />
        <meta property="og:title" content="Premium Oleoresin Products | Sree Krishna Botanicals" />
        <meta property="og:description" content="Premium range of oleoresins – Turmeric, Chilli, Black Pepper, Ginger, Cardamom, Coriander. High purity food-grade and pharma-grade botanical extracts from India." />
        <meta property="og:site_name" content="Sree Krishna Botanicals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Oleoresin Products | Sree Krishna Botanicals" />
        <meta name="twitter:description" content="Premium oleoresins – Turmeric, Chilli, Black Pepper, Ginger – high purity botanical extracts from India." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f7f0] to-[#e4eedb] lg:bg-none">
        <div className="relative w-full h-auto lg:h-screen">
          <img
            src={productsHeroImg}
            alt="Products Hero"
            className="w-full h-full lg:object-cover lg:object-center object-contain block"
          />
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 bg-[#fcfcfa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
              {/* Sidebar Header */}
              <button 
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                className="bg-[#0a4a22] w-full p-5 flex items-center gap-3 text-white cursor-pointer lg:cursor-default"
              >
                <Leaf size={20} />
                <h3 className="font-bold text-lg text-white m-0">Product Categories</h3>
                {isMobileSidebarOpen ? <ChevronUp className="ml-auto lg:hidden" size={20} /> : <ChevronDown className="ml-auto lg:hidden" size={20} />}
                <ChevronUp className="ml-auto hidden lg:block" size={20} />
              </button>

              {/* Accordion Sections */}
              <AnimatePresence>
                {(isMobileSidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 space-y-4 lg:!h-auto lg:!opacity-100 lg:!block overflow-hidden"
                  >
                
                {/* Oleoresins Accordion */}
                <div className="border border-green-50 rounded-xl overflow-hidden bg-green-50/30">
                  <button 
                    onClick={() => toggleSection('Oleoresins')}
                    className="w-full p-4 flex items-center gap-3 bg-[#f5f8f5] hover:bg-green-100/50 transition-colors"
                  >
                    <Droplet className="text-[#0d4f26]" size={20} />
                    <span className="font-semibold text-[#0d4f26]">Oleoresins</span>
                    {expandedSections['Oleoresins'] ? <ChevronUp className="ml-auto text-gray-500" size={16} /> : <ChevronDown className="ml-auto text-gray-500" size={16} />}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections['Oleoresins'] && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 py-3 bg-white"
                      >
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex justify-between font-medium text-[#0d4f26]">
                            <span>All Oleoresins</span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">14</span>
                          </li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Turmeric Oleoresin</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Capsicum Oleoresin</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Black Pepper Oleoresin</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Clove Oleoresin</li>
                          <li className="text-[#327a48] font-semibold text-xs mt-3 cursor-pointer uppercase tracking-wider">View All</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Powders Accordion */}
                <div className="border border-green-50 rounded-xl overflow-hidden bg-green-50/30">
                  <button 
                    onClick={() => toggleSection('Powder Items')}
                    className="w-full p-4 flex items-center gap-3 bg-[#f5f8f5] hover:bg-green-100/50 transition-colors"
                  >
                    <Package className="text-[#0d4f26]" size={20} />
                    <span className="font-semibold text-[#0d4f26]">Powder Items</span>
                    {expandedSections['Powder Items'] ? <ChevronUp className="ml-auto text-gray-500" size={16} /> : <ChevronDown className="ml-auto text-gray-500" size={16} />}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections['Powder Items'] && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 py-3 bg-white"
                      >
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex justify-between font-medium text-[#0d4f26]">
                            <span>All Powders</span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">13</span>
                          </li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Turmeric Powder</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Capsicum Powder</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Black Pepper Powder</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Clove Powder</li>
                          <li className="text-[#327a48] font-semibold text-xs mt-3 cursor-pointer uppercase tracking-wider">View All</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Whole Spices Accordion */}
                <div className="border border-green-50 rounded-xl overflow-hidden bg-green-50/30">
                  <button 
                    onClick={() => toggleSection('Whole Spices')}
                    className="w-full p-4 flex items-center gap-3 bg-[#f5f8f5] hover:bg-green-100/50 transition-colors"
                  >
                    <Leaf className="text-[#0d4f26]" size={20} />
                    <span className="font-semibold text-[#0d4f26]">Whole Spices</span>
                    {expandedSections['Whole Spices'] ? <ChevronUp className="ml-auto text-gray-500" size={16} /> : <ChevronDown className="ml-auto text-gray-500" size={16} />}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections['Whole Spices'] && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 py-3 bg-white"
                      >
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex justify-between font-medium text-[#0d4f26]">
                            <span>All Spices</span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">11</span>
                          </li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Genus Capsicum (Chillies)</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Turmeric</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Cumin</li>
                          <li className="hover:text-[#0d4f26] cursor-pointer">Black Pepper</li>
                          <li className="text-[#327a48] font-semibold text-xs mt-3 flex items-center gap-1 cursor-pointer uppercase tracking-wider">View All <ArrowRight size={14} /></li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              )}
              </AnimatePresence>
            </div>
          </aside>

          {/* Main Product Area */}
          <main className="w-full flex-grow">
            
            {/* Top Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto p-1">
                <button 
                  onClick={() => setActiveCategory('All')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-[16px] font-heading font-semibold transition-colors ${activeCategory === 'All' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Leaf size={16} /> All Products
                </button>
                <button 
                  onClick={() => setActiveCategory('Oleoresins')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-[16px] font-heading font-semibold transition-colors ${activeCategory === 'Oleoresins' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Droplet size={16} /> Oleoresins
                </button>
                <button 
                  onClick={() => setActiveCategory('Powders')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-[16px] font-heading font-semibold transition-colors ${activeCategory === 'Powders' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Package size={16} /> Powders
                </button>
                <button 
                  onClick={() => setActiveCategory('Whole Spices')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-[16px] font-heading font-semibold transition-colors ${activeCategory === 'Whole Spices' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Leaf size={16} /> Whole Spices
                </button>
              </div>

              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a4a22]/20 focus:border-[#0a4a22] text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="space-y-16">
              
              {/* Oleoresins Grid */}
              {(activeCategory === 'All' || activeCategory === 'Oleoresins') && oleoresins.length > 0 && (
                <div>
                  <ScrollReveal className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d4f26]">Oleoresins</h2>
                    <div className="flex-grow max-w-[50px] h-px bg-gradient-to-r from-[#c1a755] to-transparent"></div>
                    <Droplet className="text-[#c1a755] fill-[#c1a755] -ml-2" size={12} />
                  </ScrollReveal>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {oleoresins.map((product, idx) => (
                      <ScrollReveal key={product.id} variant="zoomInSlight" delay={idx * 0.05}>
                        <Link to={`/products/${product.id}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow cursor-pointer flex flex-col group">
                          <div className="aspect-square bg-[#f5f8f5] rounded-xl mb-3 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="font-bold text-[#0d4f26] text-[13px] leading-tight">{product.name} <br/>Oleoresin</h4>
                          <div className="mt-auto pt-3 flex justify-end">
                            <ArrowRightCircle className="text-[#81bd94] group-hover:text-[#0d4f26] transition-colors" size={20} strokeWidth={1.5} />
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Powders Grid */}
              {(activeCategory === 'All' || activeCategory === 'Powders') && powders.length > 0 && (
                <div>
                  <ScrollReveal className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d4f26]">Powder Items</h2>
                    <div className="flex-grow max-w-[50px] h-px bg-gradient-to-r from-[#c1a755] to-transparent"></div>
                    <Droplet className="text-[#c1a755] fill-[#c1a755] -ml-2" size={12} />
                  </ScrollReveal>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {powders.map((product, idx) => (
                      <ScrollReveal key={product.id} variant="zoomInSlight" delay={idx * 0.05}>
                        <Link to={`/products/${product.id}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow cursor-pointer flex flex-col group">
                          <div className="aspect-square bg-[#fcf8f0] rounded-xl mb-3 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="font-bold text-[#0d4f26] text-[13px] leading-tight">{product.name} <br/>Powder</h4>
                          <div className="mt-auto pt-3 flex justify-end">
                            <ArrowRightCircle className="text-[#81bd94] group-hover:text-[#0d4f26] transition-colors" size={20} strokeWidth={1.5} />
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Whole Spices Row */}
              {(activeCategory === 'All' || activeCategory === 'Whole Spices') && wholeSpices.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-bold text-[#0d4f26]">Whole Spices</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
                    {wholeSpices.map((product, idx) => (
                      <ScrollReveal key={product.id} variant="zoomInSlight" delay={idx * 0.05} className="w-full">
                        <Link to={`/products/${product.id}`} className="flex flex-col items-center cursor-pointer group">
                          
                          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mb-4 mx-auto group">
                            {/* Animated spinning border */}
                            <div className="absolute inset-0 rounded-full border-[3px] border-transparent group-hover:border-t-[#c1a755] group-hover:border-r-[#c1a755] group-hover:border-b-[#c1a755] group-hover:animate-[spin_1.5s_linear_infinite] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            
                            {/* Inner Ring to create a track for the spinner */}
                            <div className="absolute inset-1 rounded-full border border-gray-100 group-hover:border-transparent transition-colors"></div>
                            
                            {/* Image container */}
                            <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full overflow-hidden bg-white shadow-sm border border-gray-50 group-hover:shadow-lg transition-shadow">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-[#0d4f26] text-[15px] lg:text-[17px] text-center leading-tight">
                            {product.name}
                          </h4>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </main>

        </div>
      </section>
    </>
  );
}
