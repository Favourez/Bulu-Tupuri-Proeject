import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero section - Improved design */}
      <section className="relative bg-gradient-to-br from-amber-100 to-amber-200 py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

        {/* Luminous elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/20 to-transparent"></div>

        {/* Black circle accents */}
        <div className="absolute top-40 right-40 w-16 h-16 bg-black rounded-full opacity-10"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-black rounded-full opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-black rounded-full opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
              <div className="flex items-center mb-6 justify-center md:justify-start">
                <div className="w-16 h-16 bg-gradient-to-br from-brown-600 to-brown-700 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Mail size={32} className="text-amber-300" />
                </div>
                <div className="ml-4 bg-gradient-to-r from-brown-600 to-brown-700 bg-clip-text text-transparent text-lg font-bold">
                  GET IN TOUCH
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-slide-up">
                <span className="text-brown-700">Contact</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-brown-600 bg-clip-text text-transparent">Our Team</span>
              </h1>

              <p className="text-xl text-brown-700 max-w-xl animate-slide-up animate-delay-200">
                Have questions or feedback about the BuluTupuri Translator? We'd love to hear from you!
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative elements */}
              <div className="absolute -top-20 right-0 w-40 h-40 opacity-15 transform rotate-12">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-10 left-10 w-32 h-32 opacity-15 transform -rotate-12">
                <img src="/icons/tribal-shield.svg" alt="" className="w-full h-full" />
              </div>

              {/* Main image with decorative elements */}
              <div className="relative animate-slide-left animate-delay-400 transform rotate-3">
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/30 to-amber-600/30 rounded-2xl blur-md"></div>
                <img
                  src="/images/PeopleTalking.jpeg"
                  alt="Contact Us"
                  className="relative z-10 max-w-full h-auto rounded-2xl shadow-2xl border-2 border-amber-400/50"
                  style={{ maxHeight: '450px', objectFit: 'cover' }}
                />

                {/* Decorative corner elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gradient-to-br from-black to-brown-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

        {/* Luminous elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>

        {/* Glowing orbs */}
        <div className="absolute top-40 right-40 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-amber-600 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-amber-400 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Email</h3>
                    <p className="text-amber-100">bulutupuri@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Location</h3>
                    <p className="text-amber-100">ICT University, Yaoundé, Cameroon</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Phone</h3>
                    <p className="text-amber-100">+237 123 456 789</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-black/60 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 hover:bg-black/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-black/60 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 hover:bg-black/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-black/60 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 hover:bg-black/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;