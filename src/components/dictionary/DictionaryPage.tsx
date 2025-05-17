import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import DictionarySearch from './DictionarySearch';
import AddWordForm from './AddWordForm';

const DictionaryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'add'>('search');

  const handleWordAdded = () => {
    // Switch back to search tab after adding a word
    setActiveTab('search');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative bg-brown-900/80 backdrop-blur-sm p-8 rounded-xl border border-amber-500/30 shadow-lg mb-8">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-xl blur-sm -z-10"></div>
        
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Bulu-Tupuri Dictionary</h1>
        <p className="text-amber-100 text-lg max-w-3xl">
          Explore our growing collection of Bulu and Tupuri words and phrases. You can search for existing translations or contribute by adding new words to our dictionary.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex border-b border-amber-500/30">
          <button
            className={`flex items-center px-6 py-3 font-medium text-lg ${
              activeTab === 'search'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-amber-300/70 hover:text-amber-300'
            }`}
            onClick={() => setActiveTab('search')}
          >
            <Search size={20} className="mr-2" />
            Search Dictionary
          </button>
          <button
            className={`flex items-center px-6 py-3 font-medium text-lg ${
              activeTab === 'add'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-amber-300/70 hover:text-amber-300'
            }`}
            onClick={() => setActiveTab('add')}
          >
            <Plus size={20} className="mr-2" />
            Add New Word
          </button>
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeTab === 'search' ? (
          <DictionarySearch />
        ) : (
          <AddWordForm onWordAdded={handleWordAdded} />
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;
