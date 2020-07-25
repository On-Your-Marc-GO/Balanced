// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/', (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render('index');
        }
        res.render('signup');
    });

    app.get('/login', (req, res) => {
        // If the user already has an account send them to the index page
        if (req.user) {
            res.render('index');
        }
        res.render('login');
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get('/index', isAuthenticated, (req, res) => {
        res.render('index');
    });

    // // if the user clicks on this route, they will see their data / charts
    // app.get('/data', (req, res) => {
    //     if (req.user) {
    //         res.redirect('/data');
    //     }
    //     res.sendFile(path.join(__dirname, '../public/data.html'));
    // });

    // // if the user clicks on this route, they will see their personal information
    // app.get('/data', (req, res) => {
    //     if (req.user) {
    //         res.redirect('/data');
    //     }
    //     res.sendFile(path.join(__dirname, '../public/data.html'));
    // });
};
