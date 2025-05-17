import React, { useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { MessageSquare, Check, AlertTriangle } from 'lucide-react';
import AfricanLoader from '../ui/AfricanLoader';

const ProposalForm: React.FC = () => {
  const {
    translatedText,
    proposedTranslation,
    setProposedTranslation,
    submitProposal,
    isSubmittingProposal,
    sourceLanguage,
    targetLanguage,
    inputText
  } = useTranslation();

  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNativeSpeaker, setIsNativeSpeaker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitProposal();

    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setName('');
      setEmail('');
      setIsNativeSpeaker(false);
    }, 3000);
  };

  if (!translatedText) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200 african-border">
      <div className="p-4 border-b border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="flex items-center">
          <div className="p-2 bg-amber-100 rounded-full mr-3">
            <MessageSquare className="text-amber-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Suggest Better Translation</h3>
            <p className="text-sm text-gray-600">
              Help us improve our translations by suggesting a more accurate alternative.
            </p>
          </div>
        </div>
      </div>

      {showSuccess ? (
        <div className="p-8 text-center">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <Check className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your translation suggestion has been submitted successfully. Our team will review it shortly.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="btn-adinkra px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-all"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Original Text:</h4>
                <div className="p-3 bg-white rounded border border-gray-200 text-gray-800 text-sm min-h-[60px]">
                  {inputText}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Current Translation:</h4>
                <div className="p-3 bg-white rounded border border-gray-200 text-gray-800 text-sm min-h-[60px]">
                  {translatedText}
                </div>
              </div>
            </div>
            <div className="flex items-center text-amber-700 text-sm">
              <AlertTriangle size={16} className="mr-2" />
              <span>Is this translation incorrect or could it be improved?</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your suggested translation from {sourceLanguage} to {targetLanguage}:
            </label>
            <textarea
              value={proposedTranslation}
              onChange={(e) => setProposedTranslation(e.target.value)}
              placeholder="Enter your proposed translation here..."
              className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-inner"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name (optional):
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email (optional):
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isNativeSpeaker}
                onChange={(e) => setIsNativeSpeaker(e.target.checked)}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                I am a native speaker of {targetLanguage}
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!proposedTranslation.trim() || isSubmittingProposal}
              className={`btn-adinkra flex items-center px-6 py-3 rounded-lg text-white font-medium ${
                !proposedTranslation.trim() || isSubmittingProposal
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-700 shadow-md'
              } transition-all duration-200`}
            >
              {isSubmittingProposal ? (
                <>
                  <AfricanLoader size="small" />
                  <span className="ml-2">Submitting...</span>
                </>
              ) : (
                'Submit Proposal'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProposalForm;