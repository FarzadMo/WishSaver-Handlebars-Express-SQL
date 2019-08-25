DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (

id INT(20) AUTO_INCREMENT NOT NULL,
wish VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO wishes (wish)
VALUES ("water the lawn"),("Talk with Tome"),("Watch the movie")