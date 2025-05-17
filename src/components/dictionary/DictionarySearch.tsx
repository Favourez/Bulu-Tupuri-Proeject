import React, { useState, useEffect } from 'react';
import { Search, Loader } from 'lucide-react';
import { searchDictionary } from '../../services/dictionaryService';
import { LANGUAGES } from '../../config/backend';
import DictionaryEntry from './DictionaryEntry';

const DictionarySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [originalLanguage, setOriginalLanguage] = useState<string>('');
  const [translationLanguage, setTranslationLanguage] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    setIsLoading(true);
    setError(null);

    try {
      const result = await searchDictionary(
        searchQuery,
        originalLanguage || undefined,
        translationLanguage || undefined
      );

      if (result.success && result.data) {
        setSearchResults(result.data);
      } else {
        setError(result.message || 'Failed to search dictionary');
        setSearchResults([]);
      }
    } catch (err) {
      console.error('Error searching dictionary:', err);
      setError('An unexpected error occurred. Please try again later.');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial search on component mount
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for words..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/60 border border-amber-500/30 rounded-lg pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <Search
            size={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="originalLanguage" className="block text-amber-300 mb-2">
              Original Language
            </label>
            <select
              id="originalLanguage"
              value={originalLanguage}
              onChange={(e) => setOriginalLanguage(e.target.value)}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">All Languages</option>
              {LANGUAGES.ORIGINAL.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="translationLanguage" className="block text-amber-300 mb-2">
              Translation Language
            </label>
            <select
              id="translationLanguage"
              value={translationLanguage}
              onChange={(e) => setTranslationLanguage(e.target.value)}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">All Languages</option>
              {LANGUAGES.TRANSLATION.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader size={20} className="mr-2 animate-spin" />
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-lg">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader size={40} className="text-amber-400 animate-spin" />
        </div>
      ) : searchResults.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">
            {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
          </h3>
          <div className="space-y-4">
            {searchResults.map((entry) => (
              <DictionaryEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-amber-500/20 border border-amber-500/30 text-amber-300 p-6 rounded-lg text-center">
          <p className="text-lg">No dictionary entries found.</p>
          <p className="mt-2">Try a different search or add a new word to the dictionary!</p>
        </div>
      )}
    </div>
  );
};

export default DictionarySearch;
