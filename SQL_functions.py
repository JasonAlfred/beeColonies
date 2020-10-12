import sqlite3

def getBeeData():

    conn = sqlite3.connect('data/test.db')
    c = conn.cursor()

    result = c.execute("SELECT * FROM tb;")

    results = []

    for row in result:
        results.append({row[0]: row[1]})
    conn.close()

    return results




