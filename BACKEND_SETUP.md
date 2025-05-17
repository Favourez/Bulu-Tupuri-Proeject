# BuluTupuri Backend Setup

This document provides instructions for setting up the backend for the BuluTupuri Translator application.

## Overview

The backend consists of:

1. **Supabase Database**: For storing contacts, chats, messages, likes, and tags
2. **Email Service**: For sending contact form submissions to the admin email

## Prerequisites

- Supabase account (https://supabase.com)
- Node.js and npm installed

## Supabase Setup

### 1. Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Create a new project (or use the existing one at https://cqfbkwyrvhppqsnimvtj.supabase.co)
3. Note your project URL and anon key (these are already configured in the application)

### 2. Set Up Database Tables

1. Navigate to the SQL Editor in your Supabase dashboard
2. Copy the contents of `src/sql/supabase_setup.sql`
3. Paste the SQL into the editor and run it
4. Verify that all tables have been created by checking the Table Editor

The SQL script will:
- Create all necessary tables (contacts, chats, messages, likes, tags, message_tags)
- Set up appropriate indexes for performance
- Create Row Level Security (RLS) policies
- Insert initial data for testing

### 3. Verify Configuration

Ensure the following configuration in `src/config/backend.ts` matches your Supabase project:

```typescript
// Supabase configuration
export const SUPABASE_URL = 'https://cqfbkwyrvhppqsnimvtj.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZmJrd3lydmhwcHFzbmltdnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjc4MjgsImV4cCI6MjA2Mjg0MzgyOH0.IEfOnU3XXnu31kp9Bp4hMZf-PUGVShe8n_rt1jXtxNA';
```

## Running the Application

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Email Service

The application is currently set up to use a mock email service that logs emails to the console. In a production environment, you would want to set up a real email service.

The email configuration is in `src/config/backend.ts`:

```typescript
// Email configuration
export const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: 'bulutupuri@gmail.com',
    pass: 'rckh gsgz pmsb eqpp'
  }
};
```

## Testing the Backend

### 1. Contact Form

1. Navigate to the Contact page in the application
2. Fill out the form with your information
3. Submit the form
4. Check the console for email logs
5. Verify that your submission is stored in the `contacts` table in Supabase

### 2. Community Discussions

1. Navigate to the Community page
2. Click "New Discussion" to create a new chat
3. Fill out the form and submit
4. Add messages to the discussion
5. Test liking messages
6. Verify that all data is stored correctly in Supabase

## Troubleshooting

### Database Issues

If database operations fail:
- Verify that the Supabase URL and anon key are correct
- Check that all tables were created successfully
- Ensure that the RLS policies are set up correctly
- Look for error messages in the browser console

### Common Issues

1. **"Error fetching chat: {message: 'Not found'}"**
   - Make sure you've run the SQL setup script in Supabase
   - Check that the chat ID in the URL exists in the database
   - Verify that the Supabase URL and anon key are correct

2. **"Cannot add a new discussion"**
   - Check the browser console for specific error messages
   - Verify that the `chats` table exists in Supabase
   - Ensure that the RLS policy for inserting into the `chats` table is set up correctly

3. **"Cannot chat/add messages"**
   - Check the browser console for specific error messages
   - Verify that the `messages` table exists in Supabase
   - Ensure that the RLS policy for inserting into the `messages` table is set up correctly

## Security Considerations

**Important**: In a production environment, you should:
- Use environment variables for sensitive information
- Set up HTTPS for any API servers
- Implement proper authentication for API endpoints
- Consider using a dedicated email service like SendGrid or Mailgun
- Implement rate limiting for form submissions

## Support

If you encounter any issues, please contact the development team at `bulutupuri@gmail.com`.
