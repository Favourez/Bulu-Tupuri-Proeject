import React, { useState } from 'react';
import { MapPin, Info, Users, Globe, Music, Book } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  language: 'bulu' | 'tupuri' | 'both';
  position: { x: string; y: string };
  population: string;
  description: string;
  culturalFacts: string[];
  audioSample?: string;
}

const regions: Region[] = [
  {
    id: 'south',
    name: 'South Region',
    language: 'bulu',
    position: { x: '40%', y: '70%' },
    population: '~250,000 speakers',
    description: 'The South Region is home to the Bulu people, who are part of the larger Beti-Pahuin ethnic group. The Bulu language is rich in oral traditions and proverbs.',
    culturalFacts: [
      'Bulu is a tonal language with three distinct tones that change word meanings',
      'Traditional Bulu music often features the mvet, a stringed instrument used for storytelling',
      'The Bulu people have a rich tradition of storytelling and oral history passed down through generations',
      'Many Bulu cultural ceremonies involve traditional dance and music performances'
    ],
    audioSample: '/audio/bulu-sample.mp3'
  },
  {
    id: 'center',
    name: 'Center Region',
    language: 'bulu',
    position: { x: '45%', y: '55%' },
    population: '~150,000 speakers',
    description: 'Some Bulu speakers can also be found in parts of the Center Region, particularly in areas bordering the South Region.',
    culturalFacts: [
      'The Center Region is a cultural melting pot with multiple language influences',
      'Bulu in this region has adopted some vocabulary from neighboring languages',
      'Many Bulu speakers here are bilingual or multilingual',
      'Traditional crafts like basket weaving and wood carving are practiced by Bulu communities'
    ]
  },
  {
    id: 'north',
    name: 'Far North Region',
    language: 'tupuri',
    position: { x: '60%', y: '15%' },
    population: '~200,000 speakers',
    description: 'The Tupuri people primarily inhabit the Far North Region of Cameroon and parts of Chad. Their language is known for its complex tonal system.',
    culturalFacts: [
      'Tupuri has a unique counting system based on groups of five',
      'Traditional Tupuri ceremonies often involve the gurna dance',
      'Tupuri culture places great emphasis on cattle raising and agriculture',
      'The annual Tupuri harvest festival is an important cultural event'
    ],
    audioSample: '/audio/tupuri-sample.mp3'
  },
  {
    id: 'adamawa',
    name: 'North Region',
    language: 'tupuri',
    position: { x: '55%', y: '30%' },
    population: '~50,000 speakers',
    description: 'Some Tupuri communities can also be found in the North Region, where they maintain their distinct cultural practices and language.',
    culturalFacts: [
      'Tupuri in this region has been influenced by Fulfulde, the language of the Fulani people',
      'Many traditional crafts are preserved in this region',
      'Annual harvest festivals are important cultural events for Tupuri speakers here',
      'Traditional medicine practices are still maintained by Tupuri communities'
    ]
  }
];

const LanguageMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'culture' | 'audio'>('info');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setShowInfo(true);
    setActiveTab('info');

    // Stop any playing audio when changing regions
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const closeInfo = () => {
    setShowInfo(false);

    // Stop audio when closing the modal
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (!selectedRegion?.audioSample) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(selectedRegion.audioSample);

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = selectedRegion.audioSample;
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'bulu':
        return 'text-amber-600';
      case 'tupuri':
        return 'text-green-600';
      case 'both':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  const getLanguageBgColor = (language: string) => {
    switch (language) {
      case 'bulu':
        return 'bg-amber-500';
      case 'tupuri':
        return 'bg-green-500';
      case 'both':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="aspect-w-4 aspect-h-3 relative bg-amber-50 rounded-lg overflow-hidden shadow-lg african-border">
        {/* Map background */}
        <div className="absolute inset-0 bg-amber-100 pattern-bg opacity-20"></div>
        <img
          src="/images/cameroon_map.svg"
          alt="Map of Cameroon"
          className="absolute w-full h-full object-contain p-4"
        />

        {/* Region markers */}
        {regions.map((region) => (
          <button
            key={region.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 group`}
            style={{ left: region.position.x, top: region.position.y }}
            onClick={() => handleRegionClick(region)}
          >
            <div className={`p-1 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform ${
              selectedRegion?.id === region.id ? 'ring-2 ring-amber-500' : ''
            }`}>
              <MapPin
                size={24}
                className={getLanguageColor(region.language)}
              />
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded text-xs font-medium shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {region.name}
            </div>
          </button>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md">
          <h4 className="text-sm font-bold mb-2">Languages</h4>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-600 mr-2"></div>
              <span className="text-xs">Bulu</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
              <span className="text-xs">Tupuri</span>
            </div>
          </div>
        </div>

        {/* Info button */}
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-amber-50 transition-colors"
          onClick={() => setShowInfo(true)}
        >
          <Info size={20} className="text-amber-600" />
        </button>
      </div>

      {/* Region info modal */}
      {showInfo && selectedRegion && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg z-10">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">{selectedRegion.name}</h3>
              <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLanguageBgColor(selectedRegion.language)}`}>
                {selectedRegion.language === 'bulu' ? 'Bulu Language Region' :
                 selectedRegion.language === 'tupuri' ? 'Tupuri Language Region' :
                 'Mixed Language Region'}
              </div>
            </div>

            <div className="p-4 border-b border-gray-200">
              <div className="flex space-x-2 mb-4">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                    activeTab === 'info'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('info')}
                >
                  <Globe size={16} className="mr-1" />
                  Region Info
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                    activeTab === 'culture'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('culture')}
                >
                  <Book size={16} className="mr-1" />
                  Cultural Facts
                </button>
                {selectedRegion.audioSample && (
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                      activeTab === 'audio'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('audio')}
                  >
                    <Music size={16} className="mr-1" />
                    Audio
                  </button>
                )}
              </div>

              {activeTab === 'info' && (
                <div>
                  <p className="text-gray-600 mb-4">{selectedRegion.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users size={16} className="mr-2" />
                    <span>Estimated speakers: <strong>{selectedRegion.population}</strong></span>
                  </div>
                </div>
              )}

              {activeTab === 'culture' && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Cultural Facts:</h4>
                  <ul className="space-y-2">
                    {selectedRegion.culturalFacts.map((fact, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-2 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span className="text-gray-600">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'audio' && selectedRegion.audioSample && (
                <div className="text-center">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Listen to {selectedRegion.language} language sample:</h4>
                  <button
                    onClick={toggleAudio}
                    className={`p-4 rounded-full ${isPlaying ? 'bg-amber-100' : 'bg-gray-100'} hover:bg-amber-200 transition-colors`}
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    {isPlaying ? 'Click to pause' : 'Click to play'}
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 flex justify-end">
              <button
                className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                onClick={closeInfo}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageMap;
