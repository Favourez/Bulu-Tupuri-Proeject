import supabaseClient from '../utils/supabaseClient';
import { DB_TABLES } from '../config/backend';
import { sendContactFormEmail, sendContactFormAutoReply } from './emailService';

/**
 * Interface for contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Submit a contact form
 * @param formData The contact form data
 * @returns Promise that resolves with the result of the submission
 */
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    console.log('[Contact Service] Submitting contact form:', formData);

    // 1. Store the contact form submission in the database
    const { data, error } = await supabaseClient
      .from(DB_TABLES.CONTACTS)
      .insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('[Contact Service] Error storing contact form submission:', error);
      return {
        success: false,
        message: 'Failed to store your message. Please try again.',
        error
      };
    }

    console.log('[Contact Service] Contact form stored in database:', data);

    // 2. Send notification email to admin
    try {
      const emailResult = await sendContactFormEmail(
        formData.name,
        formData.email,
        formData.message
      );

      if (!emailResult.success) {
        console.error('[Contact Service] Error sending notification email:', emailResult.error);
        // We still return success since the data was stored in the database
        return {
          success: true,
          message: 'Your message was received, but there was an issue sending the notification email.',
          data
        };
      }

      // 3. Send auto-reply to the user
      const autoReplyResult = await sendContactFormAutoReply(
        formData.name,
        formData.email
      );

      if (!autoReplyResult.success) {
        console.error('[Contact Service] Error sending auto-reply email:', autoReplyResult.error);
        // We still return success since the data was stored and admin notification was sent
        return {
          success: true,
          message: 'Your message was received, but there was an issue sending the confirmation email.',
          data
        };
      }

      // 4. Return success
      return {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
        data
      };
    } catch (emailError) {
      console.error('[Contact Service] Error sending emails:', emailError);
      // We still return success since the data was stored in the database
      return {
        success: true,
        message: 'Your message was received, but there was an issue sending confirmation emails. We will still process your request.',
        data
      };
    }
  } catch (error) {
    console.error('[Contact Service] Unexpected error in submitContactForm:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    };
  }
};

export default {
  submitContactForm,
};
