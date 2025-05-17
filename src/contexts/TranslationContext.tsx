import React, { createContext, useState, useContext } from 'react';

// Define translation language types
type Language = 'english' | 'bulu' | 'tupuri';

interface TranslationContextType {
  sourceLanguage: Language;
  targetLanguage: Language;
  setSourceLanguage: (lang: Language) => void;
  setTargetLanguage: (lang: Language) => void;
  swapLanguages: () => void;
  inputText: string;
  translatedText: string;
  setInputText: (text: string) => void;
  translateText: () => void;
  isTranslating: boolean;
  proposedTranslation: string;
  setProposedTranslation: (text: string) => void;
  submitProposal: () => void;
  isSubmittingProposal: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sourceLanguage, setSourceLanguage] = useState<Language>('english');
  const [targetLanguage, setTargetLanguage] = useState<Language>('bulu');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [proposedTranslation, setProposedTranslation] = useState('');
  const [isSubmittingProposal, setIsSubmittingProposal] = useState(false);

  // Translation function using the translation service
  const translateText = async () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    setIsTranslating(true);
    
    try {
      // Use the translation service to find the best match
      const { findBestMatch } = await import('../services/translationService');
      const translation = findBestMatch(inputText, sourceLanguage, targetLanguage);
      const success = translation !== null;
      const error = !success ? 'No translation found' : undefined;
      
      if (success && translation) {
        setTranslatedText(translation);
      } else {
        // If no match found, show a message
        setTranslatedText(`No translation found. ${error || ''}`);
        console.warn('Translation not found:', error);
      }
    } catch (error) {
      console.error('Error during translation:', error);
      setTranslatedText('An error occurred during translation.');
    } finally {
      setIsTranslating(false);
    }
  };

  // Swap source and target languages
  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  // Submit translation proposal
  const submitProposal = () => {
    if (!proposedTranslation.trim()) return;
    
    setIsSubmittingProposal(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would send the proposal to a backend
      console.log('Proposal submitted:', {
        originalText: inputText,
        originalTranslation: translatedText,
        proposedTranslation,
        fromLanguage: sourceLanguage,
        toLanguage: targetLanguage
      });
      
      setProposedTranslation('');
      setIsSubmittingProposal(false);
      // Show success notification (would be implemented in a real app)
    }, 1000);
  };

  return (
    <TranslationContext.Provider
      value={{
        sourceLanguage,
        targetLanguage,
        setSourceLanguage,
        setTargetLanguage,
        swapLanguages,
        inputText,
        translatedText,
        setInputText,
        translateText,
        isTranslating,
        proposedTranslation,
        setProposedTranslation,
        submitProposal,
        isSubmittingProposal
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};