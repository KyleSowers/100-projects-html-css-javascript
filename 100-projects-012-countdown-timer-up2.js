"use strict"

let countdownInterval;
let totalSeconds;

function startCountdown() {
    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);
    let seconds = parseInt(document.getElementById('seconds').value);

    //Convert all to seconds
    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    //Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(function() {
        if (totalSeconds < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Countdown Finished!";
        } else {
            let hoursRemaining = Math.floor(totalSeconds / 3600);
            let minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
            let secondsRemaining = totalSeconds % 60;
            document.getElementById('countdown').innerHTML = hoursRemaining + "H " + minutesRemaining + "M " + secondsRemaining + "S ";
            totalSeconds++
        }
    }, 1000);
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
}

function resetCountdown() {
    stopCountdown();
    totalSeconds = 0;
    document.getElementById('countdown').innerHTML = "";
    document.getElementById('hours').value ="0";
    document.getElementById('minutes').value = "0";
    document.getElementById('seconds').value = "0";
}