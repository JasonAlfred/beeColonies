import sqlite3


def getBeeData():
    colonyLossResults = getColonyLossData()
    censusStateResults = getCensusStateData()
    censusCountyResults = getCensusCountyData()

    beeData = {"Bee Colony Loss Data": colonyLossResults,
               "State Census Data": censusStateResults,
               "County Census Data": censusCountyResults}

    return beeData


def getColonyLossData():
    conn = sqlite3.connect('data/bee_colony.sqlite')
    c = conn.cursor()

    result = c.execute("SELECT * FROM colonyloss;")
    colonyLossResults = []

    for row in result:
        colonyLossResults.append(
            {"Year": row[1],
             "State": row[2],
             "Total Annual Loss Percent": row[3],
             "Beekeepers": row[4],
             "Beekeepers Exclusive to State Percent": row[5],
             "Colonies": row[6],
             "Colonies Exclusive to State Percent": row[7]
             })
    conn.close()
    return colonyLossResults


def getCensusStateData():
    conn = sqlite3.connect('data/bee_colony.sqlite')
    c = conn.cursor()

    result = c.execute("SELECT * FROM census_state;")
    censusStateResults = []

    for row in result:
        censusStateResults.append(
            {"Year": row[1],
             "State": row[3],
             "State ANSI": row[4],
             "Data Item": row[5],
             "Value": row[6]
             })
    conn.close()
    return censusStateResults


def getCensusCountyData():
    conn = sqlite3.connect('data/bee_colony.sqlite')
    c = conn.cursor()

    result = c.execute("SELECT * FROM census_county;")
    censusCountyResults = []

    for row in result:
        censusCountyResults.append(
            {"Year": row[1],
             "State": row[2],
             "StateANSI": row[3],
             "AgDistrict": row[4],
             "AgDistrictCode": row[5],
             "County": row[6],
             "CountyANSI": row[7],
             "Value": row[8],
             "LandArea": row[9],
             "AreaName": row[10],
             "ColonyDensity": row[11]
             })
    conn.close()
    return censusCountyResults
