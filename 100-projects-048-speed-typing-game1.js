'use strict'

const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

let score = 0;
let time = 60;
let isPlaying;

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
    }

    timeDisplay.innerHTML = time;
}, 1000);

//Event listeners
wordInput.addEventListener('input', startMatch);

function startMatch() {
    if (wordInput.value === wordDisplay.innerHTML) {
        isPlaying = true;
        wordInput.value = '';
        score++;
        scoreDisplay.innerHTML = score;
        showWord(words);
    }
}

//Show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerHTML = words[randIndex];
}

showWord(words);