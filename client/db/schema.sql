DROP DATABASE IF EXISTS events_db;

CREATE DATABASE events_db;

CREATE TABLE events(
  id INT NOT NULL auto_increment, 
  photo VARCHAR (300),
  event_name VARCHAR (300) NOT NULL,
  zip_code VARCHAR (100) NOT NULL,
  year VARCHAR (40) NOT NULL,
  month VARCHAR (40) NOT NULL,
  day VARCHAR (40) NOT NULL,
  description VARCHAR (2000) NULL,
  event_host VARCHAR (300) NOT NULL,
  max_guests VARCHAR (300) NOT NULL
)
