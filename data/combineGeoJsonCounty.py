import csv
import json

with open('geoJsonCounty.json', 'r') as jsonfile:
    file_data = json.loads(jsonfile.read())

f = open('CountyDataForJson.csv', 'r')
reader = csv.reader(f)


jsonString = []

for row in reader:
    for state in range(len(file_data['features'])):
        if str(row[0]) == '2002':
            if (file_data['features'][state]['properties']['STATE'] == str(row[2])) and (
                    file_data['features'][state]['properties']['NAME'].upper() == row[5]):
                jsonString.append(
                    {"type": file_data['features'][state]['type'],
                     "geometry": file_data['features'][state]['geometry'],
                     "properties": {"Year": row[0], "Value": row[7],
                                    "LandArea": row[8], "AreaName": row[9],  "Density": row[10],
                                    "STATE": file_data['features'][state]['properties']['STATE'],
                                    "NAME": file_data['features'][state]['properties']['NAME']}})


# add square miles to this geoJson and calculate density which will be value / sq.miles
# also exclude any values that are (D) in the value field
# and separate the data out by year into 3 different calls.

final_json = {"type": "FeatureCollection", "features": jsonString}


with open(f'geoJsonCountyMap2002.geoJson', 'w') as f:
    json.dump(final_json, f)
