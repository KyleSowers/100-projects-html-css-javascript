'use strict'

function updateClock() {
    let now = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Pad with a zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}

//Update the clock immediately and then every second updateClock();
setInterval(updateClock, 1000);