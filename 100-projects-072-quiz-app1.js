'use strict'

var questions = [
    { question: "What is 2 + 2", answers: ["4", "22", "222", "0"], correct: 0}, { question: "What is the capital of France?", answers: ["Tokyo", "London", "Paris", "Berlin"], correct: 2}, { question: "What is 5 * 3?", answers: ["10", "15", "20", "25"], correct: 1},
//     Add more questions as needed
];

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    if(currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion].question;
        for (var i = 0; i < 4; i++) {
            document.getElementById('btn' + i).innerText = questions[currentQuestion].answers[i];
        }
    } else {
        document.getElementById('quiz').style.display = "none";
        document.getElementById('next').style.display = "none";
    }
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

for (var i = 0; i < 4; i++) {
    document.getElementById('btn' + i).addEventListener('click', function (i) {
        return function () {
            checkAnswer(i);
        }
    }(i));
}

document.getElementById('next').addEventListener('click', function () {
    currentQuestion++;
    loadQuestion();
});

loadQuestion();