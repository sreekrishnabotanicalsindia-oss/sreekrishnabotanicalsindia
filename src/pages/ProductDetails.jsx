import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { 
  ChevronRight, Leaf, Award, Globe, ShieldCheck, 
  Droplet, CheckCircle2, User, Mail, Building, 
  Phone, Send, Download, FileText, Package, 
  Box, Clock, Sprout, Truck, Sparkles 
} from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setMainImage(found.image);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Product Not Found</h2>
          <Link to="/products" className="text-brand-primaryGreen font-medium hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Generate thumbnails based on the main image and optional thumbnail
  const thumbnails = [
    product.image,
    product.thumbnail || product.image + '&auto=format&fit=crop&w=400&q=60'
  ];

  const tabs = [
    { name: 'Overview', icon: <Leaf size={16} /> },
    { name: 'Applications', icon: <Sparkles size={16} /> },
    { name: 'Specifications', icon: <FileText size={16} /> },
    { name: 'Packaging', icon: <Package size={16} /> },
    { name: 'Storage', icon: <Box size={16} /> },
    { name: 'Shelf Life', icon: <Clock size={16} /> },
  ];

  return (
    <>
      <Helmet>
        <title>{product.name} | Sree Krishna Botanicals</title>
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen bg-[#fcfcfa] pt-0 pb-20">
        
        {/* Top Badge Bar */}
        <div className="bg-[#f5f8f5] border-y border-green-100">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm font-medium text-gray-500 gap-2">
              <Link to="/" className="hover:text-brand-primaryGreen transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-brand-primaryGreen transition-colors">Products</Link>
              <ChevronRight size={14} />
              <Link to={`/products?category=${product.category}`} className="hover:text-brand-primaryGreen transition-colors">{product.category}</Link>
              <ChevronRight size={14} />
              <span className="text-brand-darkGreen font-semibold">{product.name}</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-6 text-sm font-bold text-brand-darkGreen">
              <div className="flex items-center gap-2">
                <Leaf className="text-brand-primaryGreen" size={18} />
                <span>100%<br/><span className="font-normal text-xs">Natural</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-primaryGreen" size={18} />
                <span>Premium<br/><span className="font-normal text-xs">Quality</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-brand-primaryGreen" size={18} />
                <span>Export<br/><span className="font-normal text-xs">Worldwide</span></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-primaryGreen" size={18} />
                <span>ISO<br/><span className="font-normal text-xs">Certified</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-10">
          
          <ScrollReveal variant="fadeUp" className="flex flex-col lg:flex-row gap-10 bg-white p-6 md:p-10 rounded-[30px] shadow-sm border border-gray-100">
            
            {/* Left Column: Image Gallery */}
            <div className="w-full lg:w-[45%] flex flex-col sm:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
                {thumbnails.map((thumb, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(thumb)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${mainImage === thumb ? 'border-brand-primaryGreen shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain bg-white p-1" />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-grow rounded-2xl overflow-hidden bg-gray-50 h-[300px] sm:h-[450px]">
                <img src={mainImage} alt={product.name} className="w-full h-full object-contain p-2" />
              </div>
            </div>

            {/* Middle Column: Product Info */}
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="inline-block bg-green-50 text-brand-darkGreen text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-4">
                {product.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-darkGreen mb-4">
                {product.name} {product.category === 'Oleoresins' ? 'Oleoresin' : product.category === 'Powders' ? 'Powder' : ''}
              </h1>
              
              <div className="flex items-center justify-center gap-2 mb-6 opacity-30">
                <div className="h-px bg-brand-primaryGreen flex-grow"></div>
                <Droplet className="text-brand-gold fill-brand-gold" size={16} />
                <div className="h-px bg-brand-primaryGreen flex-grow"></div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {product.overview} It is widely used in food, pharmaceutical, nutraceutical, cosmetic and coloring applications.
              </p>

              {/* Feature Icons Grid */}
              <div className="grid grid-cols-4 gap-2 text-center mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center text-brand-primaryGreen mb-2">
                    <Droplet size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">High Content</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center text-brand-primaryGreen mb-2">
                    <Leaf size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">Rich Color & Aroma</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center text-brand-primaryGreen mb-2">
                    <Sparkles size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">{product.extractionMethod.split(' ')[0]} Extracted</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center text-brand-primaryGreen mb-2">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">Consistent Quality</span>
                </div>
              </div>

              {/* Specs List */}
              <div className="space-y-3 text-sm">
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Botanical Name</span>
                  <span className="text-gray-600 font-medium">: {product.botanicalName || 'Not specified'}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Origin</span>
                  <span className="text-gray-600 font-medium">: {product.origin || 'India'}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Extraction Method</span>
                  <span className="text-gray-600 font-medium">: {product.extractionMethod}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Form</span>
                  <span className="text-gray-600 font-medium">: {product.form || (product.category === 'Oleoresins' ? 'Viscous Liquid' : 'Fine Powder')}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Color</span>
                  <span className="text-gray-600 font-medium">: {product.color || 'Characteristic'}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="w-36 font-semibold text-gray-800">Solubility</span>
                  <span className="text-gray-600 font-medium">: {product.solubility || (product.category === 'Oleoresins' ? 'Oil Soluble' : 'Water Dispersible')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-[25%] mt-8 lg:mt-0">
              <div className="bg-[#fcfcfa] p-6 rounded-2xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-xl font-bold text-brand-darkGreen mb-6 border-b border-gray-200 pb-4">
                  Request a Quote
                </h3>
                
                <form className="flex-grow flex flex-col gap-4 text-sm" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input type="text" placeholder="Your Name *" className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen" required />
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <div className="relative">
                    <input type="email" placeholder="Email Address *" className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen" required />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <div className="relative">
                    <input type="text" placeholder="Company Name *" className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen" required />
                    <Building className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <div className="relative">
                    <input type="tel" placeholder="Phone / WhatsApp *" className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen" required />
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen appearance-none text-gray-500" required defaultValue="">
                      <option value="" disabled>Quantity Required *</option>
                      <option value="1-50kg">1 - 50 kg</option>
                      <option value="50-200kg">50 - 200 kg</option>
                      <option value="200kg+">200+ kg</option>
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={16} />
                  </div>

                  <div className="relative flex-grow">
                    <textarea placeholder="Your Message" className="w-full h-24 p-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primaryGreen resize-none"></textarea>
                  </div>

                  <button className="w-full bg-[#0a4a22] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#0d5c2a] transition-colors mt-2">
                    <Send size={16} /> Send Inquiry
                  </button>
                  <button className="w-full bg-[#e8efe9] text-brand-darkGreen py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#d8e6da] transition-colors mt-2">
                    <Download size={16} /> Download Product Datasheet
                  </button>
                </form>
              </div>
            </div>

          </ScrollReveal>

          {/* Bottom Section: Tabs & At a Glance */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="mt-8 flex flex-col lg:flex-row gap-8">
            
            {/* Tabs Area */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100 overflow-x-auto custom-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm whitespace-nowrap transition-colors ${activeTab === tab.name ? 'text-brand-darkGreen border-b-2 border-brand-primaryGreen bg-green-50/30' : 'text-gray-500 hover:text-brand-darkGreen hover:bg-gray-50'}`}
                  >
                    {tab.icon} {tab.name}
                  </button>
                ))}
              </div>
              
              <div className="p-8 flex flex-col md:flex-row gap-8">
                {activeTab === 'Overview' && (
                  <>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Overview</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {product.overview} It contains bioactive compounds responsible for its color, flavor and health benefits, extracted using advanced technology to ensure maximum potency and purity.
                      </p>
                      
                      <h4 className="text-lg font-bold text-brand-darkGreen mb-3">Key Benefits</h4>
                      <ul className="space-y-3">
                        {product.benefits && product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="text-brand-primaryGreen shrink-0 mt-0.5" size={16} />
                            {benefit}
                          </li>
                        ))}
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="text-brand-primaryGreen shrink-0 mt-0.5" size={16} />
                          Used in wide range of industrial applications
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                      <h4 className="text-lg font-bold text-brand-darkGreen mb-6">Applications</h4>
                      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        {product.applications && product.applications.map((app, idx) => (
                          <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-primaryGreen mb-2">
                              {idx % 3 === 0 ? <Building size={20} /> : idx % 3 === 1 ? <Sparkles size={20} /> : <Leaf size={20} />}
                            </div>
                            <span className="text-xs font-bold text-gray-800">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'Applications' && (
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Applications</h4>
                    <p className="text-gray-600 text-sm mb-6">This product is highly versatile and can be used in the following industries and applications:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {product.applications && product.applications.map((app, idx) => (
                        <div key={idx} className="flex flex-col items-start p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 rounded-lg bg-green-100 text-brand-primaryGreen flex items-center justify-center mb-3">
                            <Sparkles size={18} />
                          </div>
                          <span className="font-semibold text-gray-800">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'Specifications' && (
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Specifications</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-600">Standard Specification</span>
                        <span className="font-bold text-gray-800">{product.specifications || 'Available upon request'}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-600">Appearance</span>
                        <span className="font-bold text-gray-800">{product.form || 'Characteristic'}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-600">Solubility</span>
                        <span className="font-bold text-gray-800">{product.solubility || (product.category === 'Oleoresins' ? 'Oil Soluble' : 'Water Dispersible')}</span>
                      </div>
                      <div className="flex justify-between py-3">
                        <span className="font-medium text-gray-600">Detailed Analysis</span>
                        <span className="font-bold text-brand-primaryGreen cursor-pointer hover:underline">Download Datasheet</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'Packaging' && (
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Packaging Options</h4>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-brand-primaryGreen">
                      <Package className="text-brand-primaryGreen shrink-0 mt-1" size={24} />
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Standard Packaging</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.packaging || 'Packed in 25kg HDPE drums or custom packaging as per client requirements.'} All packaging materials are food-grade and designed to preserve the product's integrity during transit.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'Storage' && (
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Storage Guidelines</h4>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-[#c1a755]">
                      <Box className="text-[#c1a755] shrink-0 mt-1" size={24} />
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Recommended Storage</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.storage || 'Store in a cool, dry, and dark place away from direct sunlight and heat.'} Keep containers tightly sealed when not in use to prevent oxidation and moisture absorption.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'Shelf Life' && (
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-darkGreen mb-4">Shelf Life</h4>
                    <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Clock className="text-brand-darkGreen" size={28} />
                      </div>
                      <div>
                        <h5 className="text-2xl font-bold text-brand-primaryGreen mb-1">{product.shelfLife || '24 Months'}</h5>
                        <p className="text-gray-600 text-sm">
                          From the date of manufacture when stored in original unopened packaging under recommended storage conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product At A Glance */}
            <div className="w-full lg:w-1/3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
              <h4 className="text-xl font-bold text-brand-darkGreen mb-6">Product At A Glance</h4>
              
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <div className="flex-1 space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Category</p>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Botanical Source</p>
                    <p className="text-gray-600">{product.botanicalName || 'Natural Source'}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Extraction Method</p>
                    <p className="text-gray-600">{product.extractionMethod}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Appearance</p>
                    <p className="text-gray-600">{product.form || 'Characteristic'}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Color</p>
                    <p className="text-gray-600">{product.color || 'Characteristic'}</p>
                  </div>
                </div>
                
                <div className="w-full sm:w-32 lg:w-full xl:w-32 flex-shrink-0 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full object-contain rounded-xl shadow-md border border-gray-100 bg-white" />
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Bottom Features Bar */}
          <ScrollReveal variant="fadeUp" delay={0.2} className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex items-center gap-3">
                <Leaf className="text-brand-primaryGreen shrink-0" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-darkGreen">Pure & Natural</span>
                  <span className="text-[10px] text-gray-500">No added chemicals</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="text-brand-primaryGreen shrink-0" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-darkGreen">Advanced Extraction</span>
                  <span className="text-[10px] text-gray-500">Maximum potency</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-primaryGreen shrink-0" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-darkGreen">Premium Quality</span>
                  <span className="text-[10px] text-gray-500">Tested & certified</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-brand-primaryGreen shrink-0" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-darkGreen">Global Standards</span>
                  <span className="text-[10px] text-gray-500">ISO, GMP compliant</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-brand-primaryGreen shrink-0" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-darkGreen">Worldwide Delivery</span>
                  <span className="text-[10px] text-gray-500">Safe & timely shipment</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
