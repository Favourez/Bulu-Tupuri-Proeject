-- Dictionary Table Setup Script
-- Run this script in the Supabase SQL Editor

-- Create dictionary table
CREATE TABLE IF NOT EXISTS dictionary (
  id SERIAL PRIMARY KEY,
  original_word TEXT NOT NULL,
  original_language TEXT NOT NULL, -- 'bulu' or 'tupuri'
  translation TEXT NOT NULL,
  translation_language TEXT NOT NULL, -- 'english' or 'french'
  example_sentence TEXT,
  notes TEXT,
  contributor_name TEXT,
  contributor_email TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_dictionary_original_language ON dictionary(original_language);
CREATE INDEX IF NOT EXISTS idx_dictionary_translation_language ON dictionary(translation_language);
CREATE INDEX IF NOT EXISTS idx_dictionary_original_word ON dictionary(original_word);

-- Enable Row Level Security (RLS)
ALTER TABLE dictionary ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since we're using anon key)
CREATE POLICY "Allow public read access to dictionary" ON dictionary FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to dictionary" ON dictionary FOR INSERT WITH CHECK (true);

-- Insert some sample data for testing
INSERT INTO dictionary (original_word, original_language, translation, translation_language, example_sentence, notes, contributor_name, contributor_email, is_verified)
VALUES 
  ('mbamba', 'bulu', 'hello', 'english', 'Mbamba, how are you today?', 'Common greeting in Bulu', 'Admin', 'admin@example.com', true),
  ('akiba', 'tupuri', 'thank you', 'english', 'Akiba for your help!', 'Expression of gratitude in Tupuri', 'Admin', 'admin@example.com', true),
  ('njoh', 'bulu', 'elephant', 'english', 'The njoh is a large animal.', 'Animal name in Bulu', 'Admin', 'admin@example.com', true),
  ('mbamba', 'bulu', 'bonjour', 'french', 'Mbamba, comment vas-tu aujourd''hui?', 'Salutation courante en Bulu', 'Admin', 'admin@example.com', true),
  ('akiba', 'tupuri', 'merci', 'french', 'Akiba pour ton aide!', 'Expression de gratitude en Tupuri', 'Admin', 'admin@example.com', true),
  ('njoh', 'bulu', 'éléphant', 'french', 'Le njoh est un grand animal.', 'Nom d''animal en Bulu', 'Admin', 'admin@example.com', true);

-- Print success message
SELECT 'Dictionary table setup completed successfully!' as result;
