require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    passport = require('./config/passport'),
    mongoose = require('mongoose'),
    compression = require('compression'),
    PORT = process.env.PORT || 8080,
    db = require('./models'),
    exphbs = require('express-handlebars'),
    app = express();
app.use(express.urlencoded({ extended: !0 })),
    app.use(express.json()),
    app.use(express.static('public')),
    app.use(
        session({ secret: 'keyboard cat', resave: !0, saveUninitialized: !0 })
    ),
    app.use(passport.initialize()),
    app.use(passport.session()),
    app.engine('handlebars', exphbs({ defaultLayout: 'main' })),
    app.set('view engine', 'handlebars'),
    app.use(compression()),
    require('./routes/html-routes.js')(app),
    require('./routes/api-routes.js')(app),
    db.sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(
                '==> \uD83C\uDF0E  Listening on port %s. Visit http://localhost:%s/ in your browser.',
                PORT,
                PORT
            );
        });
    });
