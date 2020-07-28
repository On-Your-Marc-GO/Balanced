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
        db.User.create({
            email: req.body.email,
            password: req.body.password,
        })
            .then(() => {
                // res.redirect(307, '/api/login');
                res.render('login');
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
        db.User.findAll({
            // where: UserId=1,
            include: [db.JournalEntry],
        }).then((JournalEntryData) => {
            console.log(JournalEntryData);
            db.JournalEntry.findAll({
                // where: UserId=1,
                include: [db.ActivityEntry, db.NutritionEntry],
            }).then((data) => {
                //  console.log(data[0]);
                // res.json(data);
                // const hbsObject = {
                //     // journalentries: JournalEntryData,
                //     activityentries: data[0].ActivityEntries,
                //     nutritionentries: data[0].NutritionEntries,
                // };
                res.render('data', { JournalEntries: data });
            });
        });
    });

    app.get('/userProfile', (req, res) => {
        db.User.findAll({
            /* include: [db.Goal], does not need to include another database */
        }).then((dbUser) => {
            res.render('userProfile', { Users: dbUser });
            // res.json(dbUser);
            console.log(dbUser);
        });
    });
};
