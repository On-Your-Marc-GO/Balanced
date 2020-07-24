/* Project 2 - Seed*/

-- DROP DATABASE IF EXISTS fitness_journal_db;
-- CREATE DATABASE fitness_journal_db;

USE fitness_journal_db;

SELECT * FROM activityentries;
SELECT * FROM categories;
SELECT * FROM goals;
SELECT * FROM journalentries;
SELECT * FROM nutritionentries;
SELECT * FROM users;

-- INSERT INTO xxxxx (xxxxx)
-- 	VALUES (xxxxx);

INSERT INTO users (firstName, lastName, age, height, weight, email, password)
	VALUES ("Forrest", "Gump", 40, 6, 200, "forrestgump@test.com", "test");

INSERT INTO journalentries (date, title, UserID)
	VALUES (DATE "2020-07-01", "runner", 1);

INSERT INTO nutritionentries (entryNutritionText, typeOfMeal, JournalEntryId)
	VALUES ("eggs","breakfast", 1);

INSERT INTO categories (categoryName, metrics)
	VALUES ("running", "running");

INSERT INTO activityentries (name, totalTime, entryActivityText, JournalEntryId, CategoryId)
	VALUES ("running", 60, "Central Park", 1, 1);

INSERT INTO goals (goalType, totalTimeAccrued, goalTime, UserId)
	VALUES ("wieghtloss", 60, 100, 1);

-- DROP TABLE activityentries;
-- DROP TABLE categories;
-- DROP TABLE goals;
-- DROP TABLE journalentries;
-- DROP TABLE nutritionentries;
-- DROP TABLE users;