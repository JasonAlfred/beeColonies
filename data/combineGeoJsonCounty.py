import csv
import json

jsonString = []

with open('geoJsonCounty.json', 'r') as jsonfile:
    file_data = json.loads(jsonfile.read())

f = open('beeColonyCensusDataByCounty.csv', 'r')
reader = csv.reader(f)

for row in reader:
    for state in range(len(file_data['features'])):
        if (file_data['features'][state]['properties']['STATE'] == str(row[3])) and (\
            file_data['features'][state]['properties']['NAME'].upper() == row[6]):
            jsonString.append(
                {"type": file_data['features'][state]['type'],
                "geometry": file_data['features'][state]['geometry'], 
                "properties": {"Year": row[0], "Value": row[8],
                "STATE": file_data['features'][state]['properties']['STATE'],
                "NAME": file_data['features'][state]['properties']['NAME']}})
        else: pass


final_json = {"type": "FeatureCollection", "features": jsonString}


with open('geoJsonCountyMap.geoJson', 'w') as f:
    json.dump(final_json, f)