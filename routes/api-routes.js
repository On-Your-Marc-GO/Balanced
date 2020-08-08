const db = require('../models'),
    passport = require('../config/passport');
module.exports = function (a) {
    a.post('/login', passport.authenticate('local'), (a, b) => {
        b.json({ email: a.user.email, id: a.user.id });
    }),
        a.post('/signup', (a, b) => {
            db.User.create(a.body)
                .then((a) => {
                    const c = a.dataValues;
                    console.log(c), console.log(a), b.render('userProfile', c);
                })
                .catch((a) => {
                    b.status(401).json(a);
                });
        }),
        a.post('/journalEntry', (a, b) => {
            db.journalEntry
                .create({ date: a.body.date, title: a.body.title })
                .then(() => {
                    b.render('journalEntry');
                })
                .catch((a) => {
                    b.status(401).json(a);
                });
        }),
        a.post('/activityEntry', (a, b) => {
            db.activityEntry
                .create({
                    name: a.body.activityName,
                    activityCategory: a.body.activityCategory,
                    totalTime: a.body.totalTime,
                    entryActivityText: a.body.entryActivityText,
                })
                .then(() => {
                    b.render('activityEntry');
                })
                .catch((a) => {
                    b.status(401).json(a);
                });
        }),
        a.post('/api/journalEntry', (a, b) => {
            console.log(a.body),
                db.journalEntry
                    .create({
                        activityName: a.body.activityName,
                        activityCategory: a.body.activityCategory,
                        totalTime: a.body.totalTime,
                        entryActivityText: a.body.entryActivityText,
                    })
                    .then(() => {
                        b.render('journalEntry');
                    })
                    .catch((a) => {
                        b.status(401).json(a);
                    });
        }),
        a.post('/nutritionEntry', (a, b) => {
            db.nutritionEntry
                .create({
                    entryNutritionText: a.body.entryNutritionText,
                    typeOfMeal: a.body.typeOfMeal,
                })
                .then(() => {
                    b.render('activityEntry');
                })
                .catch((a) => {
                    b.status(401).json(a);
                });
        }),
        a.get('/logout', (a, b) => {
            a.logout(), b.redirect('/');
        }),
        a.get('/user_data', (a, b) => {
            a.user
                ? b.json({ email: a.user.email, id: a.user.id })
                : b.json({});
        }),
        a.get('/data', (a, b) => {
            console.log(a.user),
                db.User.findOne({
                    where: { id: a.user.id },
                    include: [db.JournalEntry],
                }).then((a) => {
                    console.log(a),
                        db.JournalEntry.findAll({
                            include: [db.ActivityEntry, db.NutritionEntry],
                        }).then((a) => {
                            b.render('data', { JournalEntries: a });
                        });
                });
        }),
        a.get('/userProfile', (a, b) => {
            console.log(a.user),
                db.User.findOne({ where: { id: a.user.id } }).then((a) => {
                    console.log(132, a.email), b.render('userProfile', a);
                });
        });
};
