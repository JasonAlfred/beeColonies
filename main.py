from flask import current_app as app
from flask import render_template
from flask import Flask, jsonify
from SQL_functions import getBeeData
import json

# Setup Flask Local Server and SQL Server data connection
app = Flask(__name__)


@app.route('/')
def home():
    """Landing page."""
    return render_template("index.html",
                           title="Bee Colony Decline",
                           description="Bee Colony decline")

@app.route('/queenBee')
def queenBee():
    """Landing page."""
    return render_template('queenBee.html',
                           title="Bee Colony Decline",
                           description="Bee Colony decline")

@app.route('/choropleth')
def choropleth():
    """Landing page."""
    return render_template('choropleth.html',
                           title="Bee Colony Decline",
                           description="Bee Colony decline")                

# Use the <qid> as the param if needed.  Not sure how many endpoint we will need yet
@app.route('/data_api')
def data_api():
    """Data API returns all available data from the sqlite database 
    to the caller."""
    beeData = getBeeData()
    return jsonify(beeData)


@app.route('/data_CountyData<year>')
def get_County(year):
    """Data API is used to get the County geoJson file from the data
        directory.  This can be called with 2002, 2007 and 2012 data
        or as the data is available."""
    with open(f'data/geoJsonCountyMap{year}.geoJson', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data)


if __name__ == "__main__":
    app.run(debug=True)
