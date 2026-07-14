import os
import pandas as pd

excel_file = "data/ev/India_Passenger_EV_Market_Analytics.xlsx"
output_dir = "data/ev"

workbook = pd.ExcelFile(excel_file)

for sheet in workbook.sheet_names:
    df = pd.read_excel(excel_file, sheet_name=sheet)
    filename = sheet.replace(" ", "_") + ".csv"
    output_path = os.path.join(output_dir, filename)
    df.to_csv(output_path, index=False)
    print(f"Saved: {output_path}")

print("\nAll sheets converted successfully.")
