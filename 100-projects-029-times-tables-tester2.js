'use strict'

document.getElementById('submit').addEventListener('click', checkAnswer);

let num1, num2, correctAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
}

function checkanswer() {
    let userAnswer = document.getElementById('answer').value;
    if (userAnswer == correctAnswer) {
        document.getElementById('feedback').innerText = "Correct! Great job.";
    } else {
        document.getElementById('feedback').innerText = `Sorry, that's incorrect. The correct answer was ${correctAnswer}.`;
    }
        //Generate a new question
        generateQuestion();
        //Clear the input field
        document.getElementById('answer').value = '';
        //Set focus back to the input field
        document.getElementById('answer').focus();
}
//Generate the first question as soon as the page loads
generateQuestion();