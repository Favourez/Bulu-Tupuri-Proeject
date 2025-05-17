import pandas as pd

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

# Save to CSV
csv_file = 'bulu_dictionary.csv'
df.to_csv(csv_file, index=False)
print(f"\nSaved to {csv_file}")

print("\nDone!")
