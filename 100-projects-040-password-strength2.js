'use strict'

var commonPasswords = ['123456', 'password', '12345678', 'qwerty', 'abc123'];

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

    //Check against list of common passwords
    if (!commonPasswords.includes(password)) {
        strength++;
    }

    var passwordStrength = document.getElementById('passwordStrength');
    var breakTime = document.getElementById('breakTime');

    switch (strength) {
        case 0:
            passwordStrength.textContent = '';
            break;
        case 1:
            passwordStrength.textContent = 'Very weak';
            breakTime.textContent = "Estimated break time: Instant";
            break;
        case 2:
            passwordStrength.textContent = 'Weak';
            breakTime.textContent = "Estimated break time: Seconds";
            break;
        case 3:
            passwordStrength.textContent = 'Medium';
            breakTime.textContent = "Estimated break time: Hours";
            break;
        case 4:
            passwordStrength.textContent = 'Strong';
            breakTime.textContent = "Estimated break time: Days";
            break;
        case 5:
            passwordStrength.textContent = 'Very strong';
            breakTime.textContent = "Estimated break time: Years";
            break;
        case 6:
            passwordStrength.textContent = 'Extremely Strong';
            breakTime.textContent = "Estimated break time: Decades";
            break;
    }
}