from flask import current_app as app
from flask import render_template
from flask import Flask, jsonify
# from SQL_functions import  someSQLFunction

#Setup Flask Local Server and SQL Server data connection
app = Flask(__name__)

@app.route('/')
def home():
    """Landing page."""
    return render_template('index.html',
                           title="Bee Colonies",
                           description="Bee Colony decline")


#Use the <qid> as the param if needed.  Not sure how many endpoint we will need yet
@app.route('/data_api/<qid>')
def data_api(qid):
    """Data API will return Bee data when structure is known"""

#getBeeData is a stub SQL function to import and manage from SQL_functions.py  When
#data is known, these enpoints will be fleshed out.
    beeData = getBeeData(qid)
    return jsonify(beeData)

if __name__ == "__main__":
    app.run(debug=True)