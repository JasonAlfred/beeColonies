# beeColonies
U of M project #2

Authors: Alexis Anderson, Jason Alfred, Rhyce Erickson, Cynthia Kunakom

Background: 

data source: https://data.world/finley/bee-colony-statistical-data-from-1987-2017

## ETL
*PostgreSQL*
1. Launch pgAdmin and connect to the PostgreSQL server. Create a databaase called `bees_colonies_db`.
1. Connect to the database and run `schema.sql` to create all the required tables in the database.

*Python*
1. Create a config.py in the same directory as `SQL_functions.py`. Assign PostgreSQL's username and password to `username` and `password` variables.
1. Run the `SQL_functions.py`.
1. In PostgreSQL, run `query.sql` to verify all data has been loaded into all the tables accordingly.


