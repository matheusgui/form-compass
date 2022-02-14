const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = $('#form');
const user = $('#username');
const email = $('#email');
const phone = $('#phone');
const password = $('#password');
const date = $('#date');
const terms = $('#terms');

form.addEventListener('submit', (e) => {

    const errors = validateForm(form);

    if (errors.length > 0) {
        e.preventDefault();
    } else {
        form.reset();
    }

});



function validateForm(form) {
    const userValue = user.value.trim();
    const emailValue = email.value.trim().toLowerCase();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const dateValue = date.value.trim();
    const termsChecked = terms.checked;

    const errors = [];

    if (!userValue.includes(' ') || userValue.length < 4) {
        setError(user, "Fullname Invalid");
        errors.push(1);
    } else {
        hideError(user);
    }

    if (!validEmail(emailValue)) {
        setError(email, "Email Invalid");
        errors.push(2);
    } else {
        hideError(email);
    }

    if (dateValue.length === 0) {
        setError(date, "Age Invalid");
        errors.push(3);
    } else {
        hideError(date);
    }

    if (phoneValue.length !== 11 || validPhone(phoneValue)) {
        setError(phone, "Phone Invalid");
        errors.push(4);
    } else {
        hideError(phone);
    }


    if (passwordValue.length > 8 || passwordValue.length < 6 || validPassword(passwordValue)) {
        setError(password, "Password Invalid");
        errors.push(5);
    } else {
        hideError(password);
    }

    if (!termsChecked) {
        setError(terms, "You must accept the terms!");
        errors.push(6);
    } else {
        hideError(terms);
    }
    return errors;
}


function setError(input, message) {
    const inputArea = input.parentElement.parentElement;
    const errorArea = inputArea.querySelector('.error');
    errorArea.innerText = message;
    errorArea.classList.remove('hidden');
}

function hideError(input) {
    const inputArea = input.parentElement.parentElement;
    const errorArea = inputArea.querySelector('.error');
    errorArea.classList.add('hidden');
}

function validEmail(email) {
    return /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validPhone(phone) {
    return /[^0-9]/.test(phone);
}

function validPassword(password) {
    return /[^0-9]/.test(password);
}