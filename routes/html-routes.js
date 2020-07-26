// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/', (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render('index');
        }
        res.render('index');
    });

    // app.get('/data', (req, res) => {
    //     // If the user already has an account send them to the index page
    //     if (req.user) {
    //         res.render('data');
    //     }
    //     res.render('data');
    // });

    app.get('/goalEntry', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('goalEntry');
    });

    app.get('/index', isAuthenticated, (req, res) => {
        res.render('index');
    });

    app.get('/journalEntry', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('journalEntry');
    });

    app.get('/login', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('login');
    });

    app.get('/signup', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('signup');
    });

    app.get('/userProfile', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('userProfile');
    });
};
