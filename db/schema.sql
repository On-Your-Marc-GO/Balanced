/* Schema - Project 2*/

DROP DATABASE IF EXISTS fitness_journal_db;
CREATE DATABASE fitness_journal_db;

USE fitness_journal_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	firstName VARCHAR (100) NOT NULL,
	lastName VARCHAR (100) NOT NULL,
    age INT NOT NULL,
    height VARCHAR (100) NOT NULL,
    weight INT NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NUll,
	PRIMARY KEY (id)
);

CREATE TABLE journalEntry
(
   	id INT NOT NULL AUTO_INCREMENT,
	date DATETIME NOT NULL,
    title VARCHAR (100) NOT NULL,
    userID INT NOT NULL
	PRIMARY KEY (id)
);

CREATE TABLE goal
(
   	id INT NOT NULL AUTO_INCREMENT,
    goalType VARCHAR (100) NOT NULL,
    totalTimeAccrued INT NOT NULL,
    goalTime INT NOT NULL,
    userID INT NOT NULL
);

CREATE TABLE activity
(
   	id INT NOT NULL AUTO_INCREMENT,
    categoryID VARCHAR (100) NOT NULL,
    name VARCHAR (100) NOT NULL,
    totalTime INT NOT NULL,
    entryActivityText VARCHAR,
    journalID INT NOT NULL
);

CREATE TABLE nutrition
(
   	id INT NOT NULL AUTO_INCREMENT,
    entryNutritionText VARCHAR,
    typeofMeal VARCHAR (100) NOT NULL,
    journalID INT NOT NULL
);

CREATE TABLE categories
(
   	id INT NOT NULL AUTO_INCREMENT,
    categoryName VARCHAR (100) NOT NULL,
    metrics VARCHAR (100) NOT NULL
);
