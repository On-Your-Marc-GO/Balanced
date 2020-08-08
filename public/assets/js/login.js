$(document).ready(() => {
    function a(a, c) {
        $.post('/login', { email: a, password: c })
            .then(() => {
                window.location.replace('/dashboard');
            })
            .catch(b);
    }
    function b(a) {
        $('#alert .msg').text(JSON.stringify(a.responseJSON)),
            $('#alert').fadeIn(500);
    }
    const c = $('form.login'),
        d = $('input#email-input'),
        e = $('input#password-input');
    c.on('submit', (b) => {
        const c = { email: d.val().trim(), password: e.val().trim() };
        b.preventDefault();
        c.email && c.password && (a(c.email, c.password), d.val(''), e.val(''));
    });
});
