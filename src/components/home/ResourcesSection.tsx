import React from 'react';
import { BookOpen, Video, Headphones, FileText } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  language: 'bulu' | 'tupuri' | 'both';
  type: 'book' | 'video' | 'audio' | 'document';
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Introduction to Bulu Grammar",
    description: "A comprehensive guide to Bulu language structure and grammar rules",
    language: "bulu",
    type: "book",
    link: "#"
  },
  {
    id: 2,
    title: "Tupuri Pronunciation Guide",
    description: "Audio lessons to help you master Tupuri pronunciation and tones",
    language: "tupuri",
    type: "audio",
    link: "#"
  },
  {
    id: 3,
    title: "Cameroonian Cultural Context",
    description: "Understanding the cultural context behind Bulu and Tupuri expressions",
    language: "both",
    type: "document",
    link: "#"
  },
  {
    id: 4,
    title: "Conversational Bulu",
    description: "Video lessons teaching everyday conversational phrases in Bulu",
    language: "bulu",
    type: "video",
    link: "#"
  }
];

const ResourcesSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="text-amber-600" size={24} />;
      case 'video':
        return <Video className="text-amber-600" size={24} />;
      case 'audio':
        return <Headphones className="text-amber-600" size={24} />;
      case 'document':
        return <FileText className="text-amber-600" size={24} />;
      default:
        return <BookOpen className="text-amber-600" size={24} />;
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-4 adinkra-divider"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen size={40} className="mx-auto mb-4 text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Language Learning Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of resources to help you learn more about Bulu and Tupuri languages and cultures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-amber-100 flex items-center">
                <div className="p-2 bg-white rounded-full mr-3">
                  {getIcon(resource.type)}
                </div>
                <div>
                  <span className="text-xs font-medium text-amber-800 uppercase">
                    {resource.language === 'both' ? 'Bulu & Tupuri' : resource.language}
                  </span>
                  <h3 className="font-bold text-gray-800">{resource.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center"
                >
                  Access Resource
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="btn-adinkra inline-block px-6 py-3 bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition-all"
          >
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
