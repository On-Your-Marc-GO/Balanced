// /*eslint arrow-body-style: ["error", "as-needed"]*/
// /*eslint-env es6*/
// $(document).ready(() => {
//     // Getting references to our form and input
//     const signUpForm = $('form.signup');
//     const firstNameInput = $('input#firstName');
//     const lastNameInput = $('input#lastName');
//     const ageInput = $('input#age');
//     const heightInput = $('input#height');
//     const weightInput = $('input#weight');
//     const emailInput = $('input#email');
//     const passwordInput = $('input#password');

//     // When the signup button is clicked, we validate the email and password are not blank
//     signUpForm.on('submit', (event) => {
//         event.preventDefault();

//         const userData = {
//             firstName: firstNameInput.val().trim(),
//             lastName: lastNameInput.val().trim(),
//             age: ageInput.val().trim(),
//             height: heightInput.val().trim(),
//             weight: weightInput.val().trim(),
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim(),
//         };

//         if (
//             !userData.firstName ||
//             !userData.lastName ||
//             !userData.age ||
//             !userData.height ||
//             !userData.weight ||
//             !userData.email ||
//             !userData.password
//         ) {
//             return;
//         }
//         // If we have an email and password, run the signUpUser function
//         signUpUser(
//             userData.firstName,
//             userData.lastName,
//             userData.age,
//             userData.height,
//             userData.weight,
//             userData.email,
//             userData.password
//         );
//         firstNameInput.val('');
//         lastNameInput.val('');
//         ageInput.val('');
//         heightInput.val('');
//         weightInput.val('');
//         emailInput.val('');
//         passwordInput.val('');
//     });

//     // Does a post to the signup route. If successful, we are redirected to the index page
//     // Otherwise we log any errors
//     function signUpUser(
//         firstName,
//         lastName,
//         age,
//         height,
//         weight,
//         email,
//         password
//     ) {
//         $.post('/signup', {
//             firstName: firstName,
//             lastName: lastName,
//             age: age,
//             height: height,
//             weight: weight,
//             email: email,
//             password: password,
//         })
//             .then((data) => {
//                 window.location.replace('/dashboard');
//                 // If there's an error, handle it by throwing up a bootstrap alert
//             })
//             .catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//         $('#alert .msg').text(JSON.stringify(err.responseJSON));
//         $('#alert').fadeIn(500);
//     }
// });
