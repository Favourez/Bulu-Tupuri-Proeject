import React from 'react';
import { Code, Database, Server, Package, Cloud, GitBranch } from 'lucide-react';

interface TechItem {
  name: string;
  description: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'ml';
  link: string;
}

const TechStackPage: React.FC = () => {
  const techStack: TechItem[] = [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces with a component-based architecture.',
      icon: '/images/tech/react.svg',
      category: 'frontend',
      link: 'https://reactjs.org/'
    },
    {
      name: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
      icon: '/images/tech/tailwind.svg',
      category: 'frontend',
      link: 'https://tailwindcss.com/'
    },
    {
      name: 'TypeScript',
      description: 'A strongly typed programming language that builds on JavaScript.',
      icon: '/images/tech/typescript.svg',
      category: 'frontend',
      link: 'https://www.typescriptlang.org/'
    },
    {
      name: 'FastAPI',
      description: 'A modern, fast web framework for building APIs with Python based on standard type hints.',
      icon: '/images/tech/fastapi.svg',
      category: 'backend',
      link: 'https://fastapi.tiangolo.com/'
    },
    {
      name: 'Hugging Face',
      description: 'State-of-the-art natural language processing models and tools for machine learning.',
      icon: '/images/tech/huggingface.svg',
      category: 'ml',
      link: 'https://huggingface.co/'
    },
    {
      name: 'Supabase',
      description: 'An open source Firebase alternative with a PostgreSQL database, authentication, and storage.',
      icon: '/images/tech/supabase.svg',
      category: 'database',
      link: 'https://supabase.io/'
    },
    {
      name: 'Docker',
      description: 'A platform for developing, shipping, and running applications in containers.',
      icon: '/images/tech/docker.svg',
      category: 'deployment',
      link: 'https://www.docker.com/'
    },
    {
      name: 'Vite',
      description: 'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
      icon: '/images/tech/vite.svg',
      category: 'frontend',
      link: 'https://vitejs.dev/'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="text-blue-500" size={24} />;
      case 'backend':
        return <Server className="text-green-500" size={24} />;
      case 'database':
        return <Database className="text-amber-500" size={24} />;
      case 'deployment':
        return <Cloud className="text-purple-500" size={24} />;
      case 'ml':
        return <Package className="text-red-500" size={24} />;
      default:
        return <GitBranch className="text-gray-500" size={24} />;
    }
  };

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
                  <Code size={32} className="text-amber-300" />
                </div>
                <div className="ml-4 bg-gradient-to-r from-brown-600 to-brown-700 bg-clip-text text-transparent text-lg font-bold">
                  TECHNOLOGY STACK
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-slide-up">
                <span className="text-brown-700">Powered by</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-brown-600 bg-clip-text text-transparent">Modern Tech</span>
              </h1>

              <p className="text-xl text-brown-700 max-w-xl animate-slide-up animate-delay-200">
                Discover the powerful technologies behind the BuluTupuri Translator that make accurate translations possible
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-slide-up animate-delay-300">
                {['React', 'FastAPI', 'Hugging Face', 'Supabase', 'Docker'].map((tech, index) => (
                  <span key={tech} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-brown-700 shadow-sm border border-amber-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative elements */}
              <div className="absolute -top-20 right-0 w-40 h-40 opacity-15 transform rotate-12">
                <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
              </div>

              {/* Tech icons floating */}
              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-1/4 w-16 h-16 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow" style={{animationDelay: '0ms'}}>
                  <img src="/images/tech/react.svg" alt="React" className="w-full h-full" />
                </div>
                <div className="absolute top-1/4 right-0 w-16 h-16 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow" style={{animationDelay: '300ms'}}>
                  <img src="/images/tech/fastapi.svg" alt="FastAPI" className="w-full h-full" />
                </div>
                <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow" style={{animationDelay: '600ms'}}>
                  <img src="/images/tech/docker.svg" alt="Docker" className="w-full h-full" />
                </div>
                <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow" style={{animationDelay: '900ms'}}>
                  <img src="/images/tech/supabase.svg" alt="Supabase" className="w-full h-full" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-brown-600 to-brown-700 rounded-full flex items-center justify-center shadow-xl">
                  <img src="/images/tech/huggingface.svg" alt="Hugging Face" className="w-16 h-16 object-contain invert" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview - Improved design */}
      <section className="py-20 bg-white relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-5"></div>

        {/* Black circles for visual interest */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-black rounded-full opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-black rounded-full opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-brown-600 to-brown-700 rounded-full flex items-center justify-center">
                <Code size={24} className="text-amber-300" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brown-700 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our application leverages cutting-edge technologies to provide accurate translations and a seamless user experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-brown-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-amber-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-amber-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-3 bg-gradient-to-r from-amber-400 to-brown-600"></div>
                <div className="p-6">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-amber-200">
                    {tech.icon ? (
                      <img src={tech.icon} alt={tech.name} className="w-12 h-12 transition-transform duration-500 transform group-hover:scale-110" />
                    ) : (
                      getCategoryIcon(tech.category)
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-center text-brown-700 mb-3">{tech.name}</h3>
                  <div className="mb-4 flex justify-center">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      tech.category === 'frontend' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      tech.category === 'backend' ? 'bg-green-100 text-green-800 border border-green-200' :
                      tech.category === 'database' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      tech.category === 'deployment' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                      'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm text-center mb-6">
                    {tech.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-white border border-amber-200 rounded-lg text-brown-600 hover:bg-amber-50 hover:text-brown-700 text-sm font-medium transition-colors duration-300 shadow-sm"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview - Improved design */}
      <section className="py-20 bg-amber-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-5"></div>

        {/* Black circles for visual interest */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-black rounded-full opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-black rounded-full opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center mb-6 bg-amber-100 px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-brown-600 to-brown-700 rounded-full flex items-center justify-center mr-2">
                  <Server size={16} className="text-amber-300" />
                </div>
                <span className="text-brown-700 font-semibold">System Architecture</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-brown-700 mb-6">
                How It All Works Together
              </h2>

              <p className="text-gray-700 mb-8">
                The BuluTupuri Translator uses a modern, scalable architecture designed for performance and reliability. Each component plays a crucial role in delivering accurate translations:
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mt-0.5 shadow-md">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-brown-700">React Frontend</h3>
                      <p className="text-gray-700">
                        A responsive, component-based UI built with React, TypeScript, and Tailwind CSS.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mt-0.5 shadow-md">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-brown-700">FastAPI Backend</h3>
                      <p className="text-gray-700">
                        A high-performance Python API that handles translation requests and database operations.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mt-0.5 shadow-md">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-brown-700">Hugging Face Models</h3>
                      <p className="text-gray-700">
                        State-of-the-art NLP models fine-tuned for Bulu and Tupuri languages.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mt-0.5 shadow-md">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-brown-700">Supabase Database</h3>
                      <p className="text-gray-700">
                        Secure storage for translations, user contributions, and language data.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mt-0.5 shadow-md">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-brown-700">Docker Deployment</h3>
                      <p className="text-gray-700">
                        Containerized application for consistent development and production environments.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 transform rotate-12">
                  <img src="/icons/tribal-mask.svg" alt="" className="w-full h-full" />
                </div>

                {/* Main image with glow effect */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 to-brown-600/30 rounded-2xl blur-md"></div>
                  <img
                    src="/images/PeopleTalking.jpeg"
                    alt="Architecture Diagram"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-2 border-amber-400/50 transform rotate-2"
                    style={{ maxHeight: '450px', objectFit: 'cover' }}
                  />

                  {/* Decorative corner elements */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-400 rounded-full"></div>
                </div>

                {/* Floating tech icons */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-lg shadow-lg p-2 animate-bounce-slow" style={{animationDelay: '200ms'}}>
                  <img src="/images/tech/fastapi.svg" alt="FastAPI" className="w-full h-full" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-lg shadow-lg p-2 animate-bounce-slow" style={{animationDelay: '500ms'}}>
                  <img src="/images/tech/huggingface.svg" alt="Hugging Face" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStackPage;
