const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: 'bulutupuri@gmail.com',
    pass: 'rckh gsgz pmsb eqpp'
  }
};

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { from, to, subject, text, html } = req.body;
    
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields (to, subject, and either text or html)' 
      });
    }
    
    const mailOptions = {
      from: from || `"BuluTupuri Translator" <${EMAIL_CONFIG.auth.user}>`,
      to,
      subject,
      text,
      html
    };
    
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Message sent: %s', info.messageId);
    
    return res.status(200).json({ 
      success: true, 
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// API endpoint for contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields (name, email, message)' 
      });
    }
    
    // Send notification to admin
    const adminMailOptions = {
      from: `"BuluTupuri Contact Form" <${EMAIL_CONFIG.auth.user}>`,
      to: EMAIL_CONFIG.auth.user,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        You have received a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from the BuluTupuri Translator contact form.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    await transporter.sendMail(adminMailOptions);
    
    // Send auto-reply to user
    const userMailOptions = {
      from: `"BuluTupuri Translator" <${EMAIL_CONFIG.auth.user}>`,
      to: email,
      subject: 'Thank you for contacting BuluTupuri Translator',
      text: `
        Dear ${name},
        
        Thank you for contacting the BuluTupuri Translator team. We have received your message and will get back to you as soon as possible.
        
        Best regards,
        The BuluTupuri Translator Team
      `,
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        
        <p>Thank you for contacting the BuluTupuri Translator team. We have received your message and will get back to you as soon as possible.</p>
        
        <p>Best regards,<br>
        The BuluTupuri Translator Team</p>
      `
    };
    
    await transporter.sendMail(userMailOptions);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process contact form',
      error: error.message
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
