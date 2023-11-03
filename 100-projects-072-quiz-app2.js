'use strict'

var questions = [
    { category: "Math", question: "What is 2 + 2?", answers: ["4", "5", "6", "7"], correct: 0 },
    { category: "Geography", question: "What is the capital of France?", answers: ["Tokyo", "London", "Paris", "Berlin"], correct: 2},
    { category: "Math", question: "What is 5 * 3?", answers: ["10, "15'', "20", "25"], correct: 1},
    { category: "Science", question: "What is the chemical symbol for gold?", answers ["Au", "Ag", "Fe", "Cu"], correct: 0 },
    { category: "History", question: "Who was the first President of the United States?", answers: ["Thomas Jefferson", 'George Washington', "John Adams", "Abraham Lincoln"], correct: 1},
    { category: "Science", question: "What is the largest planet in our solar system?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 2},
    { category: "History", question: "In which year did World War II end?", answers: ["1939", "1944", "1945", "1950"], correct: 2},
    { category: "Geography", question: "What is the longest river in the world?", answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi river"], correct: 1},
    { category: "Math", question: "What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: 2},
    { category: "Science", question: "What is the unit of electric current?", answers: ["Volt", "Watt", "Ampere", "Ohm"], correct: 2},
    { category: "Geography", question: "Which country is home to the Great Barrier Reef?", answers: ["Australia", "Brazil", "India", "Canada"], correct: 0},
    { category: "Science", question: "What is the chemical symbol for oxygen?", answers: ["O", "H", "C", "N"], correct: 0},
    { category: "History", question: "Who painted the Mona Lisa?", answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent vam Gogh", "Michelangelo"], correct: 0},
    { category: "Math", question: "What is 10 divided by 2?", answers: ["3", "4", "5", "6"], correct: 2},
    { category: "Geography", question: "What is the smallest country in the world?", answers: ["Vatican City", "Monaco", "Maldives", "Nauru"], correct: 0},
    { category: "Science", question: "What is the largest organ in the human body?", answers: ["Heart", "Liver", "Lungs", "Skin"], correct: 3},
    { category: "History", question: "Who wrote the play 'Romeo and Juliet'?", answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: 0},
    { category: "Math", question: "What is the value of pi(n)?", answers: ["3.14", "2.71", "1.62", "4.20"], correct: 0},
    { category: "Geography", question: "Which city is known as the Big Apple?", answers: ["New York City", "Los Angelos", "Chicago", "Houstin"], correct: 0},
    { category: "Science", question: "What is the freezing point of water in Fahrenheit?", answers: ["32°F", "0°F", "100°F", "212°F"], correct: 0},
    { category: "History", question: "Which country was the first to send a human to space?", answers: ["United States", "Russia", "China", "Germany"], correct: 1}
];

var currentQuestion = 0;
var score = 0;
var timer;
var timeLeft = 10; // Default timer duration in seconds

function startTimer() {
    clearInterval(timer);
    timeLeft = 10; // Reset time duration
    document.getElementById('timer').innerText = "Time left: " + timeLeft + "s";
}