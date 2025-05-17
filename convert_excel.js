import xlsx from 'xlsx';
import fs from 'fs';

// Read the Excel file
console.log('Reading Excel file...');
const workbook = xlsx.readFile('Français - English - Búlu(1).xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const data = xlsx.utils.sheet_to_json(worksheet);

// Display basic information
console.log(`\nTotal rows: ${data.length}`);
console.log('\nSample data (first 5 rows):');
console.log(JSON.stringify(data.slice(0, 5), null, 2));

// Get column names
const columnNames = Object.keys(data[0]);
console.log('\nColumn names:');
console.log(columnNames);

// Save to JSON file
fs.writeFileSync('bulu_dictionary.json', JSON.stringify(data, null, 2));
console.log('\nSaved to bulu_dictionary.json');

// Clean the data
console.log('\nCleaning data...');

// Identify language columns
const frenchCol = 'FRENCH';
const englishCol = 'ENGLISH';
const buluCol = 'AGCL_TRANSCRIPTION'; // This appears to be the Bulu transcription

console.log(`Found language columns: French: ${frenchCol}, English: ${englishCol}, Bulu: ${buluCol}`);

// Filter out rows where all language columns are empty
const cleanedData = data.filter(row => {
  return row[frenchCol] || row[englishCol] || row[buluCol];
});

console.log(`\nOriginal data rows: ${data.length}`);
console.log(`Cleaned data rows: ${cleanedData.length}`);

// Save cleaned data to JSON
fs.writeFileSync('bulu_dictionary_cleaned.json', JSON.stringify(cleanedData, null, 2));
console.log('Saved cleaned data to bulu_dictionary_cleaned.json');

// Convert to database format
console.log('\nConverting to database format...');
const dictionaryEntries = [];

// Create entries for French -> Bulu
cleanedData.forEach(row => {
  const frenchWord = row[frenchCol];
  const buluWord = row[buluCol];

  if (frenchWord && buluWord) {
    const entry = {
      original_word: String(frenchWord).trim().toLowerCase(),
      original_language: 'french',
      translation: String(buluWord).trim().toLowerCase(),
      translation_language: 'bulu',
      example_sentence: null,
      notes: 'Imported from dictionary spreadsheet',
      contributor_name: 'Dictionary Import',
      contributor_email: null,
      is_verified: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    dictionaryEntries.push(entry);
  }
});

// Create entries for English -> Bulu
cleanedData.forEach(row => {
  const englishWord = row[englishCol];
  const buluWord = row[buluCol];

  if (englishWord && buluWord) {
    const entry = {
      original_word: String(englishWord).trim().toLowerCase(),
      original_language: 'english',
      translation: String(buluWord).trim().toLowerCase(),
      translation_language: 'bulu',
      example_sentence: null,
      notes: 'Imported from dictionary spreadsheet',
      contributor_name: 'Dictionary Import',
      contributor_email: null,
      is_verified: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    dictionaryEntries.push(entry);
  }
});

console.log(`Created ${dictionaryEntries.length} dictionary entries`);

// Save dictionary entries to JSON
fs.writeFileSync('bulu_dictionary_entries.json', JSON.stringify(dictionaryEntries, null, 2));
console.log('Saved to bulu_dictionary_entries.json');

// Create a smaller batch for immediate import
const smallBatchSize = 50;
const smallBatch = dictionaryEntries.slice(0, smallBatchSize);
fs.writeFileSync('bulu_dictionary_small_batch.json', JSON.stringify(smallBatch, null, 2));
console.log(`Created small batch with ${smallBatch.length} entries`);
console.log('Saved to bulu_dictionary_small_batch.json');

console.log('\nDone!');
