import React, { useState } from 'react';
import { X, Loader } from 'lucide-react';
import { createChat } from '../../services/chatService';

interface NewChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChatCreated: () => void;
}

const NewChatModal: React.FC<NewChatModalProps> = ({
  isOpen,
  onClose,
  onChatCreated,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    created_by: '',
    is_public: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    setError(null);

    try {
      // Validate form
      if (!formData.title || !formData.created_by) {
        setError('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
      }

      // Submit form
      const result = await createChat(formData);
      
      if (result.success) {
        onChatCreated();
      } else {
        setError(result.message || 'Failed to create discussion');
      }
    } catch (err) {
      console.error('Error creating chat:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-2xl p-8 bg-gradient-to-br from-brown-900 to-black rounded-xl border border-amber-500/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-300 hover:text-amber-400 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Start a New Discussion</h2>
        
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-amber-300 mb-2">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-amber-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="created_by" className="block text-amber-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="created_by"
              name="created_by"
              value={formData.created_by}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-black/60 border border-amber-500/30 text-amber-300 font-bold rounded-lg hover:bg-black/80 transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader size={20} className="mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Discussion'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewChatModal;
