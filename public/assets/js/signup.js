$(document).ready(() => {
    function a(a, c, d, e, f, g, h) {
        $.post('/signup', {
            firstName: a,
            lastName: c,
            age: d,
            height: e,
            weight: f,
            email: g,
            password: h,
        })
            .then(() => {
                window.location.replace('/dashboard');
            })
            .catch(b);
    }
    function b(a) {
        $('#alert .msg').text(JSON.stringify(a.responseJSON)),
            $('#alert').fadeIn(500);
    }
    const c = $('form.signup'),
        d = $('input#firstName'),
        e = $('input#lastName'),
        f = $('input#age'),
        g = $('input#height'),
        h = $('input#weight'),
        i = $('input#email'),
        j = $('input#password');
    c.on('submit', (b) => {
        b.preventDefault();
        const c = {
            firstName: d.val().trim(),
            lastName: e.val().trim(),
            age: f.val().trim(),
            height: g.val().trim(),
            weight: h.val().trim(),
            email: i.val().trim(),
            password: j.val().trim(),
        };
        c.firstName &&
            c.lastName &&
            c.age &&
            c.height &&
            c.weight &&
            c.email &&
            c.password &&
            (a(
                c.firstName,
                c.lastName,
                c.age,
                c.height,
                c.weight,
                c.email,
                c.password
            ),
            d.val(''),
            e.val(''),
            f.val(''),
            g.val(''),
            h.val(''),
            i.val(''),
            j.val(''));
    });
});
