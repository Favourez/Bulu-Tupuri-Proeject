import React from 'react';
import { Globe, Book, Users, Award, Map, Lightbulb, GraduationCap, Check } from 'lucide-react';

const AboutPage: React.FC = () => {
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
                  <Map size={32} className="text-amber-300" />
                </div>
                <div className="ml-4 bg-gradient-to-r from-brown-600 to-brown-700 bg-clip-text text-transparent text-lg font-bold">
                  OUR MISSION
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-slide-up">
                <span className="text-brown-700">About</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-brown-600 bg-clip-text text-transparent">Our Project</span>
              </h1>

              <p className="text-xl text-brown-700 max-w-xl animate-slide-up animate-delay-200">
                Learn about our mission to bridge language gaps and preserve Cameroon's rich linguistic heritage
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-slide-up animate-delay-300">
                <a href="#technology" className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-brown-600 to-brown-700 text-white font-bold rounded-lg shadow-xl hover:from-brown-700 hover:to-brown-800 transition-all transform hover:-translate-y-1">
                  Our Technology
                </a>
                <a href="#team" className="inline-block px-8 py-4 bg-white backdrop-blur-sm border border-amber-300 text-brown-700 font-bold rounded-lg hover:bg-amber-50 transition-all transform hover:-translate-y-1">
                  Meet Our Team
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
                  src="/images/ganianman.jpeg"
                  alt="Ghanaian Man"
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

      {/* Mission section - Enhanced with dark luminous elements */}
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
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
              <Lightbulb size={40} className="text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our <span className="text-amber-400">Mission</span>
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Preserving and promoting Cameroon's linguistic diversity through technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Decorative mask in background */}
              <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10 transform rotate-12">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg relative z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>

                <p className="text-amber-100 mb-8 text-lg leading-relaxed">
                  The BuluTupuri project aims to bridge language gaps between Bulu, Tupuri, and English
                  through innovative machine learning techniques. Our goal is to preserve and promote
                  these important Cameroonian languages by making them more accessible.
                </p>

                <h3 className="text-amber-400 font-bold text-xl mb-6 flex items-center">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold">→</span>
                  </div>
                  By creating this translation tool, we hope to:
                </h3>

                <ul className="space-y-6 mb-8">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-glow-amber">
                      <Check size={16} className="text-black" />
                    </div>
                    <p className="ml-4 text-white text-lg">Facilitate communication between speakers of different languages</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-glow-amber">
                      <Check size={16} className="text-black" />
                    </div>
                    <p className="ml-4 text-white text-lg">Preserve linguistic heritage for future generations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-glow-amber">
                      <Check size={16} className="text-black" />
                    </div>
                    <p className="ml-4 text-white text-lg">Promote cultural understanding and appreciation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-glow-amber">
                      <Check size={16} className="text-black" />
                    </div>
                    <p className="ml-4 text-white text-lg">Support education and research in these languages</p>
                  </li>
                </ul>

                <div className="mt-10">
                  <a
                    href="#technology"
                    className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1"
                  >
                    Learn About Our Technology
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative mask in background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 transform -rotate-12">
                <img src="/icons/tribal-shield.svg" alt="" className="w-full h-full" />
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-black rounded-xl p-6 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-glow-amber">
                        <Globe className="text-black" size={32} />
                      </div>
                      <h3 className="font-bold text-amber-400 text-lg mb-2">Language Preservation</h3>
                      <p className="text-amber-100 text-sm text-center">Documenting and preserving endangered languages</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-black rounded-xl p-6 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-glow-amber">
                        <Book className="text-black" size={32} />
                      </div>
                      <h3 className="font-bold text-amber-400 text-lg mb-2">Cultural Education</h3>
                      <p className="text-amber-100 text-sm text-center">Promoting understanding of Cameroonian cultures</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-black rounded-xl p-6 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-glow-amber">
                        <Users className="text-black" size={32} />
                      </div>
                      <h3 className="font-bold text-amber-400 text-lg mb-2">Community Building</h3>
                      <p className="text-amber-100 text-sm text-center">Creating networks of language enthusiasts</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-black rounded-xl p-6 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-glow-amber">
                        <Award className="text-black" size={32} />
                      </div>
                      <h3 className="font-bold text-amber-400 text-lg mb-2">Academic Research</h3>
                      <p className="text-amber-100 text-sm text-center">Supporting linguistic studies and research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology section - Enhanced with dark luminous elements */}
      <section id="technology" className="py-20 bg-gradient-to-br from-brown-900 to-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

        {/* Luminous elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
              <GraduationCap size={40} className="text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our <span className="text-amber-400">Technology</span>
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Innovative solutions for language preservation and translation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-2/5 relative">
              {/* Decorative elements */}
              <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl blur-md"></div>
              <img
                src="/images/ganianman.jpeg"
                alt="African Technology"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-2 border-amber-400/50 transform -rotate-2"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />

              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>

              {/* Tech icons */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-lg shadow-lg p-2 animate-bounce-slow" style={{animationDelay: '200ms'}}>
                <img src="/images/tech/huggingface.svg" alt="Hugging Face" className="w-full h-full" />
              </div>
            </div>

            <div className="md:w-3/5 relative">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>

                <h3 className="text-amber-400 font-bold text-xl mb-6 flex items-center">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold">AI</span>
                  </div>
                  Advanced Translation Technology
                </h3>

                <p className="text-amber-100 mb-6 text-lg leading-relaxed">
                  The BuluTupuri translator leverages advanced machine learning technologies and natural language
                  processing techniques to provide accurate translations between English, Bulu, and Tupuri.
                </p>

                <p className="text-amber-100 mb-6 text-lg leading-relaxed">
                  Our approach combines modern AI with cultural sensitivity to ensure translations capture not just
                  the literal meaning, but also the cultural context and nuances of these rich Cameroonian languages.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm">NLP</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm">Hugging Face</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm">React</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-12 text-center text-white">
            Our <span className="text-amber-400">Technical Approach</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber">
                      <span className="text-black font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">Machine Learning Models</h3>
                  </div>
                  <p className="text-amber-100 leading-relaxed">
                    We utilize Hugging Face's transformer-based models, fine-tuned on our custom datasets
                    of Bulu and Tupuri text to provide accurate translations. These models are continuously
                    improved through training on new data.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber">
                      <span className="text-black font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">Dictionary Data</h3>
                  </div>
                  <p className="text-amber-100 leading-relaxed">
                    Our system is enhanced with comprehensive dictionary data for language pairings,
                    ensuring accuracy in translating context-specific phrases and expressions. This includes
                    cultural references and idioms specific to Cameroonian languages.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber">
                      <span className="text-black font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">Community Feedback</h3>
                  </div>
                  <p className="text-amber-100 leading-relaxed">
                    We integrate user-submitted translation proposals to continuously improve our translation
                    quality and address cultural nuances. Native speakers provide invaluable insights that
                    help refine our algorithms.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-glow-amber">
                      <span className="text-black font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">Responsive Design</h3>
                  </div>
                  <p className="text-amber-100 leading-relaxed">
                    Our application is built with modern web technologies to ensure a seamless experience
                    across all devices and platforms. The interface is designed to be accessible even in
                    areas with limited internet connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section - Enhanced with dark luminous elements */}
      <section id="team" className="py-20 bg-gradient-to-br from-black to-brown-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>

        {/* Luminous elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>

        {/* Glowing orbs */}
        <div className="absolute top-40 right-40 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-amber-600 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
              <Users size={40} className="text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our <span className="text-amber-400">Team</span>
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Meet the passionate individuals behind the BuluTupuri project
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-amber-100 max-w-3xl mx-auto text-lg">
              This project was developed by Group 3 at ICT University, under the supervision of Professor Philippe Tamla,
              as part of the Introduction to Data Science course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-glow-amber">
                      <span className="text-3xl font-bold text-black">PT</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-400">Professor Philippe Tamla</h3>
                    <p className="text-amber-300 font-medium mb-4">Project Supervisor</p>
                    <p className="text-amber-100">
                      With guidance from Professor Tamla, Group 3 students worked collaboratively to develop this
                      innovative translation tool that serves as both an educational project and a practical resource
                      for language preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-center text-amber-400">Group 3 Students</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/50 to-amber-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative bg-black/60 p-5 rounded-lg text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow-amber">
                        <span className="font-bold text-black">S1</span>
                      </div>
                      <p className="font-bold text-amber-300 mb-1">Student One</p>
                      <p className="text-sm text-amber-100">Data Scientist</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/50 to-amber-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative bg-black/60 p-5 rounded-lg text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow-amber">
                        <span className="font-bold text-black">S2</span>
                      </div>
                      <p className="font-bold text-amber-300 mb-1">Student Two</p>
                      <p className="text-sm text-amber-100">ML Engineer</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/50 to-amber-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative bg-black/60 p-5 rounded-lg text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow-amber">
                        <span className="font-bold text-black">S3</span>
                      </div>
                      <p className="font-bold text-amber-300 mb-1">Student Three</p>
                      <p className="text-sm text-amber-100">Frontend Developer</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/50 to-amber-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative bg-black/60 p-5 rounded-lg text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow-amber">
                        <span className="font-bold text-black">S4</span>
                      </div>
                      <p className="font-bold text-amber-300 mb-1">Student Four</p>
                      <p className="text-sm text-amber-100">Linguist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Join Our Effort</h3>
              <p className="text-amber-100 max-w-2xl mx-auto mb-8">
                We're always looking for contributors who are passionate about language preservation and
                technological innovation. If you're interested in joining our project, please reach out!
              </p>
              <a
                href="/contact"
                className="btn-adinkra inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;