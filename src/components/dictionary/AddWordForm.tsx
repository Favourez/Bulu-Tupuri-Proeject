import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { addDictionaryEntry } from '../../services/dictionaryService';
import { LANGUAGES } from '../../config/backend';

interface AddWordFormProps {
  onWordAdded?: () => void;
}

const AddWordForm: React.FC<AddWordFormProps> = ({ onWordAdded }) => {
  const [formData, setFormData] = useState({
    original_word: '',
    original_language: LANGUAGES.ORIGINAL[0], // Default to first language (bulu)
    translation: '',
    translation_language: LANGUAGES.TRANSLATION[0], // Default to first language (english)
    example_sentence: '',
    notes: '',
    contributor_name: '',
    contributor_email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({});

    try {
      // Validate form
      if (!formData.original_word || !formData.translation) {
        setSubmitResult({
          success: false,
          message: 'Please fill in all required fields.',
        });
        setIsSubmitting(false);
        return;
      }

      // Submit form
      const result = await addDictionaryEntry(formData);
      
      // Show result
      setSubmitResult({
        success: result.success,
        message: result.message,
      });

      // Reset form if successful
      if (result.success) {
        setFormData({
          original_word: '',
          original_language: formData.original_language,
          translation: '',
          translation_language: formData.translation_language,
          example_sentence: '',
          notes: '',
          contributor_name: formData.contributor_name,
          contributor_email: formData.contributor_email,
        });

        // Notify parent component
        if (onWordAdded) {
          onWordAdded();
        }
      }
    } catch (error) {
      console.error('Error adding word to dictionary:', error);
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-lg relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>
      
      <h3 className="text-2xl font-bold mb-6 text-amber-400">Add New Word to Dictionary</h3>
      
      {submitResult.message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitResult.success
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : 'bg-red-500/20 border border-red-500/30 text-red-300'
          }`}
        >
          {submitResult.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="original_word" className="block text-amber-300 mb-2">
              Original Word <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="original_word"
              name="original_word"
              value={formData.original_word}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="original_language" className="block text-amber-300 mb-2">
              Original Language <span className="text-red-400">*</span>
            </label>
            <select
              id="original_language"
              name="original_language"
              value={formData.original_language}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            >
              {LANGUAGES.ORIGINAL.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="translation" className="block text-amber-300 mb-2">
              Translation <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="translation"
              name="translation"
              value={formData.translation}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="translation_language" className="block text-amber-300 mb-2">
              Translation Language <span className="text-red-400">*</span>
            </label>
            <select
              id="translation_language"
              name="translation_language"
              value={formData.translation_language}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            >
              {LANGUAGES.TRANSLATION.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="example_sentence" className="block text-amber-300 mb-2">
            Example Sentence
          </label>
          <textarea
            id="example_sentence"
            name="example_sentence"
            value={formData.example_sentence}
            onChange={handleChange}
            rows={3}
            className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-amber-300 mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contributor_name" className="block text-amber-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="contributor_name"
              name="contributor_name"
              value={formData.contributor_name}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="contributor_email" className="block text-amber-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="contributor_email"
              name="contributor_email"
              value={formData.contributor_email}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader size={20} className="mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Add Word to Dictionary'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWordForm;
