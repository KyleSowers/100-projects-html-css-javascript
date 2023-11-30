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

