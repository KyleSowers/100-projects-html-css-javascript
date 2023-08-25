"use strict"

let countdownInterval;

document.getElementById("startCountdown").addEventListener("click", function() {
    let selectedDate = new Date(document.getElementById("datePicker").value);

    //correct timezone offset
    selectedDate.setMinutes(selectedDate.getTimezoneOffset() - selectedDate.getMinutes());

    if (selectedDate) {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        countdown(selectedDate);
    } else {
        alert("Please select a date.");
    }
});

function countdown(eventDate) {
    countdownInterval = setInterval(function () {
        let now = new Date();

        let currentTime= now.getTime();
        let eventTime = eventDate.getTime();

        let remainingTime = eventTime - currentTime;

        let seconds = Math.floor(remainingTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }, 1000);
}

