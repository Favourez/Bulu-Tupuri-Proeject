# BuluTupuri Server

This is the server component for the BuluTupuri Translator application. It handles email sending and other server-side operations.

## Features

- Email sending via Nodemailer
- Contact form submission handling
- API endpoints for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

### 1. Send Email

- **URL**: `/api/send-email`
- **Method**: POST
- **Body**:
  ```json
  {
    "from": "optional-from-address",
    "to": "recipient@example.com",
    "subject": "Email Subject",
    "text": "Plain text version",
    "html": "<p>HTML version</p>"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "messageId": "email-id"
  }
  ```

### 2. Contact Form Submission

- **URL**: `/api/contact`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Optional Subject",
    "message": "Contact message"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Contact form submitted successfully"
  }
  ```

## Configuration

The server is configured with the following settings:

```javascript
// Email configuration
const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: 'bulutupuri@gmail.com',
    pass: 'rckh gsgz pmsb eqpp'
  }
};
```

## Security Considerations

**Important**: In a production environment, you should:
- Use environment variables for sensitive information
- Set up HTTPS for the Express server
- Implement proper authentication for the API endpoints
- Consider using a dedicated email service like SendGrid or Mailgun
- Implement rate limiting for form submissions

## License

This project is part of the BuluTupuri Translator application.
