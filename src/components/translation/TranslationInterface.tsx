import React, { useEffect, useState } from 'react';
import { ArrowLeftRight, Send, Volume2, Copy, Info } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';
import AfricanLoader from '../ui/AfricanLoader';

const TranslationInterface: React.FC = () => {
  const {
    sourceLanguage,
    targetLanguage,
    setSourceLanguage,
    setTargetLanguage,
    swapLanguages,
    inputText,
    translatedText,
    setInputText,
    translateText,
    isTranslating
  } = useTranslation();

  const [showCulturalNotes, setShowCulturalNotes] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Cultural notes for translations (would be dynamic in a real app)
  const culturalNotes = {
    bulu: "Bulu is a Bantu language spoken in southern Cameroon. It uses tonal distinctions and has a rich oral tradition.",
    tupuri: "Tupuri is spoken in northern Cameroon and southern Chad. It has unique grammatical structures and cultural expressions."
  };

  // Copy translation to clipboard
  const copyToClipboard = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  // Auto-translate when input changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        translateText();
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [inputText, sourceLanguage, targetLanguage]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200 african-border">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center border-b border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <LanguageSelector
            value={sourceLanguage}
            onChange={setSourceLanguage}
            label="Translate from"
          />
        </div>

        <button
          onClick={swapLanguages}
          className="p-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-200 transform hover:scale-110 shadow-md mx-4"
          aria-label="Swap languages"
        >
          <ArrowLeftRight size={20} />
        </button>

        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <LanguageSelector
            value={targetLanguage}
            onChange={setTargetLanguage}
            label="Translate to"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Source language input */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-amber-200">
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Enter text in ${sourceLanguage}...`}
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-inner"
            />
            <div className="absolute bottom-3 right-3 flex space-x-2">
              <button
                onClick={() => setInputText('')}
                disabled={!inputText.trim()}
                className={`p-2 rounded-full ${
                  !inputText.trim() ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'
                }`}
                title="Clear text"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={translateText}
              disabled={!inputText.trim() || isTranslating}
              className={`btn-adinkra flex items-center px-6 py-3 rounded-lg text-white font-medium ${
                !inputText.trim() || isTranslating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-700 shadow-md'
              } transition-all duration-200`}
            >
              <Send size={18} className="mr-2" />
              {isTranslating ? 'Translating...' : 'Translate'}
            </button>
          </div>
        </div>

        {/* Target language output */}
        <div className="p-6 bg-amber-50">
          <div className="relative">
            <div className="w-full h-48 p-4 border border-gray-300 bg-white rounded-lg shadow-inner overflow-auto">
              {isTranslating ? (
                <div className="flex justify-center items-center h-full">
                  <AfricanLoader size="medium" text="Translating..." />
                </div>
              ) : (
                translatedText ? (
                  <div className="text-gray-800">
                    {translatedText}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <img src="/images/african_pattern_bg.svg" alt="" className="w-16 h-16 mb-3 opacity-30" />
                    <span>Translation will appear here...</span>
                  </div>
                )
              )}
            </div>

            {translatedText && !isTranslating && (
              <div className="absolute bottom-3 right-3 flex space-x-2">
                <button
                  onClick={() => setShowCulturalNotes(!showCulturalNotes)}
                  className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                  title="Cultural notes"
                >
                  <Info size={16} />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                  title="Copy translation"
                >
                  <Copy size={16} />
                </button>
                <button
                  className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                  title="Listen to pronunciation"
                >
                  <Volume2 size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Copy success message */}
          {copySuccess && (
            <div className="mt-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Copied to clipboard!
            </div>
          )}

          {/* Cultural notes */}
          {showCulturalNotes && targetLanguage !== 'english' && (
            <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-200 text-sm">
              <h4 className="font-bold text-amber-800 mb-1">Cultural Notes:</h4>
              <p className="text-amber-700">
                {culturalNotes[targetLanguage as keyof typeof culturalNotes]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Language learning resources */}
      <div className="p-4 border-t border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-amber-700">
            {targetLanguage !== 'english' && `Learn more about ${targetLanguage} language and culture`}
          </span>
          {targetLanguage !== 'english' && (
            <a href="#" className="text-sm text-amber-600 hover:text-amber-800 font-medium">
              View resources →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslationInterface;