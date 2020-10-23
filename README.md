# Twenty-one Bees 🍯🐝

This is Project 2 for Data Analytics & Visualization Bootcamp University of Minnesota. 

**Authors:** Alexis Anderson, Jason Alfred, Rhyce Erickson, Cynthia Kunakom

**Data source:** https://data.world/finley/bee-colony-statistical-data-from-1987-2017

**We use the following datasets**
- Bee Colony Census Data by County.csv
- Bee Colony Survey Data by State.csv
- Bee Colony Loss.xlsx (we converted this to a csv file)

**Technologies & Tools**
- Python: Flask, SQLAlchemy, pandas, jupyter notebook
- Java Script: raphael.js, plotly.js, leaflet.js, jquery.js
- HTML & CSS + Bootstrap
- Database: SQLite

**INSTRUCTIONS**

1. Clone this repository
    - Note: The `bee_colony.sqlite` database has alerady been created and it is included in the `/data` directory.

1. Navigate to the `static/js` directory and create a file called `config.js`.
    - In `config.js`, assign the api key of your [Mapbox](https://www.mapbox.com/) account to a variable called `API_KEY`.

1. Run the python code through the Flask server with `python main.py` in GitBash/Terminal.
    - Once the Flask server is running, copy the path and enter it in the Chrome Browser: http://127.0.0.1:5000/

1. Explore and *bee* on your way with exploring the page ~🐝
 