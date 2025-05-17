// Backend configuration

// Supabase configuration
export const SUPABASE_URL = 'https://cqfbkwyrvhppqsnimvtj.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZmJrd3lydmhwcHFzbmltdnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjc4MjgsImV4cCI6MjA2Mjg0MzgyOH0.IEfOnU3XXnu31kp9Bp4hMZf-PUGVShe8n_rt1jXtxNA';

// Email configuration
export const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: 'bulutupuri@gmail.com',
    pass: 'rckh gsgz pmsb eqpp'
  }
};

// Database table names
export const DB_TABLES = {
  CONTACTS: 'contacts',
  CHATS: 'chats',
  MESSAGES: 'messages',
  LIKES: 'likes',
  TAGS: 'tags',
  MESSAGE_TAGS: 'message_tags',
  DICTIONARY: 'dictionary'
};

// Language options
export const LANGUAGES = {
  ORIGINAL: ['bulu', 'tupuri'],
  TRANSLATION: ['english', 'french']
};
