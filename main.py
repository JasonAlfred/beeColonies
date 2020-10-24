from flask import current_app as app
from flask import render_template
from flask import Flask, jsonify, redirect
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
    """Page rendering the plotly bee data with a state selector."""
    return render_template('queenBee.html',
                           title="Bee Colony Loss by State",
                           description="Bee Colony Loss by State")


@app.route('/choropleth')
def choro():
    return redirect("/choropleth2012")


@app.route('/choropleth<year>')
def choropleth(year):
    """API endpoint to get choropleth page."""
    return render_template('choropleth.html',

                           year=year,
                           title="Bee Colony Density by County",
                           description="Bee Colony Density by County")


@app.route('/extra')
def extra():
    """Page for some extra fun stuff"""
    return render_template('extra.html',
                           title="Extra",
                           description="Extra")

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
