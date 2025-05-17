import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { submitContactForm } from '../../services/contactService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

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
    setSubmitResult({});

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitResult({
          success: false,
          message: 'Please fill in all required fields.',
        });
        setIsSubmitting(false);
        return;
      }

      // Submit form
      const result = await submitContactForm(formData);
      
      // Show result
      setSubmitResult({
        success: result.success,
        message: result.message,
      });

      // Reset form if successful
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
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
      
      <h3 className="text-2xl font-bold mb-6 text-amber-400">Send Us a Message</h3>
      
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
            <label htmlFor="name" className="block text-amber-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-amber-300 mb-2">
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-amber-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-black/60 border border-amber-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-amber-300 mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
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

export default ContactForm;
