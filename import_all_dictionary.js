import fs from 'fs';

// Read all dictionary entries
console.log('Reading all dictionary entries...');
const allEntries = JSON.parse(fs.readFileSync('bulu_dictionary_entries.json', 'utf8'));

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

// Import entries in batches
const importInBatches = async () => {
  const batchSize = 100;
  const totalEntries = allEntries.length;
  const totalBatches = Math.ceil(totalEntries / batchSize);
  
  console.log(`Total entries: ${totalEntries}`);
  console.log(`Batch size: ${batchSize}`);
  console.log(`Total batches: ${totalBatches}`);
  
  // Skip the first 50 entries since we've already imported them
  const startIndex = 50;
  
  for (let i = startIndex; i < totalEntries; i += batchSize) {
    const batch = allEntries.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;
    
    console.log(`\nProcessing batch ${batchNumber} of ${totalBatches}...`);
    
    const success = await importEntries(batch);
    
    if (!success) {
      console.error(`Failed to import batch ${batchNumber}. Stopping.`);
      return false;
    }
    
    // Add a delay between batches to avoid rate limiting
    if (i + batchSize < totalEntries) {
      console.log('Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  return true;
};

// Run the import
importInBatches()
  .then(success => {
    if (success) {
      console.log('\nAll entries imported successfully!');
    } else {
      console.error('\nImport process failed.');
    }
  })
  .catch(error => {
    console.error('\nError during import process:', error);
  });
