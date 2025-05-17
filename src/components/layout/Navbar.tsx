import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Users, Mail, ChevronDown, Code, Globe, Search, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} className="mr-2" /> },
    { name: 'About', path: '/about', icon: <Info size={18} className="mr-2" /> },
    { name: 'Dictionary', path: '/dictionary', icon: <BookOpen size={18} className="mr-2" /> },
    { name: 'Community', path: '/community', icon: <Users size={18} className="mr-2" /> },
    { name: 'Tech Stack', path: '/tech-stack', icon: <Code size={18} className="mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} className="mr-2" /> },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white shadow-lg py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            aria-label="BuluTupuri Translator"
          >
            <div className={`w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 ${
              scrolled ? 'bg-gradient-to-br from-amber-500 to-brown-600' : 'bg-gradient-to-br from-amber-400 to-brown-500'
            }`}>
              <img
                src="/icons/logo.svg"
                alt="BuluTupuri Logo"
                className="w-full h-full object-contain p-1 transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                scrolled ? 'text-brown-700' : 'text-white'
              }`}>
                BuluTupuri
              </span>
              <span className={`text-xs leading-tight transition-colors duration-300 ${
                scrolled ? 'text-amber-600' : 'text-amber-300'
              }`}>
                Translator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'active'
                    : scrolled ? 'text-gray-700 hover:text-brown-600' : 'text-white hover:text-amber-300'
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  scrolled ? 'text-amber-600' : 'text-amber-300'
                }`}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={toggleDropdown}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-brown-600 hover:bg-gray-100'
                    : 'text-white hover:text-amber-300 hover:bg-white/10'
                }`}
              >
                <img
                  src="/icons/tribal-pattern.svg"
                  alt=""
                  className={`w-5 h-5 mr-1 transition-colors duration-300 ${
                    scrolled ? 'opacity-80' : 'opacity-90'
                  }`}
                />
                Languages
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${
                    dropdownOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
                  <Link
                    to="/translate?lang=bulu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brown-600"
                  >
                    Bulu
                  </Link>
                  <Link
                    to="/translate?lang=tupuri"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brown-600"
                  >
                    Tupuri
                  </Link>
                  <Link
                    to="/languages"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brown-600 border-t border-gray-100"
                  >
                    All Languages
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/translate"
              className={`ml-4 btn-adinkra px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-brown-600 hover:bg-brown-700 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              Start Translating
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="animate-scale" />
            ) : (
              <Menu size={24} className="animate-scale" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className={`px-4 pt-2 pb-4 space-y-1 ${
          scrolled ? 'bg-white' : 'bg-brown-900/95'
        }`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? scrolled ? 'bg-amber-50 text-brown-700' : 'bg-white/10 text-amber-400'
                  : scrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/5'
              } animate-slide-right`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className={scrolled ? 'text-amber-600' : 'text-amber-400'}>
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}

          {/* Language options */}
          <div className={`mt-4 pt-4 border-t ${
            scrolled ? 'border-gray-200' : 'border-white/10'
          }`}>
            <p className={`px-4 text-xs font-medium uppercase tracking-wider mb-2 ${
              scrolled ? 'text-gray-500' : 'text-gray-300'
            }`}>
              Languages
            </p>
            <Link
              to="/translate?lang=bulu"
              className={`flex items-center px-4 py-2 rounded-md text-base font-medium ${
                scrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/5'
              } animate-slide-right`}
              style={{ animationDelay: '400ms' }}
            >
              <img src="/icons/tribal-mask.svg" alt="" className="w-5 h-5 mr-2 opacity-70" />
              Bulu
            </Link>
            <Link
              to="/translate?lang=tupuri"
              className={`flex items-center px-4 py-2 rounded-md text-base font-medium ${
                scrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/5'
              } animate-slide-right`}
              style={{ animationDelay: '500ms' }}
            >
              <img src="/icons/tribal-shield.svg" alt="" className="w-5 h-5 mr-2 opacity-70" />
              Tupuri
            </Link>
          </div>

          {/* CTA Button */}
          <div className="pt-2 pb-2">
            <Link
              to="/translate"
              className={`w-full flex items-center justify-center px-4 py-3 rounded-md text-base font-medium ${
                scrolled
                  ? 'bg-brown-600 hover:bg-brown-700 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              } animate-slide-up`}
              style={{ animationDelay: '600ms' }}
            >
              Start Translating
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;