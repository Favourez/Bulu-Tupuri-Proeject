import React from 'react';
import { BookOpen, MessageSquare, User, Info } from 'lucide-react';

interface DictionaryEntryProps {
  entry: {
    id: number;
    original_word: string;
    original_language: string;
    translation: string;
    translation_language: string;
    example_sentence?: string;
    notes?: string;
    contributor_name?: string;
    is_verified: boolean;
    created_at: string;
  };
}

const DictionaryEntry: React.FC<DictionaryEntryProps> = ({ entry }) => {
  return (
    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-lg">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-amber-400">
            {entry.original_word}
            <span className="ml-2 text-sm text-amber-300/70">
              ({entry.original_language})
            </span>
          </h3>
          <p className="text-white text-lg">
            {entry.translation}
            <span className="ml-2 text-sm text-amber-300/70">
              ({entry.translation_language})
            </span>
          </p>
        </div>
        
        {entry.is_verified && (
          <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-xs">
            Verified
          </div>
        )}
      </div>
      
      {entry.example_sentence && (
        <div className="mb-4">
          <div className="flex items-center text-amber-300 mb-1">
            <MessageSquare size={16} className="mr-2" />
            <span className="text-sm font-semibold">Example</span>
          </div>
          <p className="text-amber-100 italic pl-6">"{entry.example_sentence}"</p>
        </div>
      )}
      
      {entry.notes && (
        <div className="mb-4">
          <div className="flex items-center text-amber-300 mb-1">
            <Info size={16} className="mr-2" />
            <span className="text-sm font-semibold">Notes</span>
          </div>
          <p className="text-amber-100 pl-6">{entry.notes}</p>
        </div>
      )}
      
      <div className="flex justify-between items-center text-amber-300/70 text-xs mt-4">
        <div className="flex items-center">
          <User size={12} className="mr-1" />
          {entry.contributor_name ? entry.contributor_name : 'Anonymous'}
        </div>
        <div className="flex items-center">
          <BookOpen size={12} className="mr-1" />
          Added {new Date(entry.created_at).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default DictionaryEntry;
