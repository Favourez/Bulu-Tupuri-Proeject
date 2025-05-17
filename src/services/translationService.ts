import { translation as englishBuluTranslation } from '../../data/english_bulu';
import { translation as englishTupuriTranslation } from '../../data/english_tupuri';

// Define language types
export type Language = 'english' | 'bulu' | 'tupuri';

// Interface for translation pair
export interface TranslationPair {
  source: string;
  target: string;
}

/**
 * Calculate similarity between two strings
 * @param str1 First string
 * @param str2 Second string
 * @returns Similarity score between 0 and 1
 */
const calculateSimilarity = (str1: string, str2: string): number => {
  // Convert to lowercase for case-insensitive comparison
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  // Simple implementation using Levenshtein distance
  const longerLength = Math.max(s1.length, s2.length);
  if (longerLength === 0) return 1.0;
  
  // Calculate Levenshtein distance
  const levenshteinDistance = (a: string, b: string): number => {
    const matrix: number[][] = [];
    
    // Initialize matrix
    for (let i = 0; i <= a.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
    
    // Fill matrix
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // deletion
          matrix[i][j - 1] + 1,      // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
    
    return matrix[a.length][b.length];
  };
  
  const distance = levenshteinDistance(s1, s2);
  return (longerLength - distance) / longerLength;
};

/**
 * Find the best matching translation for the input text
 * @param inputText Text to translate
 * @param sourceLanguage Source language
 * @param targetLanguage Target language
 * @returns The translated text or null if no match found
 */
export const findBestMatch = (
  inputText: string,
  sourceLanguage: Language,
  targetLanguage: Language
): string | null => {
  // Determine which translation dataset to use
  let translationData: TranslationPair[] = [];
  let sourceField: 'source' | 'target' = 'source';
  let targetField: 'source' | 'target' = 'target';
  
  if (sourceLanguage === 'english' && targetLanguage === 'bulu') {
    translationData = englishBuluTranslation;
    sourceField = 'source';
    targetField = 'target';
  } else if (sourceLanguage === 'english' && targetLanguage === 'tupuri') {
    translationData = englishTupuriTranslation;
    sourceField = 'source';
    targetField = 'target';
  } else if (sourceLanguage === 'bulu' && targetLanguage === 'english') {
    translationData = englishBuluTranslation;
    sourceField = 'target';
    targetField = 'source';
  } else if (sourceLanguage === 'tupuri' && targetLanguage === 'english') {
    translationData = englishTupuriTranslation;
    sourceField = 'target';
    targetField = 'source';
  } else {
    // Unsupported language pair
    return null;
  }
  
  // Find the best match
  let bestMatch: TranslationPair | null = null;
  let highestSimilarity = 0.7; // Threshold for similarity (70%)
  
  for (const pair of translationData) {
    const similarity = calculateSimilarity(inputText, pair[sourceField]);
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatch = pair;
    }
  }
  
  return bestMatch ? bestMatch[targetField] : null;
};

/**
 * Translate text from source language to target language
 * @param text Text to translate
 * @param sourceLanguage Source language
 * @param targetLanguage Target language
 * @returns Promise that resolves with the translated text
 */
export const translateText = async (
  text: string,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<{ success: boolean; translation?: string; error?: string }> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (!text.trim()) {
      return { success: false, error: 'No text provided for translation' };
    }
    
    // If source and target are the same, return the original text
    if (sourceLanguage === targetLanguage) {
      return { success: true, translation: text };
    }
    
    // Find the best match for translation
    const translatedText = findBestMatch(text, sourceLanguage, targetLanguage);
    
    if (translatedText) {
      return { success: true, translation: translatedText };
    } else {
      return { 
        success: false, 
        error: `No matching translation found for the given text from ${sourceLanguage} to ${targetLanguage}` 
      };
    }
  } catch (error) {
    console.error('[Translation Service] Error translating text:', error);
    return { 
      success: false, 
      error: 'An error occurred during translation' 
    };
  }
};

export default {
  translateText,
  findBestMatch
};