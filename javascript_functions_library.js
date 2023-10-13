'use strict'
// Creating 100 Projects For Coding Beginners: A Journey through 100 Projects with 216 Tasks in HTML, CSS, and JavaScript
// - Shanghyun Na
// JavaScript functions Library


//Countdown() : countdown, time, calendar, days, hours, minutes, seconds, remaining : ex:003
        function countdown() {
            let now = new Date();
            let eventDate = new Date(2023, 11, 31); //Month is 0 - based in Javascript

            let currentTime = now.getTime();
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

            setTimeout(countdown, 1000);
        }

        countdown();