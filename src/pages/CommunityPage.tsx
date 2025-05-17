import React from 'react';
import { Users, Map, MessageSquare } from 'lucide-react';
import LanguageMap from '../components/map/LanguageMap';
import ChatList from '../components/community/ChatList';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
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
                    <Users size={32} className="text-amber-300" />
                  </div>
                  <div className="ml-4 bg-gradient-to-r from-brown-600 to-brown-700 bg-clip-text text-transparent text-lg font-bold">
                    LANGUAGE COMMUNITY
                  </div>
                </div>

                <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-slide-up">
                  <span className="text-brown-700">Join Our</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-500 to-brown-600 bg-clip-text text-transparent">Community</span>
                </h1>

                <p className="text-xl text-brown-700 max-w-xl animate-slide-up animate-delay-200">
                  Connect with language enthusiasts, explore the linguistic landscape of Cameroon, and join the conversation
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-slide-up animate-delay-300">
                  <a href="#forum" className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-brown-600 to-brown-700 text-white font-bold rounded-lg shadow-xl hover:from-brown-700 hover:to-brown-800 transition-all transform hover:-translate-y-1">
                    Join the Discussion
                  </a>
                  <a href="#map" className="inline-block px-8 py-4 bg-white backdrop-blur-sm border border-amber-300 text-brown-700 font-bold rounded-lg hover:bg-amber-50 transition-all transform hover:-translate-y-1">
                    Explore Language Map
                  </a>
                </div>
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
                    alt="Community Discussion"
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

        {/* Language Map section */}
        <section className="py-16 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-4 adinkra-divider"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Map size={40} className="mx-auto mb-4 text-amber-600" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Cameroon's Linguistic Landscape
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover where Bulu and Tupuri languages are spoken and learn about the rich cultural heritage of each region
              </p>
            </div>

            <LanguageMap />

            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Cameroon is home to over 250 languages, making it one of the most linguistically diverse countries in Africa.
                Our interactive map highlights the regions where Bulu and Tupuri are spoken, along with cultural information about each area.
              </p>
              <a
                href="#forum"
                className="btn-adinkra inline-block px-6 py-3 bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition-all"
              >
                Join the Discussion
              </a>
            </div>
          </div>
        </section>

        {/* Community Forum section */}
        <section id="forum" className="py-20 bg-gradient-to-br from-black to-brown-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

          {/* Luminous elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>

          {/* Glowing orbs */}
          <div className="absolute top-40 right-40 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-amber-600 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
                <MessageSquare size={40} className="text-black" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Community <span className="text-amber-400">Discussions</span>
              </h2>
              <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                Connect with other language enthusiasts, ask questions, and share your knowledge about Bulu and Tupuri languages
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <ChatList />
          </div>
        </section>

        {/* Call to action - Improved design */}
        <section className="py-20 bg-gradient-to-br from-brown-700 to-brown-800 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

          {/* Luminous elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>

          {/* Black circle accents */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-black rounded-full opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-black rounded-full opacity-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="inline-flex items-center mb-6 bg-brown-800/50 px-4 py-2 rounded-full border border-amber-500/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mr-2">
                    <Users size={16} className="text-brown-900" />
                  </div>
                  <span className="text-amber-300 font-semibold">Join Our Community</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Help Preserve Cameroon's <span className="text-amber-400">Linguistic Heritage</span>
                </h2>

                <p className="text-xl text-amber-100 mb-8 max-w-xl">
                  Join our mission to bridge cultures and preserve linguistic heritage for future generations
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/translate"
                    className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-brown-900 font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1"
                  >
                    Start Translating Now
                  </a>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-amber-400/30 text-amber-300 font-bold rounded-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 mt-12 md:mt-0 relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 transform rotate-12">
                  <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
                </div>

                {/* Floating elements */}
                <div className="relative h-64 md:h-80">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/80 to-amber-500/80 rounded-lg shadow-lg transform rotate-6 animate-float" style={{animationDelay: '0ms'}}>
                    <img src="/images/Manmask.jpeg" alt="African Mask" className="w-full h-full object-cover rounded-lg" />
                  </div>

                  <div className="absolute top-1/4 right-0 w-40 h-40 bg-gradient-to-br from-amber-400/80 to-amber-500/80 rounded-lg shadow-lg transform -rotate-3 animate-float" style={{animationDelay: '300ms'}}>
                    <img src="/images/PeopleTalking.jpeg" alt="People Talking" className="w-full h-full object-cover rounded-lg" />
                  </div>

                  <div className="absolute bottom-0 left-1/4 w-36 h-36 bg-gradient-to-br from-amber-400/80 to-amber-500/80 rounded-lg shadow-lg transform rotate-12 animate-float" style={{animationDelay: '600ms'}}>
                    <img src="/images/ganianman.jpeg" alt="Ghanaian Man" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
