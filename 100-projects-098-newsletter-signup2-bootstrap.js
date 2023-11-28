"use strict"

$('#signup-form').on('submit', function (event) {
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var interest = $('#interests').val();
    var emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Thank you for signing up!");

    $('#name').val('');
    $('#email').val('');
    $('#interests').val('');
    $('#password').val('');
});

$("#show-password").on('click', function () {
    var passwordField = $('#password');
    var passwordFieldType = passwordField.attr("type");
    if (passwordFieldType == 'password') {
        passwordField.attr('type', 'text');
    } else {
        passwordField.attr('type', 'password');
    }
});