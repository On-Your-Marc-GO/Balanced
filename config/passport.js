const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('../models');
passport.use(
    new LocalStrategy({ usernameField: 'email' }, (a, b, c) => {
        db.User.findOne({ where: { email: a } }).then((a) => {
            if (!a) return c(null, !1, { message: 'Incorrect email.' });
            return a.validPassword(b)
                ? c(null, a)
                : c(null, !1, { message: 'Incorrect password.' });
        });
    })
),
    passport.serializeUser((a, b) => {
        b(null, a);
    }),
    passport.deserializeUser((a, b) => {
        b(null, a);
    }),
    (module.exports = passport);
