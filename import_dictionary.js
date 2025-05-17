import fs from 'fs';

// Read the small batch of dictionary entries
console.log('Reading dictionary entries...');
const smallBatch = JSON.parse(fs.readFileSync('bulu_dictionary_small_batch.json', 'utf8'));

// Create a fetch function to import the entries to Supabase
const importEntries = async (entries) => {
  const SUPABASE_URL = 'https://cqfbkwyrvhppqsnimvtj.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZmJrd3lydmhwcHFzbmltdnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjc4MjgsImV4cCI6MjA2Mjg0MzgyOH0.IEfOnU3XXnu31kp9Bp4hMZf-PUGVShe8n_rt1jXtxNA';
  
  console.log(`Importing ${entries.length} entries to Supabase...`);
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/dictionary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(entries)
    });
    
    if (!response.ok) {
      const error = await response.text();
      console.error('Error importing entries:', error);
      return false;
    }
    
    console.log('Entries imported successfully!');
    return true;
  } catch (error) {
    console.error('Error importing entries:', error);
    return false;
  }
};

// Import the entries
importEntries(smallBatch)
  .then(success => {
    if (success) {
      console.log('Import completed successfully!');
    } else {
      console.error('Import failed.');
    }
  })
  .catch(error => {
    console.error('Error during import:', error);
  });
