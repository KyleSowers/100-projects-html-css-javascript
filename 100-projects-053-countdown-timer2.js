'use strict'

let countdown; // variable to hold setInterval
let originalTime;
let isPaused = false;

function setProgress(time) {
    const progress = document.querySelector('#progress-bar div');
    progress.style.width = ((originalTime - time) / originalTime) * 100 + '%';
}

document.getElementById('start-countdown').addEventListener('click', function () {
    let timeInput = document.getElementById('time-input').value; // get user input
        if (!timeInput) return; // return if input is empty

        timeInput = parseInt(timeInput);
        if (isNaN(timeInput) || timeInput <= 0) return; // return if input is not a positive number

        originalTime = timeInput;

        if (countdown) clearInterval(countdown); // if a countdown is already active, clear it

        document.getElementById('start-countdown').disabled = true;
        document.getElementById('pause-countdown').disabled = false;
        document.getElementById('reset-countdown').disabled = false;

        countdown = setInterval(function () {
            if (timeInput <= 0) { // if the countdown should be over
                clearInterval(countdown); //clear the countdown
                document.getElementById('timer').textContent = "00"; //reset the displayed countdown
            } else {
                timeInput--; // subtract one second
                document.getElementById('timer').textContent = (timeInput > 9 ? "" : "0") + timeInput; // display the new time
                setProgress(timeInput);
            }
    }, 1000); //run the function every second
});

document.getElementById('pause-countdown').addEventListener('click', function () {
    if (isPaused) {
        document.getElementById('pause-countdown').textContent = 'Pause';
        countdown = setInterval(function () {
            let timeInput = parseInt(document.getElementById('timer').textContent);
            if (timeInput <= 0) {
                clearInterval(countdown);
                document.getElementById('timer').textContent = "00";
            } else {
                timeInput--;
                document.getElementById('timer').textContent = (timeInput > 9 ? "" : "0") + timeInput;
                setProgress(timeInput);
            }
        }, 1000);
    } else {
        clearInterval(countdown);
        document.getElementById('pause-countdown').textContent = "Continue";
    }
    isPaused = !isPaused;
});

document.getElementById('reset-countdown').addEventListener('click', function () {
    clearInterval(countdown);
    document.getElementById('timer').textContent = "00";
    document.getElementById('time-input').value = '';
    document.querySelector('#progress-bar div').style.width = "0%";
    document.getElementById('start-countdown').disabled = false;
    document.getElementById('pause-countdown').disabled = true;
    document.getElementById('pause-countdown').textContent = "Pause";
    document.getElementById('reset-countdown').disabled = true;
    isPaused = false;
})