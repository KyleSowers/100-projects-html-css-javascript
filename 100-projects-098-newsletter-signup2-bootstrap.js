"use strict"

$('#signup-form').on('submit', function(event) => {
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var interest = $('#interests').val();
    var emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


})