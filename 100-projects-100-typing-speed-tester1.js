'use strict'

let testText = document.getElementById('test-text');
let result = document.getElementById('result');
let timer = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let intervalId;
let timeRemaining = 60;

function startTest() {
    startBtn.disabled = true;
    testText.disabled = false;
    testText.focus();
    timer.textContent = timeRemaining;
    intervalId = setInterval(countdown, 1000);
}

function countdown() {
    timeRemaining--;
    timer.textContent = timeRemaining;
    if (timeRemaining === 0) {
        clearInterval(intervalId);
        calculateSpeed();
    }
}

function calculateSpeed() {
    let totalWords = testText.value.split('').length;
    result.textContent = `You typed at ${totalWords} words per minute.`;
    testText.disabled = true;
}

function resetTest() {
    clearInterval(intervalId);
    testText.value = '';
    result.textContent = '';
    startBtn.disabled = false;
    testText.disabled = true;
    timeRemaining = 60;
    timer.textContent = timeRemaining;
}

