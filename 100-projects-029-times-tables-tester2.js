'use strict'

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('set-limit').addEventListener('click', generateQuestion);

let num1, num2, correctAnswer;

function generateQuestion() {
    let limit = parseInt(document.getElementById('limit').value);
    num1 = Math.floor(Math.random() * limit) + 1;
    num2 = Math.floor(Math.random() * limit) + 1;
    correctAnswer = num1 * num2;
    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
}

function checkAnswer() {
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
// generateQuestion();