'use strict'

let minutes = 0, seconds = 0, hundreths = 0, t;

function add() {
    hundreths++;
    if (hundreths >= 100) {
        hundreths = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }

    document.getElementById('minutes').textContent = (minutes > 9 ? "" : "0") + minutes;
    document.getElementById('seconds').textContent = (seconds > 9 ? "" : "0") + seconds;
    document.getElementById('hundreths').textContent = (hundreths > 9 ? "" : "0") + hundreths;

    startTimer();
}

function startTimer() {
    t = setTimeout(add, 10); //10 will run it every 100th of a second
}

    document.getElementById('start-btn').addEventListener('click', function () {
        if (!t) startTimer();
    });

    document.getElementById('stop-btn').addEventListener('click', function () {
        clearTimeout(t);
        t = false;
    });

    document.getElementById('reset-btn').addEventListener('click', function () {
        clearTimeout(t);
        t = false;
        minutes = 0; seconds = 0; hundreths = 0;
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        document.getElementById('hundreths').textContent = '00';
    });
