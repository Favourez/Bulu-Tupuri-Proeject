import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Flag } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

type Language = 'english' | 'bulu' | 'tupuri';

interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
  label: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languageOptions = [
    {
      value: 'english',
      label: 'English',
      flag: '/images/african_pattern1.svg',
      description: 'Global language'
    },
    {
      value: 'bulu',
      label: 'Bulu',
      flag: '/images/cameroon_map.svg',
      description: 'Southern Cameroon'
    },
    {
      value: 'tupuri',
      label: 'Tupuri',
      flag: '/images/african_pattern2.svg',
      description: 'Northern Cameroon & Chad'
    },
  ];

  const selectedLanguage = languageOptions.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center">
            {selectedLanguage?.flag && (
              <div className="w-6 h-6 mr-2 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-100">
                <img
                  src={selectedLanguage.flag}
                  alt={`${selectedLanguage.label} flag`}
                  className="w-5 h-5 object-cover"
                />
              </div>
            )}
            <span>{selectedLanguage?.label}</span>
          </div>
          <ChevronDown
            size={16}
            className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul
              className="py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm"
              tabIndex={-1}
              role="listbox"
            >
              {languageOptions.map((option) => (
                <li
                  key={option.value}
                  className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-amber-50 ${
                    option.value === value ? 'bg-amber-100' : ''
                  }`}
                  onClick={() => {
                    onChange(option.value as Language);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={option.value === value}
                >
                  <div className="flex items-center">
                    {option.flag ? (
                      <div className="w-6 h-6 mr-3 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-100">
                        <img
                          src={option.flag}
                          alt={`${option.label} flag`}
                          className="w-5 h-5 object-cover"
                        />
                      </div>
                    ) : (
                      <Globe size={16} className="mr-3 text-gray-400" />
                    )}
                    <div className="flex flex-col">
                      <span className={`font-medium ${option.value === value ? 'text-amber-600' : 'text-gray-900'}`}>
                        {option.label}
                      </span>
                      {option.description && (
                        <span className="text-xs text-gray-500">{option.description}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;