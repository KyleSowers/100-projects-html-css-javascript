'use strict'

var counter = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('try').onkeypress = function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        finding();
        retrun false;
    }
}

function finding() {
    var userNumber = document.getElementById('try').value;

    if (userNumber >=1 && userNumber <= 100) {
        if (randomNumber > userNumber) {
            document.getElementById('display').innerText = "Too  Low! Try Again!";
        } else if (randomNumber < userNumber) {
            document.getElementById('display').innerText = "Too High! Try Again!";
        } else {
            document.getElementById('display').innerHTML = "<span style='color:blue'>You are correct!</span>";
        }

        document.getElementById('try').value = '';
        counter++;
        document.querySelector('#counter').innerHTML = "Try Number : " + counter + " time(s)";
    } else
        alert("Input a number between 1 and 100.");

    document.getElementById('try').focus();
}