let formSubmitted = false;

function validateFields() {
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorFname = document.getElementById('error-fname');
let errorLname = document.getElementById('error-lname');
let errorEmail = document.getElementById('error-email');
let errorPassword = document.getElementById('error-password');
let input = document.querySelector('input');
let emoji = '\u2757';
input.placeholder = `${emoji}`;

        if (formSubmitted && !fname.value) {
                errorFname.innerHTML = '<b>First Name cannot be empty</b>';
                fname.placeholder = `${emoji}`;
        } else {
                errorFname.innerHTML = '';
        }

        if (formSubmitted && !lname.value) {
                errorLname.innerHTML = '<b>Last Name cannot be empty</b>';
                lname.placeholder = `${emoji}`;
        } else {
                errorLname.innerHTML = '';
        }

        if (formSubmitted && !email.value) {
                errorEmail.innerHTML = '<b>Looks like this is not an email</b>';
                email.placeholder = `${emoji}`;
        } else {
                errorEmail.innerHTML = '';
        }

        if (formSubmitted && !password.value) {
                errorPassword.innerHTML = '<b>Password cannot be empty</b>';
                password.placeholder = `${emoji}`;
        } else {
                errorPassword.innerHTML = '';
}
}

function verificar(event) {
        event.preventDefault();
        formSubmitted = true;
        validateFields();
}

document.getElementById('button2').addEventListener('click', verificar);
