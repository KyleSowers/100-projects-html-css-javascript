'use strict'
// Creating 100 Projects For Coding Beginners: A Journey through 100 Projects with 216 Tasks in HTML, CSS, and JavaScript
// - Shanghyun Na
// JavaScript functions Library


////Countdown() : countdown, date, time, calendar, days, hours, minutes, seconds, remaining : ex:003
//         Call function
        function countdown() {
            // Create new date
            let now = new Date();
            // Set desired end
            let eventDate = new Date(2023, 11, 31); //Month is 0 - based in Javascript
            //Call for current and event time
            let currentTime = now.getTime();
            let eventTime = eventDate.getTime();
            // Factor time and store into variable
            let remainingTime = eventTime - currentTime;
            // Use ramaining time to equate for individual outputs
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

            // combines each with added html text
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;

            setTimeout(countdown, 1000);
        }

        countdown();

//      OR (also Countdown(), with a input type="date" selector from HTML)

        let countdownInterval;

        document.getElementById("startCountdown").addEventListener("click", function() {
            // HTML (input type="date" allows for choosing date from chart)
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

////End of Countdown()
