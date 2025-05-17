import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { addMessage } from '../../services/chatService';

interface MessageFormProps {
  chatId: number;
  onMessageAdded: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ chatId, onMessageAdded }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    content: '',
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
      if (!formData.user_name || !formData.user_email || !formData.content) {
        setError('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
      }

      // Submit message
      const result = await addMessage({
        chat_id: chatId,
        user_name: formData.user_name,
        user_email: formData.user_email,
        content: formData.content,
      });
      
      if (result.success) {
        // Reset form
        setFormData((prev) => ({
          ...prev,
          content: '',
        }));
        
        // Notify parent component
        onMessageAdded();
      } else {
        setError(result.message || 'Failed to add message');
      }
    } catch (err) {
      console.error('Error adding message:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-lg">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>
      
      <h3 className="text-xl font-bold text-amber-400 mb-4">Add Your Message</h3>
      
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="user_name" className="block text-amber-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="user_email" className="block text-amber-300 mb-2">
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="content" className="block text-amber-300 mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={4}
            className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-xl hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader size={20} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
