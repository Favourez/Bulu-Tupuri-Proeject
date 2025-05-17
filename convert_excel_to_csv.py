import pandas as pd
import json

# Read the Excel file
print("Reading Excel file...")
excel_file = 'Français - English - Búlu(1).xlsx'
df = pd.read_excel(excel_file)

# Display basic information about the data
print("\nDataFrame Info:")
print(df.info())

print("\nFirst 5 rows:")
print(df.head())

print("\nColumn names:")
print(df.columns.tolist())

# Check for missing values
print("\nMissing values per column:")
print(df.isnull().sum())

# Save to CSV
csv_file = 'bulu_dictionary.csv'
df.to_csv(csv_file, index=False)
print(f"\nSaved to {csv_file}")

# Clean the data
print("\nCleaning data...")
# Drop rows where all language columns are empty
language_columns = [col for col in df.columns if col not in ['No', 'Unnamed']]
df_cleaned = df.dropna(subset=language_columns, how='all')

# Drop any unnamed or unnecessary columns
unnamed_cols = [col for col in df.columns if 'Unnamed' in str(col)]
if unnamed_cols:
    df_cleaned = df_cleaned.drop(columns=unnamed_cols)

# Reset index after dropping rows
df_cleaned = df_cleaned.reset_index(drop=True)

print(f"\nOriginal data shape: {df.shape}")
print(f"Cleaned data shape: {df_cleaned.shape}")

# Save cleaned data to CSV
cleaned_csv_file = 'bulu_dictionary_cleaned.csv'
df_cleaned.to_csv(cleaned_csv_file, index=False)
print(f"Saved cleaned data to {cleaned_csv_file}")

# Convert to JSON format suitable for database import
print("\nConverting to JSON format for database import...")
dictionary_entries = []

# Identify the language columns
french_col = next((col for col in df_cleaned.columns if 'Français' in col or 'Francais' in col), None)
english_col = next((col for col in df_cleaned.columns if 'English' in col or 'Anglais' in col), None)
bulu_col = next((col for col in df_cleaned.columns if 'Búlu' in col or 'Bulu' in col), None)

if not all([french_col, english_col, bulu_col]):
    print("Warning: Could not identify all language columns!")
    print(f"Found: French: {french_col}, English: {english_col}, Bulu: {bulu_col}")
else:
    print(f"Found language columns: French: {french_col}, English: {english_col}, Bulu: {bulu_col}")

    # Create entries for French -> Bulu
    for _, row in df_cleaned.iterrows():
        french_word = row.get(french_col)
        bulu_word = row.get(bulu_col)

        if pd.notna(french_word) and pd.notna(bulu_word):
            entry = {
                "original_word": str(french_word).strip().lower(),
                "original_language": "french",
                "translation": str(bulu_word).strip().lower(),
                "translation_language": "bulu",
                "example_sentence": None,
                "notes": "Imported from dictionary spreadsheet",
                "contributor_name": "Dictionary Import",
                "contributor_email": None,
                "is_verified": True,
                "created_at": pd.Timestamp.now().isoformat(),
                "updated_at": pd.Timestamp.now().isoformat()
            }
            dictionary_entries.append(entry)

    # Create entries for English -> Bulu
    for _, row in df_cleaned.iterrows():
        english_word = row.get(english_col)
        bulu_word = row.get(bulu_col)

        if pd.notna(english_word) and pd.notna(bulu_word):
            entry = {
                "original_word": str(english_word).strip().lower(),
                "original_language": "english",
                "translation": str(bulu_word).strip().lower(),
                "translation_language": "bulu",
                "example_sentence": None,
                "notes": "Imported from dictionary spreadsheet",
                "contributor_name": "Dictionary Import",
                "contributor_email": None,
                "is_verified": True,
                "created_at": pd.Timestamp.now().isoformat(),
                "updated_at": pd.Timestamp.now().isoformat()
            }
            dictionary_entries.append(entry)

# Save the dictionary entries to a JSON file
json_file = 'bulu_dictionary_entries.json'
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(dictionary_entries, f, ensure_ascii=False, indent=2)

print(f"Created {len(dictionary_entries)} dictionary entries")
print(f"Saved to {json_file}")

# Create SQL insert statements
print("\nCreating SQL insert statements...")
sql_file = 'bulu_dictionary_insert.sql'
with open(sql_file, 'w', encoding='utf-8') as f:
    f.write("-- SQL Insert statements for Bulu dictionary\n\n")

    # Write in batches of 100 entries
    batch_size = 100
    for i in range(0, len(dictionary_entries), batch_size):
        batch = dictionary_entries[i:i+batch_size]
        values_str = []

        for entry in batch:
            original_word = entry['original_word'].replace("'", "''")
            translation = entry['translation'].replace("'", "''")
            notes = entry['notes'].replace("'", "''")
            example_sentence = 'NULL' if entry['example_sentence'] is None else f"'{entry['example_sentence'].replace(\"'\", \"''\")}'"
            contributor_email = 'NULL' if entry['contributor_email'] is None else f"'{entry['contributor_email']}'"
            is_verified = 'TRUE' if entry['is_verified'] else 'FALSE'

            value_str = f"('{original_word}', '{entry['original_language']}', '{translation}', '{entry['translation_language']}', "
            value_str += f"{example_sentence}, '{notes}', '{entry['contributor_name']}', {contributor_email}, "
            value_str += f"{is_verified}, '{entry['created_at']}', '{entry['updated_at']}')"

            values_str.append(value_str)

        f.write("INSERT INTO dictionary (original_word, original_language, translation, translation_language, "
                "example_sentence, notes, contributor_name, contributor_email, is_verified, created_at, updated_at) VALUES\n")
        f.write(",\n".join(values_str))
        f.write(";\n\n")

print(f"Created SQL insert statements in {sql_file}")

# Create a smaller batch for immediate import
print("\nCreating a smaller batch for immediate import...")
small_batch_size = 50
small_batch = dictionary_entries[:small_batch_size]
small_batch_file = 'bulu_dictionary_small_batch.json'
with open(small_batch_file, 'w', encoding='utf-8') as f:
    json.dump(small_batch, f, ensure_ascii=False, indent=2)

print(f"Created small batch with {len(small_batch)} entries")
print(f"Saved to {small_batch_file}")

print("\nDone!")
