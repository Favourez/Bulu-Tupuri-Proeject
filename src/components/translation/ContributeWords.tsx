import React, { useState, useEffect } from 'react';
import { Plus, Check, AlertTriangle, HelpCircle, X, Search } from 'lucide-react';
import AfricanLoader from '../ui/AfricanLoader';
import { addDictionaryEntry, searchDictionary } from '../../services/dictionaryService';
import { LANGUAGES } from '../../config/backend';

interface WordContribution {
  originalWord: string;
  translatedWord: string;
  originalLanguage: string;
  translatedLanguage: string;
  context?: string;
  partOfSpeech: string;
  contributor?: string;
  email?: string;
  isNativeSpeaker: boolean;
}

const ContributeWords: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const [contribution, setContribution] = useState<WordContribution>({
    originalWord: '',
    translatedWord: '',
    originalLanguage: 'english',
    translatedLanguage: 'bulu',
    context: '',
    partOfSpeech: 'noun',
    contributor: '',
    email: '',
    isNativeSpeaker: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContribution(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setContribution(prev => ({ ...prev, [name]: checked }));
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    if (!isFormOpen) {
      setShowSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert our form data to the dictionary entry format
      const dictionaryEntry = {
        original_word: contribution.originalWord,
        original_language: contribution.originalLanguage,
        translation: contribution.translatedWord,
        translation_language: contribution.translatedLanguage,
        example_sentence: contribution.context,
        notes: `Part of speech: ${contribution.partOfSpeech}${contribution.isNativeSpeaker ? ', Contributed by a native speaker' : ''}`,
        contributor_name: contribution.contributor || 'Anonymous',
        contributor_email: contribution.email || undefined
      };

      // Add the entry to the dictionary
      const result = await addDictionaryEntry(dictionaryEntry);

      if (result.success) {
        setShowSuccess(true);

        // Reset form
        setContribution({
          originalWord: '',
          translatedWord: '',
          originalLanguage: 'english',
          translatedLanguage: 'bulu',
          context: '',
          partOfSpeech: 'noun',
          contributor: '',
          email: '',
          isNativeSpeaker: false
        });
      } else {
        console.error('Error adding word to dictionary:', result.error);
        alert('Failed to add word to dictionary. Please try again.');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!searchQuery.trim()) {
      return;
    }

    setIsSearching(true);

    try {
      const result = await searchDictionary(searchQuery);

      if (result.success && result.data) {
        setSearchResults(result.data);
      } else {
        console.error('Error searching dictionary:', result.error);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error in handleSearch:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const partsOfSpeech = [
    { value: 'noun', label: 'Noun' },
    { value: 'verb', label: 'Verb' },
    { value: 'adjective', label: 'Adjective' },
    { value: 'adverb', label: 'Adverb' },
    { value: 'pronoun', label: 'Pronoun' },
    { value: 'preposition', label: 'Preposition' },
    { value: 'conjunction', label: 'Conjunction' },
    { value: 'interjection', label: 'Interjection' },
    { value: 'phrase', label: 'Phrase/Expression' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <button
          onClick={toggleForm}
          className={`btn-adinkra px-4 py-2 rounded-lg text-white text-sm flex items-center justify-center ${
            isFormOpen ? 'bg-gray-500 hover:bg-gray-600' : 'bg-brown-600 hover:bg-brown-700'
          } flex-1`}
        >
          {isFormOpen ? (
            <>
              <X size={16} className="mr-1" />
              Close Form
            </>
          ) : (
            <>
              <Plus size={16} className="mr-1" />
              Add New Word
            </>
          )}
        </button>

        <button
          onClick={() => {
            setShowSearch(!showSearch);
            if (!showSearch) {
              setIsFormOpen(false);
            }
          }}
          className={`btn-adinkra px-4 py-2 rounded-lg text-white text-sm flex items-center justify-center ${
            showSearch ? 'bg-gray-500 hover:bg-gray-600' : 'bg-amber-600 hover:bg-amber-700'
          } flex-1`}
        >
          {showSearch ? (
            <>
              <X size={16} className="mr-1" />
              Close Search
            </>
          ) : (
            <>
              <Search size={16} className="mr-1" />
              Search Dictionary
            </>
          )}
        </button>
      </div>

      {showSearch && (
        <div className="p-6 bg-amber-50 rounded-lg mb-4 animate-scale">
          <h3 className="text-xl font-bold text-brown-700 mb-4">Search Dictionary</h3>

          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for words in Bulu, Tupuri, English, or French..."
                className="w-full p-3 pl-10 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={18} />

              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-1.5 rounded-md hover:bg-amber-600 transition-colors"
                disabled={isSearching}
              >
                {isSearching ? <AfricanLoader size="small" /> : <Search size={16} />}
              </button>
            </div>
          </form>

          {searchResults.length > 0 ? (
            <div className="space-y-4">
              <h4 className="font-semibold text-brown-700">
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
              </h4>

              <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                {searchResults.map((entry) => (
                  <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm border border-amber-200">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold text-brown-700">
                          {entry.original_word}
                          <span className="text-xs ml-1 text-amber-600">({entry.original_language})</span>
                        </p>
                        <p className="text-gray-700">
                          {entry.translation}
                          <span className="text-xs ml-1 text-amber-600">({entry.translation_language})</span>
                        </p>
                      </div>
                      {entry.is_verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <Check size={12} className="mr-1" />
                          Verified
                        </span>
                      )}
                    </div>

                    {entry.example_sentence && (
                      <p className="text-gray-600 text-sm mt-2 italic">
                        "{entry.example_sentence}"
                      </p>
                    )}

                    {entry.notes && (
                      <p className="text-gray-600 text-sm mt-1">
                        {entry.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : searchQuery && !isSearching ? (
            <div className="text-center py-6">
              <p className="text-gray-600">No results found for "{searchQuery}"</p>
              <p className="text-amber-600 mt-2">
                Why not add this word to our dictionary?
              </p>
              <button
                onClick={() => {
                  setShowSearch(false);
                  setIsFormOpen(true);
                  setContribution(prev => ({
                    ...prev,
                    originalWord: searchQuery
                  }));
                }}
                className="mt-3 px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors text-sm flex items-center mx-auto"
              >
                <Plus size={14} className="mr-1" />
                Add "{searchQuery}" to Dictionary
              </button>
            </div>
          ) : null}
        </div>
      )}

      {isFormOpen && (
        <div className="p-6 bg-amber-50">
          {showSuccess ? (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-md w-full relative animate-scale">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-xl blur-sm -z-10"></div>

                <div className="relative">
                  <img
                    src="/images/africa1.png"
                    alt="Thank you"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contribution Received!</h3>
                  <p className="text-gray-600 mb-6">
                    Your word contribution has been submitted successfully. We value your input as it will greatly help us preserve and promote Cameroon's linguistic heritage.
                  </p>
                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      setIsFormOpen(false);
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-md font-semibold text-brown-700">Word Information</h4>
                <button
                  type="button"
                  className="text-amber-600 hover:text-amber-700 flex items-center text-sm"
                  onClick={() => setShowTip(!showTip)}
                >
                  <HelpCircle size={16} className="mr-1" />
                  Tips for good contributions
                </button>
              </div>

              {showTip && (
                <div className="mb-6 p-4 bg-amber-100 rounded-lg border border-amber-200 text-sm">
                  <h5 className="font-semibold text-brown-700 mb-2 flex items-center">
                    <AlertTriangle size={16} className="mr-1 text-amber-600" />
                    Tips for Quality Contributions
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-brown-600">
                    <li>Provide accurate translations that are commonly used by native speakers</li>
                    <li>Include context or example usage when possible</li>
                    <li>Specify the part of speech to help with proper categorization</li>
                    <li>For words with multiple meanings, consider submitting separate entries</li>
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Original Language
                  </label>
                  <select
                    name="originalLanguage"
                    value={contribution.originalLanguage}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="bulu">Bulu</option>
                    <option value="tupuri">Tupuri</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Translation Language
                  </label>
                  <select
                    name="translatedLanguage"
                    value={contribution.translatedLanguage}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="bulu" disabled={contribution.originalLanguage === 'bulu'}>Bulu</option>
                    <option value="tupuri" disabled={contribution.originalLanguage === 'tupuri'}>Tupuri</option>
                    <option value="english" disabled={contribution.originalLanguage === 'english'}>English</option>
                    <option value="french" disabled={contribution.originalLanguage === 'french'}>French</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Original Word
                  </label>
                  <input
                    type="text"
                    name="originalWord"
                    value={contribution.originalWord}
                    onChange={handleChange}
                    placeholder={`Enter word in ${contribution.originalLanguage}`}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Translation
                  </label>
                  <input
                    type="text"
                    name="translatedWord"
                    value={contribution.translatedWord}
                    onChange={handleChange}
                    placeholder={`Enter translation in ${contribution.translatedLanguage}`}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Part of Speech
                  </label>
                  <select
                    name="partOfSpeech"
                    value={contribution.partOfSpeech}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    {partsOfSpeech.map(pos => (
                      <option key={pos.value} value={pos.value}>{pos.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Context or Example (optional)
                  </label>
                  <input
                    type="text"
                    name="context"
                    value={contribution.context}
                    onChange={handleChange}
                    placeholder="Provide context or an example sentence"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6 border-t border-gray-200 pt-6">
                <h4 className="text-md font-semibold text-brown-700 mb-4">Contributor Information (Optional)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="contributor"
                      value={contribution.contributor}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contribution.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isNativeSpeaker"
                    checked={contribution.isNativeSpeaker}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I am a native speaker of {contribution.translatedLanguage === 'english' || contribution.translatedLanguage === 'french'
                      ? contribution.originalLanguage
                      : contribution.translatedLanguage}
                  </span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-adinkra flex items-center px-6 py-3 rounded-lg text-white font-medium bg-brown-600 hover:bg-brown-700 shadow-md transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <AfricanLoader size="small" />
                      <span className="ml-2">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Plus size={18} className="mr-2" />
                      Submit Word
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ContributeWords;
