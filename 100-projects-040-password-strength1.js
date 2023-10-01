'use strict'

function checkPasswordStrength(password) {
    var strength = 0;

    //Check length
    if (password.length >= 8) {
        strength++;
    }

    //Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength++
    }

    //Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    //Check for numbers
    if (/[0-9]/.test(password)) {
        strength++;
    }

    //Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength++;
    }

    var passwordStrength = document.getElementById('passwordStrength');

    switch (strength) {
        case 0:
            passowrdStrength.textContent = '';
            break;
        case 1:
            passwordStrength.textContent = 'Very weak';
            break;
        case 2:
            passwordStrength.textContent = 'Weak';
            break;
        case 3:
            passwordStrength.textContent = 'Medium';
            break;
        case 4:
            passwordStrength.textContent = 'Strong';
            break;
        case 5:
            passwordStrength.textContent = 'Very strong';
            break;
    }
}