// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/', (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render('signup');
        }
        res.render('signup');
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
            res.render('goalEntry');
        }
        res.render('goalEntry');
    });

    // app.get('/index', isAuthenticated, (req, res) => {
    //     res.render('index');
    // });

    app.get('/journalEntry', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('journalEntry');
        }
        res.render('journalEntry');
    });

    app.get('/login', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('login');
        }
        res.render('login');
    });

    app.get('/signup', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('signup');
        }
        res.render('signup');
    });

    app.get('/dashboard', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('dashboard');
        }
        res.render('dashboard');
    });
};
