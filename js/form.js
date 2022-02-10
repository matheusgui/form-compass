const $ = document.querySelector.bind(document);

const form = $('#form');
const user = $('#username');
const email = $('#email');
const phone = $('#phone');
const password = $('#password');
const date = $('#date');
const terms = $('#terms');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm();
});



function validateForm(form) {
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const dateValue = date.value.trim();
    const termsChecked = terms.checked;

    if (!userValue.includes(' ') || userValue.length < 4) {
        setError(user, "Fullname Invalid");
    } else {
        hideError(user);
    }

    if (!validEmail(emailValue)) {
        setError(email, "Email Invalid");
    } else {
        hideError(email);
    }

    if (phoneValue.length !== 11 || validPhone(phoneValue)) {
        setError(phone, "Phone Invalid");
    } else {
        hideError(phone);
    }

    if (dateValue.length === 0) {
        setError(date, "Age Invalid");
    } else {
        hideError(date);
    }

    if (passwordValue.length === 0 || validPassword(passwordValue)) {
        setError(password, "Password Invalid");
    } else {
        hideError(password);
    }

    if(!termsChecked) {
        setError(terms, "You must accept the terms!");
    } else {
        hideError(terms);
    }

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
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validPhone(phone) {
    return /[^0-9]/.test(phone);
}

function validPassword(password) {
    return /[^6-8]/.test(password);
}