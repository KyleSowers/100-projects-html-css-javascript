'use strict'

const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'morbi', 'vulputate', 'massa', 'quis', 'sem', 'curabitur', 'aenean', 'ligula', 'pellentesque', 'mollis', 'praesent', 'porttitor'];

let score = 0;
let time = 60;
let isPlaying = false;

//Select elements
const wordInput = document.getElementById('word-input');
const wordDisplay = document.getElementById('word-display');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('timer');

//Game loop
const gameLoop = setInterval(() => {
    if (time > 0 && isPlaying) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
        wordInput.classList.remove('active');
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('final-score').innerText = score;
    }

    timeDisplay.innerHTML = time;
}, 1000);

//Event listeners
wordInput.addEventListener('input', startMatch);

function startMatch() {
    if (wordInput.value === wordDisplay.innerHTML) {
        wordInput.classList.add('active');
        isPlaying = true;
        wordInput.value = '';
        score++;
        scoreDisplay.innerHTML = score;
        showWord(words);

    //     Subtract one second from the timer every time the score reaches a multiple of 5: Increasing the difficulty over time:
        if (score %5 === 0) {
            time--;
        }
    }
}

//Show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerHTML = words[randIndex];
}

showWord(words);

function restartGame() {
    score = 0;
    time = 60;
    isPlaying = true;
    wordInput.classList.add('active');
    document.getElementById('game-over').style.display = 'none';
    scoreDisplay.innerHTML = score;
    showWord(words);
}