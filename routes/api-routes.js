// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post('/login', passport.authenticate('local'), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id,
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post('/signup', (req, res) => {
        db.User.create(req.body)
            .then((dataValues) => {
                const hbsObject = dataValues.dataValues;
                console.log(hbsObject);
                // res.redirect(307, '/api/login');
                console.log(dataValues);
                res.render('userProfile', hbsObject);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // journal entry
    app.post('/journalEntry', (req, res) => {
        db.journalEntry
            .create({
                date: req.body.date,
                title: req.body.title,
            })
            .then(() => {
                // res.redirect(307, '/api/login');
                res.render('journalEntry');
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // activity entry
    app.post('/activityEntry', (req, res) => {
        db.activityEntry
            .create({
                name: req.body.name,
                totalTime: req.body.totalTime,
                entryActivityText: req.body.entryActivityText,
            })
            .then(() => {
                // res.redirect(307, '/api/login');
                res.render('activityEntry');
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // nutrition entry
    app.post('/nutritionEntry', (req, res) => {
        db.nutritionEntry
            .create({
                entryNutritionText: req.body.entryNutritionText,
                typeOfMeal: req.body.typeOfMeal,
            })
            .then(() => {
                // res.redirect(307, '/api/login');
                res.render('activityEntry');
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // Route for getting some data about our user to be used client side
    app.get('/user_data', (req, res) => {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id,
            });
        }
    });

    app.get('/data', (req, res) => {
        console.log(req.user);
        db.User.findOne({
            where: { id: req.user.id },
            include: [db.JournalEntry],
        }).then((JournalEntryData) => {
            console.log(JournalEntryData);
            db.JournalEntry.findAll({
                // where: UserId=1,
                include: [db.ActivityEntry, db.NutritionEntry],
            }).then((data) => {
                res.render('data', { JournalEntries: data });
            });
        });
    });

    app.get('/userProfile', (req, res) => {
        console.log(req.user);
        db.User.findOne({
            where: {
                id: req.user.id,
            } /* include: [db.Goal], does not need to include another database */,
        }).then((dbUser) => {
            console.log(132, dbUser.email);
            res.render('userProfile', dbUser);
        });
    });
};
