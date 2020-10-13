-- Create tables for raw data to be loaded into
CREATE TABLE census_state (
	id INT PRIMARY KEY,
	"Year" INT,
	"Period" VARCHAR,
	"State" VARCHAR,
	"State ANSI" INT,
	"Data Item" VARCHAR,
	"Value" INT
);

CREATE TABLE census_county (
	id INT PRIMARY KEY,
	"Year" INT,
	"State" VARCHAR,
	"State ANSI" INT,
	"Ag District" VARCHAR,
	"Ag District Code" INT,
	"County" VARCHAR,
	"County ANSI" FLOAT,
	"Value" INT,
	"CV_pct" FLOAT
);

CREATE TABLE colonyloss (
	id INT PRIMARY KEY,
	"Year" VARCHAR,
	"State" VARCHAR,
	"Total Annual Loss_pct" FLOAT,
	"Beekeepers" INT,
	"Beekeepers Exclusive to State_pct" FLOAT,
	"Colonies" INT,
	"Colonies Exclusive to State_pct" FLOAT
);