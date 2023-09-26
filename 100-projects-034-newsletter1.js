'use strict'

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    //prevent the form from submitting normally
    event.preventDefault();

    let email = document.getElementById('email').value;

    console.log('Form Submitted! Email: ', email);
})