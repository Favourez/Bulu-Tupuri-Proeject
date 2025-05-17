import supabaseClient from '../utils/supabaseClient';
import { DB_TABLES } from '../config/backend';

/**
 * Interface for dictionary entry data
 */
export interface DictionaryEntryData {
  original_word: string;
  original_language: string; // 'bulu' or 'tupuri'
  translation: string;
  translation_language: string; // 'english' or 'french'
  example_sentence?: string;
  notes?: string;
  contributor_name?: string;
  contributor_email?: string;
}

/**
 * Add a new word to the dictionary
 * @param entryData The dictionary entry data
 * @returns Promise that resolves with the result of the addition
 */
export const addDictionaryEntry = async (entryData: DictionaryEntryData) => {
  try {
    console.log('[Dictionary Service] Adding new dictionary entry:', entryData);

    // Insert the new entry into the database
    const { data, error } = await supabaseClient
      .from(DB_TABLES.DICTIONARY)
      .insert([
        {
          original_word: entryData.original_word.toLowerCase().trim(),
          original_language: entryData.original_language.toLowerCase(),
          translation: entryData.translation.toLowerCase().trim(),
          translation_language: entryData.translation_language.toLowerCase(),
          example_sentence: entryData.example_sentence || null,
          notes: entryData.notes || null,
          contributor_name: entryData.contributor_name || null,
          contributor_email: entryData.contributor_email || null,
          is_verified: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('[Dictionary Service] Error adding dictionary entry:', error);
      return {
        success: false,
        message: 'Failed to add word to dictionary. Please try again.',
        error
      };
    }

    console.log('[Dictionary Service] Dictionary entry added successfully:', data);

    return {
      success: true,
      message: 'Word added to dictionary successfully!',
      data
    };
  } catch (error) {
    console.error('[Dictionary Service] Unexpected error in addDictionaryEntry:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

/**
 * Search the dictionary
 * @param query The search query
 * @param originalLanguage The original language to filter by (optional)
 * @param translationLanguage The translation language to filter by (optional)
 * @returns Promise that resolves with the search results
 */
export const searchDictionary = async (
  query: string,
  originalLanguage?: string,
  translationLanguage?: string
) => {
  try {
    console.log(`[Dictionary Service] Searching dictionary for "${query}"`);

    // Start building the query
    let queryBuilder = supabaseClient
      .from(DB_TABLES.DICTIONARY)
      .select('*');

    // Add filters if provided
    if (originalLanguage) {
      queryBuilder = queryBuilder.eq('original_language', originalLanguage.toLowerCase());
    }

    if (translationLanguage) {
      queryBuilder = queryBuilder.eq('translation_language', translationLanguage.toLowerCase());
    }

    // Execute the query
    const { data, error } = await queryBuilder.execute();

    if (error) {
      console.error('[Dictionary Service] Error searching dictionary:', error);
      return {
        success: false,
        message: 'Failed to search dictionary. Please try again.',
        error
      };
    }

    // Check if data exists before filtering
    if (!data || !Array.isArray(data)) {
      console.log('[Dictionary Service] No data returned from query or data is not an array');
      return {
        success: true,
        data: []
      };
    }

    // Filter results by query (client-side filtering)
    const lowercaseQuery = query.toLowerCase();
    const filteredData = data.filter(entry =>
      entry.original_word.toLowerCase().includes(lowercaseQuery) ||
      entry.translation.toLowerCase().includes(lowercaseQuery)
    );

    console.log(`[Dictionary Service] Found ${filteredData.length} results for "${query}"`);

    return {
      success: true,
      data: filteredData
    };
  } catch (error) {
    console.error('[Dictionary Service] Unexpected error in searchDictionary:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

export default {
  addDictionaryEntry,
  searchDictionary
};
