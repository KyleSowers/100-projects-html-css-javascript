'use strict'

function updateClockAndDate() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Format the date
    let year = now.getFullYear();
    let month = now.getMonth() + 1; //Jan is 0!
    let day = now.getDate();

    //Pad with a zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${year}:${month}:${day}`;

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

//Update the clock and date immediately and then every second
updateClockAndDate();
setInterval(updateClockAndDate, 1000);