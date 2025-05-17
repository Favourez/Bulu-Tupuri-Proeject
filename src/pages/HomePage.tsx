import React, { useEffect } from 'react';
import TranslationInterface from '../components/translation/TranslationInterface';
import ProposalForm from '../components/translation/ProposalForm';
import ContributeWords from '../components/translation/ContributeWords';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ResourcesSection from '../components/home/ResourcesSection';
import { Globe, MapPin, Languages, BookOpen, ArrowDown, Database, Plus } from 'lucide-react';

const HomePage: React.FC = () => {
  // Set the default view to show the translation improvement section
  useEffect(() => {
    const dictionarySection = document.getElementById('dictionary-contribution');
    const improvementSection = document.getElementById('translation-improvement');

    if (dictionarySection && improvementSection) {
      improvementSection.classList.remove('hidden');
      improvementSection.classList.add('animate-scale');
      dictionarySection.classList.add('hidden');
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section - Refined with lighter background for black text */}
      <section className="relative bg-gradient-to-br from-amber-100 to-amber-200 py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

        {/* Luminous elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500 rounded-full blur-3xl opacity-30"></div>

        {/* Black circle accents */}
        <div className="absolute top-40 right-40 w-16 h-16 bg-black rounded-full opacity-10"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-black rounded-full opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-black rounded-full opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
              <div className="flex items-center mb-6 justify-center md:justify-start">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Globe size={32} className="text-brown-900" />
                </div>
                <div className="ml-4 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent text-lg font-bold">
                  CAMEROON LANGUAGES
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-slide-up">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">BuluTupuri</span>
                <br />
                <span className="text-black">Translator</span>
              </h1>

              <p className="text-xl text-black max-w-xl animate-slide-up animate-delay-200">
                Bridging cultures through language - Translate between English, Bulu, and Tupuri to preserve Cameroon's linguistic heritage
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-slide-up animate-delay-300">
                <a href="#translate" className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1">
                  Start Translating
                </a>
                <a href="#resources" className="inline-block px-8 py-4 bg-white backdrop-blur-sm border border-amber-400 text-black font-bold rounded-lg hover:bg-amber-50 transition-all transform hover:-translate-y-1">
                  Learn More
                </a>
              </div>

              <div className="hidden md:flex mt-16 animate-bounce-slow">
                <a href="#translate" className="text-brown-600 hover:text-amber-500 transition-colors">
                  <ArrowDown size={28} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative mask elements */}
              <div className="absolute -top-20 right-0 w-40 h-40 opacity-15 transform rotate-12">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-10 left-10 w-32 h-32 opacity-15 transform -rotate-12">
                <img src="/icons/tribal-shield.svg" alt="" className="w-full h-full" />
              </div>

              {/* Black circle accents */}
              <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-black rounded-full opacity-10"></div>
              <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-black rounded-full opacity-10"></div>

              {/* Main image with decorative elements */}
              <div className="relative animate-slide-left animate-delay-400 transform rotate-3">
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/30 to-amber-600/30 rounded-2xl blur-md"></div>
                <img
                  src="/images/Manmask.jpeg"
                  alt="African Mask"
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

      {/* Translation section - Refined design */}
      <section id="translate" className="py-20 bg-amber-50 relative">
        {/* African mask pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/images/masks/mask_pattern.svg")' }}></div>

        {/* Top decorative element */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000" fillOpacity="0.1"></path>
          </svg>
        </div>

        {/* Black circles for visual interest */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-black rounded-full opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-black rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-black rounded-full opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-brown-600 rounded-full mb-4 shadow-lg">
              <Languages size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Translate and <span className="text-brown-600">Contribute</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our translation tool helps preserve and promote Cameroon's linguistic heritage by making Bulu and Tupuri languages more accessible.
            </p>
          </div>

          {/* Main translation interface - centered and prominent */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Decorative mask in background */}
              <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-amber-200 relative z-10">
                <div className="bg-gradient-to-r from-amber-500 to-brown-600 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Globe className="text-white mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">Translate Text</h3>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <TranslationInterface />
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Options - Redesigned with transitions */}
          <div className="max-w-4xl mx-auto">
            {/* Contribution Options Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => {
                  const dictionarySection = document.getElementById('dictionary-contribution');
                  const improvementSection = document.getElementById('translation-improvement');

                  if (dictionarySection && improvementSection) {
                    dictionarySection.classList.remove('hidden');
                    dictionarySection.classList.add('animate-scale');
                    improvementSection.classList.add('hidden');
                  }
                }}
                className="bg-gradient-to-r from-brown-600 to-brown-500 text-black font-bold px-6 py-4 rounded-lg shadow-lg transition-all flex items-center justify-center hover:from-brown-700 hover:to-brown-600"
              >
                <Database className="mr-3" size={20} />
                Add New Words to Dictionary
              </button>

              <button
                onClick={() => {
                  const dictionarySection = document.getElementById('dictionary-contribution');
                  const improvementSection = document.getElementById('translation-improvement');

                  if (dictionarySection && improvementSection) {
                    improvementSection.classList.remove('hidden');
                    improvementSection.classList.add('animate-scale');
                    dictionarySection.classList.add('hidden');
                  }
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-6 py-4 rounded-lg shadow-lg transition-all flex items-center justify-center hover:from-amber-600 hover:to-amber-700"
              >
                <Plus className="mr-3" size={20} />
                Improve Existing Translations
              </button>
            </div>

            {/* Dictionary Contribution Section - Initially hidden */}
            <div id="dictionary-contribution" className="relative hidden">
              {/* Decorative mask in background */}
              <div className="absolute -top-10 -left-10 w-24 h-24 opacity-10 transform rotate-45">
                <img src="/icons/tribal-shield.svg" alt="" className="w-full h-full" />
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-amber-200 relative z-10">
                <div className="bg-gradient-to-r from-brown-600 to-brown-500 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Database className="text-white mr-3" size={24} />
                      <h3 className="text-xl font-bold text-white">Dictionary Contribution</h3>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Plus className="text-amber-500" size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-black text-lg mb-6 font-medium border-l-4 border-amber-500 pl-4 py-1">
                    Help us build a comprehensive dictionary by adding words and translations in Bulu and Tupuri.
                  </div>

                  {/* Word contribution form with tips on the left */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Tips on the left */}
                    <div className="lg:col-span-1">
                      <div className="bg-amber-100 p-4 rounded-lg border border-amber-200 h-full">
                        <h4 className="font-bold text-brown-700 flex items-center">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                          </svg>
                          Tips for Quality Contributions
                        </h4>
                        <ul className="mt-4 text-brown-700 space-y-3 text-sm">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-1 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Provide accurate translations that are commonly used by native speakers</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-1 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Include context or example usage when possible</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-1 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>For words with multiple meanings, consider submitting separate entries</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Form on the right */}
                    <div className="lg:col-span-3">
                      <ContributeWords />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Translation Improvement Section - Initially visible */}
            <div id="translation-improvement" className="relative animate-scale">
              {/* Decorative mask in background */}
              <div className="absolute -top-10 -right-10 w-24 h-24 opacity-10">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-amber-200 relative z-10">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Plus className="text-black mr-3" size={24} />
                      <h3 className="text-xl font-bold text-black">Improve Translations</h3>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Plus className="text-amber-500" size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-black text-lg mb-6 font-medium border-l-4 border-amber-500 pl-4 py-1">
                    Contribute to our translation database by suggesting improvements or alternatives to existing translations.
                  </div>

                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-inner">
                    <ProposalForm />

                    {/* Additional guidance */}
                    <div className="mt-6 bg-amber-100 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-brown-700 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                        Why Improvements Matter
                      </h4>
                      <p className="mt-2 text-brown-700 text-sm">
                        Your suggestions help us refine our translations and ensure they accurately reflect the nuances of Bulu and Tupuri languages. Every contribution helps preserve Cameroon's linguistic heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative element at bottom */}
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-brown-600 rounded-full opacity-20 animate-ping-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-brown-600 rounded-full opacity-40"></div>
              <img src="/images/ganianman.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-4 adinkra-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen size={40} className="mx-auto mb-4 text-amber-600" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our translation tool helps bridge cultures and preserve linguistic heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-amber-50 rounded-lg shadow-lg transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <img src="/images/african_pattern1.svg" alt="" className="w-full h-full" />
              </div>
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-6 african-border">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Accurate Translations</h3>
              <p className="text-gray-600">
                Powered by advanced machine learning models to provide accurate translations between English, Bulu, and Tupuri.
              </p>
            </div>

            <div className="p-8 bg-amber-50 rounded-lg shadow-lg transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <img src="/images/african_pattern2.svg" alt="" className="w-full h-full" />
              </div>
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-6 african-border">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Driven</h3>
              <p className="text-gray-600">
                Help improve translations by suggesting alternatives, creating a collaborative environment for language preservation.
              </p>
            </div>

            <div className="p-8 bg-amber-50 rounded-lg shadow-lg transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <img src="/images/cameroon_map.svg" alt="" className="w-full h-full" />
              </div>
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-6 african-border">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Cultural Preservation</h3>
              <p className="text-gray-600">
                Preserving Cameroon's linguistic heritage by making Bulu and Tupuri languages more accessible.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center bg-amber-50 rounded-lg shadow-lg overflow-hidden african-border">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-brown-700 mb-4">Discover Cameroon's Rich Linguistic Heritage</h3>
              <p className="text-gray-600 mb-4">
                Cameroon is home to over 250 languages, making it one of the most linguistically diverse countries in Africa.
                Our project focuses on Bulu and Tupuri, two important languages that represent the cultural richness of Cameroon.
              </p>
              <div className="flex items-center">
                <MapPin className="text-amber-600 mr-2" size={20} />
                <span className="text-gray-700 font-medium">Bulu: Southern Cameroon</span>
              </div>
              <div className="flex items-center mt-2">
                <MapPin className="text-amber-600 mr-2" size={20} />
                <span className="text-gray-700 font-medium">Tupuri: Northern Cameroon & Chad</span>
              </div>
              <div className="mt-6">
                <a href="/community" className="btn-adinkra inline-block px-4 py-2 bg-brown-600 text-white font-medium rounded-lg hover:bg-brown-700 transition-all text-sm">
                  Explore Language Map
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-brown-600/20 z-10"></div>
              <img src="/images/PeopleTalking.jpeg" alt="Cameroon Cultural Heritage" className="w-full h-full object-cover" style={{ maxHeight: '400px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Resources section */}
      <div id="resources">
        <ResourcesSection />
      </div>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-500 text-white relative">
        <div className="absolute inset-0 kente-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission to Preserve Cameroon's Languages</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Help us bridge cultures and preserve linguistic heritage for future generations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#translate" className="btn-adinkra inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-lg shadow-lg hover:bg-amber-50 transition-all">
              Start Translating Now
            </a>
            <a href="/contact" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-amber-600 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;