-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE
);

-- Create chats table
CREATE TABLE IF NOT EXISTS chats (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  created_by TEXT NOT NULL,
  is_public BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  chat_id INTEGER NOT NULL REFERENCES chats(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  content TEXT NOT NULL,
  parent_id INTEGER REFERENCES messages(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_edited BOOLEAN DEFAULT FALSE
);

-- Create likes table
CREATE TABLE IF NOT EXISTS likes (
  id SERIAL PRIMARY KEY,
  message_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(message_id, user_email)
);

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create message_tags table (junction table for many-to-many relationship)
CREATE TABLE IF NOT EXISTS message_tags (
  id SERIAL PRIMARY KEY,
  message_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(message_id, tag_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_messages_chat_id ON messages(chat_id);
CREATE INDEX IF NOT EXISTS idx_messages_parent_id ON messages(parent_id);
CREATE INDEX IF NOT EXISTS idx_likes_message_id ON likes(message_id);
CREATE INDEX IF NOT EXISTS idx_message_tags_message_id ON message_tags(message_id);
CREATE INDEX IF NOT EXISTS idx_message_tags_tag_id ON message_tags(tag_id);

-- Insert some initial tags
INSERT INTO tags (name, color)
VALUES 
  ('translation', '#3B82F6'),
  ('question', '#EF4444'),
  ('suggestion', '#10B981'),
  ('bulu', '#F59E0B'),
  ('tupuri', '#8B5CF6'),
  ('grammar', '#EC4899'),
  ('vocabulary', '#6366F1'),
  ('culture', '#F97316')
ON CONFLICT (name) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE message_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since we're using anon key)
-- For a real production app, you would want more restrictive policies
CREATE POLICY "Allow public read access to contacts" ON contacts FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to contacts" ON contacts FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to chats" ON chats FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to chats" ON chats FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access to chats" ON chats FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to messages" ON messages FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to messages" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access to messages" ON messages FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to likes" ON likes FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to likes" ON likes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public delete access to likes" ON likes FOR DELETE USING (true);

CREATE POLICY "Allow public read access to tags" ON tags FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to tags" ON tags FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to message_tags" ON message_tags FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to message_tags" ON message_tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public delete access to message_tags" ON message_tags FOR DELETE USING (true);
