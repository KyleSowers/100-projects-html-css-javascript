'use strict'

function submitForm(event) {
    event.preventDefault(); //Prevent form submittal

    //Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var interests = document.getElementById('interests').value;

    //Perform form validation or additional processing if needed
    //...

    //Display a success message
    alert("Thank you for signing up!");

    //Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('interests').value = '';
}