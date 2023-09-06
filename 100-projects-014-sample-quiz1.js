'use strict'

document.getElementById('quiz-form').addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    if (document.getElementById('q1').value.trim().toLowerCase()==='paris') {
        score++;
    }
    if (document.getElementById('q2').value.trim().toLowerCase()==='george orwell') {
        score++;
    }
    if (document.getElementById('q3').value.trim().toLowerCase()==='9') {
        score++
    }
    document.getElementById('score').textContent='You scored ' + score + ' out of 3.';
});