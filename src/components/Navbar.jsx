import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react';
import { FaLeaf } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'EXTRACTION PROCESS', path: '/extraction-process' },
  { name: 'QUALITY', path: '/quality' },
  { name: 'EXPORTS', path: '/exports' },
  { name: 'CONTACT US', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative w-full z-50 bg-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center ml-2 lg:ml-6">
            <img src={logo} alt="Sree Krishna Botanicals Logo" className="h-20 md:h-24 lg:h-28 w-auto object-contain" />
          </Link>

          {/* Right Side Info & Button */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-primaryGreen">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-dark font-bold">Email Us</span>
                <span className="text-sm text-gray-600">info@sreekrishnabotanicals.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-primaryGreen">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-dark font-bold">Call Us</span>
                <span className="text-sm text-gray-600">+91 12345 67890</span>
              </div>
            </div>

            <button className="bg-[#0f4d22] text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-[#156e31] transition-colors">
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-darkGreen p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-[#0a4a22] w-full hidden lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-6 lg:gap-8 xl:gap-10 py-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '');
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`relative py-1 flex items-center gap-1 text-[16px] font-heading font-semibold tracking-wider uppercase transition-colors group/navlink ${isActive ? 'text-[#ffc72c]' : 'text-white hover:text-[#ffc72c]'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="transition-transform duration-300 group-hover/navlink:rotate-180" />}

                    {/* Hover Underline Animation */}
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffc72c] origin-center transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/navlink:scale-x-100'
                      }`}></span>
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-48 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          to={drop.path}
                          className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-primaryGreen"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0a4a22] overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '');
            return (
              <div key={link.name} className="border-b border-[#156e31]/50 last:border-0">
                <Link
                  to={link.path}
                  className={`block py-4 text-sm tracking-wider font-bold uppercase transition-colors ${
                    isActive ? 'text-[#ffc72c]' : 'text-white hover:text-[#ffc72c]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-3 pb-4 pl-4 border-l-2 border-[#156e31]">
                    {link.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        to={drop.path}
                        className="text-xs tracking-wider uppercase text-gray-300 hover:text-white block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
