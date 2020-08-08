module.exports = function (a) {
    a.get('/', (a, b) => (a.user ? b.render('dashboard') : b.render('signup'))),
        a.get('/goalEntry', (a, b) =>
            a.user ? b.render('goalEntry') : b.render('login')
        ),
        a.get('/journalEntry', (a, b) =>
            a.user ? b.render('journalEntry') : b.render('login')
        ),
        a.get(
            '/login',
            (a, b) => (a.user && b.render('dashboard'), b.render('login'))
        ),
        a.get('/signup', (a, b) =>
            a.user ? b.render('dashboard') : b.render('signup')
        ),
        a.get('/dashboard', (a, b) =>
            a.user ? b.render('dashboard') : b.render('dashboard')
        ),
        a.get('/userProfile', (a, b) =>
            a.user ? b.render('userProfile', a.user) : b.render('login')
        ),
        a.get('/contact', (a, b) =>
            a.user ? b.render('contact') : b.render('login')
        );
};
