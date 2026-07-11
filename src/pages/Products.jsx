import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Droplet, Leaf, Package, ArrowRight, ArrowRightCircle } from 'lucide-react';
import { products } from '../data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
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
        <title>Our Products | Sree Krishna Botanicals</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9eb]/95 via-[#f8f9eb]/70 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold text-[#0d4f26] mb-4"
            >
              Our Products
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-start mb-6"
            >
              <Droplet className="text-[#c1a755] fill-[#c1a755]" size={24} />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-lg"
            >
              Premium quality oleoresins, powders and spices extracted from nature, crafted with advanced technology and uncompromised purity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 bg-[#fcfcfa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
              {/* Sidebar Header */}
              <div className="bg-[#0a4a22] p-5 flex items-center gap-3 text-white">
                <Leaf size={20} />
                <h3 className="font-bold text-lg">Product Categories</h3>
                <ChevronUp className="ml-auto" size={20} />
              </div>

              {/* Accordion Sections */}
              <div className="p-4 space-y-4">
                
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

              </div>
            </div>
          </aside>

          {/* Main Product Area */}
          <main className="w-full flex-grow">
            
            {/* Top Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto p-1">
                <button 
                  onClick={() => setActiveCategory('All')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors ${activeCategory === 'All' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Leaf size={16} /> All Products
                </button>
                <button 
                  onClick={() => setActiveCategory('Oleoresins')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors ${activeCategory === 'Oleoresins' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Droplet size={16} /> Oleoresins
                </button>
                <button 
                  onClick={() => setActiveCategory('Powders')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors ${activeCategory === 'Powders' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Package size={16} /> Powders
                </button>
                <button 
                  onClick={() => setActiveCategory('Whole Spices')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors ${activeCategory === 'Whole Spices' ? 'bg-[#0a4a22] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
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
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d4f26]">Oleoresins</h2>
                    <div className="flex-grow max-w-[50px] h-px bg-gradient-to-r from-[#c1a755] to-transparent"></div>
                    <Droplet className="text-[#c1a755] fill-[#c1a755] -ml-2" size={12} />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {oleoresins.map(product => (
                      <Link to={`/products/${product.id}`} key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow cursor-pointer flex flex-col group">
                        <div className="aspect-square bg-[#f5f8f5] rounded-xl mb-3 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 className="font-bold text-[#0d4f26] text-[13px] leading-tight">{product.name} <br/>Oleoresin</h4>
                        <div className="mt-auto pt-3 flex justify-end">
                          <ArrowRightCircle className="text-[#81bd94] group-hover:text-[#0d4f26] transition-colors" size={20} strokeWidth={1.5} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Powders Grid */}
              {(activeCategory === 'All' || activeCategory === 'Powders') && powders.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d4f26]">Powder Items</h2>
                    <div className="flex-grow max-w-[50px] h-px bg-gradient-to-r from-[#c1a755] to-transparent"></div>
                    <Droplet className="text-[#c1a755] fill-[#c1a755] -ml-2" size={12} />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {powders.map(product => (
                      <Link to={`/products/${product.id}`} key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow cursor-pointer flex flex-col group">
                        <div className="aspect-square bg-[#fcf8f0] rounded-xl mb-3 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 className="font-bold text-[#0d4f26] text-[13px] leading-tight">{product.name} <br/>Powder</h4>
                        <div className="mt-auto pt-3 flex justify-end">
                          <ArrowRightCircle className="text-[#81bd94] group-hover:text-[#0d4f26] transition-colors" size={20} strokeWidth={1.5} />
                        </div>
                      </Link>
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
                  
                  <div className="flex flex-wrap justify-start gap-x-6 gap-y-8">
                    {wholeSpices.map(product => (
                      <Link to={`/products/${product.id}`} key={product.id} className="flex flex-col items-center cursor-pointer group w-20">
                        <div className="w-16 h-16 rounded-full shadow-sm mb-3 overflow-hidden border-2 border-transparent group-hover:border-[#c1a755] transition-colors">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-[#0d4f26] text-[11px] text-center leading-tight">
                          {product.name}
                        </h4>
                      </Link>
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
