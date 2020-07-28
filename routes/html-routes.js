// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/', (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render('dashboard');
        }
        return res.render('signup');
    });

    app.get('/goalEntry', (req, res) => {
        // If the user already has an account send them to the index page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('goalEntry');
    });

    app.get('/journalEntry', (req, res) => {
        // If the user already has an account send them to the index page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('journalEntry');
    });

    app.get('/login', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('dashboard');
        }
        return res.render('login');
    });

    app.get('/signup', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            return res.render('dashboard');
        }
        return res.render('signup');
    });

    app.get('/dashboard', (req, res) => {
        // If the user already has an account send them to the index page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('dashboard');
    });

    app.get('/userProfile', (req, res) => {
        // If the user already has an account send them to the index page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('userProfile');
    });
};
