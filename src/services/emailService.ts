import { EMAIL_CONFIG } from '../config/backend';

// Real email service using the Express server API endpoint
const API_URL = 'http://localhost:3001/api';

/**
 * Send an email
 * @param to Recipient email address
 * @param subject Email subject
 * @param text Plain text version of the email
 * @param html HTML version of the email
 * @returns Promise that resolves with the info object from nodemailer
 */
export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html: string
) => {
  try {
    const response = await fetch(`${API_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `"BuluTupuri Translator" <${EMAIL_CONFIG.auth.user}>`,
        to,
        subject,
        text,
        html,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.error('Error sending email:', result.message);
      return { success: false, error: result.message };
    }

    console.log('Message sent: %s', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

/**
 * Send a contact form submission notification
 * @param name Name of the person submitting the form
 * @param email Email of the person submitting the form
 * @param message Message content
 * @returns Promise that resolves with the result of the email sending
 */
export const sendContactFormEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const subject = `New Contact Form Submission from ${name}`;
  const text = `
    You have received a new contact form submission:

    Name: ${name}
    Email: ${email}

    Message:
    ${message}
  `;
  const html = `
    <h2>New Contact Form Submission</h2>
    <p>You have received a new message from the BuluTupuri Translator contact form.</p>

    <h3>Contact Details:</h3>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
    </ul>

    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail(EMAIL_CONFIG.auth.user, subject, text, html);
};

/**
 * Send an auto-reply to the person who submitted the contact form
 * @param name Name of the person submitting the form
 * @param email Email of the person submitting the form
 * @returns Promise that resolves with the result of the email sending
 */
export const sendContactFormAutoReply = async (
  name: string,
  email: string
) => {
  const subject = 'Thank you for contacting BuluTupuri Translator';
  const text = `
    Dear ${name},

    Thank you for contacting the BuluTupuri Translator team. We have received your message and will get back to you as soon as possible.

    Best regards,
    The BuluTupuri Translator Team
  `;
  const html = `
    <h2>Thank You for Contacting Us</h2>
    <p>Dear ${name},</p>

    <p>Thank you for contacting the BuluTupuri Translator team. We have received your message and will get back to you as soon as possible.</p>

    <p>Best regards,<br>
    The BuluTupuri Translator Team</p>
  `;

  return sendEmail(email, subject, text, html);
};

export default {
  sendEmail,
  sendContactFormEmail,
  sendContactFormAutoReply
};
