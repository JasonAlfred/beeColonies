-- Create tables for raw data to be loaded into
CREATE TABLE CensusDataByState (
	id INT PRIMARY KEY,
	Year INT,
	Period VARCHAR,
	State FLOAT,
	"State ANSI" FLOAT,
	"Data Item" FLOAT,
	Value FLOAT
);

CREATE TABLE CensusDataByCounty (
	id INT PRIMARY KEY,
	Year INT,
	State VARCHAR,
	"State ANSI" INT,
	"Ag District" VARCHAR,
	"Ag District Code" INT,
	County VARCHAR,
	"County ANSI" FLOAT,
	Value INT,
	"CV (%)" FLOAT
);

CREATE TABLE ColonyLoss (
	id INT PRIMARY KEY,
	Year INT,
	State VARCHAR,
	"Total Annual Loss (%)" FLOAT,
	Beekeepers INT,
	"Beekeepers Exclusive to State (%)" FLOAT,
	Colonies INT,
	"Colonies Exclusive to State (%)" FLOAT
);