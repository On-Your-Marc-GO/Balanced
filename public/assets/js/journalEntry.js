/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/
$(document).ready(() => {
    // Getting references to our form and inputs
    const journalEntryForm = $('form.login');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');

    // When the form is submitted, we validate there's an email and password entered
    journalEntryForm.on('submit', (event) => {
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        };
        event.preventDefault();

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val('');
        passwordInput.val('');
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the index page
    function loginUser(email, password) {
        $.post('/login', {
            email: email,
            password: password,
        })
            .then(() => {
                window.location.replace('/dashboard');
                // If there's an error, log the error
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $('#alert .msg').text(JSON.stringify(err.responseJSON));
        $('#alert').fadeIn(500);
    }
});