import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Facebook, Twitter, Instagram, Heart, ExternalLink, MapPin, Book, Globe, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brown-900 text-white overflow-hidden">
      {/* African Pattern Background */}
      <div className="absolute inset-0 pattern-bg opacity-5"></div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF8E1"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-amber-400 to-brown-500 mr-3">
                <img
                  src="/icons/logo.svg"
                  alt="BuluTupuri Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-400">BuluTupuri</h2>
                <p className="text-amber-200 text-sm">Translator</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Bridging language gaps between Bulu, Tupuri, and English through
              innovative machine learning techniques. Preserving Cameroon's linguistic heritage.
            </p>

            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center">
              <Book size={18} className="mr-2" />
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center">
              <Globe size={18} className="mr-2" />
              Languages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/translate?lang=bulu" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Bulu
                </Link>
              </li>
              <li>
                <Link to="/translate?lang=tupuri" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Tupuri
                </Link>
              </li>
              <li>
                <Link to="/translate?lang=english" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  English
                </Link>
              </li>
              <li>
                <Link to="/languages" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  All Languages
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center">
              <Users size={18} className="mr-2" />
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/forum" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Contribute
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/bulutupuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  GitHub
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center">
              <Mail size={18} className="mr-2" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">ICT University, Cameroon</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:bulutupuri@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  bulutupuri@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-brown-800 pt-8 pb-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-center text-amber-400">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 text-center mb-6">
              Stay updated with the latest developments in our translation technology and cultural preservation efforts.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg bg-brown-800 border border-brown-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="btn-adinkra px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brown-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            &copy; {currentYear} BuluTupuri. Made with
            <Heart size={14} className="mx-1 text-amber-500" fill="#F59E0B" />
            by Group 3, ICT University.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Under the supervision of Professor Philippe Tamla.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;