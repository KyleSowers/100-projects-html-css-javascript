'use strict'

var commonPasswords = ['123456', 'password', '12345678', 'qwerty', 'abc123'];

function checkPasswordStrength(password) {
    var strength = 0;

    if(password.length >=8) { strength++; }
    if(/[a-z]/.test(password)) { strength++; }
    if(/[A-Z]/.test(password)) { strength++; }
    if(/[0-9]/.test(password)) { strength++; }
    if(/[^a-zA-Z0-9]/.test(password)) { strength++; }
    if(!commonPasswords.includes(password)) { strength++; }

    var passwordStrengthBar = document.getElementById('passwordStrengthBar');
    var breakTime = document.getElementById('breakTime');

    passwordStrengthBar.style.width = strength * 16.667 + '%';

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

