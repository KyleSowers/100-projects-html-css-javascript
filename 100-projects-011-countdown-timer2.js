'use strict'

let countdownInterval;

function startCountdown() {
    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);
    let seconds = parseInt(document.getElementById('seconds').value);

    //convert all to seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    //clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(function () {
        if (totalSeconds < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Countdown Finished!"
        } else {
            let hoursRemaining = Math.floor(totalSeconds / 3600);
            let minutesRemaining = Math.floor((totalSeconds % 3600) /60);
            let secondsRemaining = totalSeconds % 60;
            document.getElementById('countdown').innerHTML = hoursRemaining + 'h ' + minutesRemaining + 'm ' + secondsRemaining + 's ';
            totalSeconds--;
        }
    }, 1000);
}