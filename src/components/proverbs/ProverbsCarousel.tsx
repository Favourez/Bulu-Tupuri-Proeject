import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Share2 } from 'lucide-react';

interface Proverb {
  id: number;
  original: string;
  translation: string;
  language: 'bulu' | 'tupuri';
  explanation: string;
  category: string;
}

const proverbs: Proverb[] = [
  {
    id: 1,
    original: "Mvoe ya abum e ne nkukuma",
    translation: "Peace of mind is wealth",
    language: "bulu",
    explanation: "This Bulu proverb emphasizes that inner peace and contentment are more valuable than material possessions.",
    category: "wisdom"
  },
  {
    id: 2,
    original: "Mod a bo'o a bo'o a bo'o a wog nnem",
    translation: "A person who keeps trying will eventually succeed",
    language: "bulu",
    explanation: "This proverb encourages persistence and determination in the face of challenges.",
    category: "perseverance"
  },
  {
    id: 3,
    original: "Waa dï haa waa yak kpaa",
    translation: "The hand that gives is the hand that receives",
    language: "tupuri",
    explanation: "This Tupuri saying teaches the importance of generosity and how kindness is often reciprocated.",
    category: "generosity"
  },
  {
    id: 4,
    original: "Sï waa lak baa, waa yoo baa",
    translation: "If you plant thorns, you will harvest thorns",
    language: "tupuri",
    explanation: "Similar to 'you reap what you sow', this proverb warns that your actions have consequences.",
    category: "consequences"
  }
];

const ProverbsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const currentProverb = proverbs[currentIndex];

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proverbs.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + proverbs.length) % proverbs.length);
      setIsAnimating(false);
    }, 300);
  };

  const copyToClipboard = () => {
    const textToCopy = `"${currentProverb.original}" - ${currentProverb.language} proverb\nTranslation: "${currentProverb.translation}"\n${currentProverb.explanation}`;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getLanguageColor = (language: string) => {
    return language === 'bulu' ? 'text-amber-600' : 'text-green-600';
  };

  const getLanguageBg = (language: string) => {
    return language === 'bulu' ? 'bg-amber-100' : 'bg-green-100';
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden african-border">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-green-500"></div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">African Proverbs</h3>
            <div className="flex items-center space-x-2">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous proverb"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next proverb"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex items-start mb-6">
              <div className={`p-3 rounded-full ${getLanguageBg(currentProverb.language)} mr-4`}>
                <Quote size={24} className={getLanguageColor(currentProverb.language)} />
              </div>
              <div>
                <div className={`text-sm font-medium mb-1 ${getLanguageColor(currentProverb.language)}`}>
                  {currentProverb.language === 'bulu' ? 'Bulu Proverb' : 'Tupuri Proverb'}
                </div>
                <div className="text-xl font-bold text-gray-800 mb-2">"{currentProverb.original}"</div>
                <div className="text-lg text-gray-700 mb-4">"{currentProverb.translation}"</div>
                <p className="text-gray-600">{currentProverb.explanation}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Category: <span className="font-medium">{currentProverb.category}</span>
              </div>
              <button 
                onClick={copyToClipboard}
                className="flex items-center text-sm text-amber-600 hover:text-amber-700 transition-colors"
              >
                <Share2 size={16} className="mr-1" />
                {copySuccess ? 'Copied!' : 'Share'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center pb-4">
          {proverbs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                index === currentIndex ? 'bg-amber-500 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to proverb ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProverbsCarousel;
