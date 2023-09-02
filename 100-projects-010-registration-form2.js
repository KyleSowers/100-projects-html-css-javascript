"use strict"

document.getElementById('submitButton').addEventListener('click', function () {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let feedback = document.getElementById('feedback');

    if (name == "") {
        feedback.innerHTML = "Name is required.";
        return;
    }

    if (email == "") {
        feedback.innerHTML = "Email is required.";
        return;
    }

    if (password == "") {
        feedback.innerHTML = "Password is required.";
    }

    if ( password.length < 8) {
        feedback.innerHTML = "Password must be at least 8 characters.";
        return;
    }

    feedback.innerHTML = "Registration successful!";
});