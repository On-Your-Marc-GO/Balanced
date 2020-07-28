// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/', (req, res) => {
        if (req.user) {
            return res.render('dashboard');
        }
        return res.render('signup');
    });

    app.get('/goalEntry', (req, res) => {
        // If not user send them to the login page, otherwise send them to the goal page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('goalEntry');
    });

    app.get('/journalEntry', (req, res) => {
        // If not user send them to the login page, otherwise send them to the journalentry page
        if (!req.user) {
            return res.render('login');
        }
        return res.render('journalEntry');
    });

    app.get('/login', (req, res) => {
        // If the user is already signed in send them to the dashboard page otherwise go to login page
        if (req.user) {
            res.render('dashboard');
        }
        return res.render('login');
    });

    app.get('/signup', (req, res) => {
        if (req.user) {
            return res.render('dashboard');
        }
        return res.render('signup');
    });

    app.get('/dashboard', (req, res) => {
        // If not the user, send them to login page otherwise send them to the page in the route
        if (!req.user) {
            return res.render('dashboard'); //i changed this from login so i could work on it
        }
        return res.render('dashboard');
    });

    app.get('/userProfile', (req, res) => {
        // If not the user, send them to login page otherwise send them to the page in the route
        if (!req.user) {
            return res.render('login');
        }
        return res.render('userProfile');
    });
};
