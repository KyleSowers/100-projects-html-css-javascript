'use strict'

let countdown; //variable to hold set interval

document.getElementById('start-countdown').addEventListener('click', function() {
    let timeInput = document.getElementById('time-input').value; //Users input
    if (!timeInput) return; // Return if input is empty

    timeInput = parseInt(timeInput);
    if (isNaN(timeInput) || timeInput < 0) return; // Retrun if input is not a positive number

    if (countdown) clearInterval(countdown); // If a countdown is already active, clear it

    countdown = setInterval(function () {
        if (timeInput <= 0) { // If the countdown should be over
            clearInterval(countdown); // Clear the countdown
            document.getElementById('timer').textContent = '00'; // Reset the displayed countdown
        } else {
            timeInput--; // Subtract one second
            document.getElementById('timer').textContent = (timeInput > 9 ? "" : "0") + timeInput; // Display new time
        }
    }, 1000); // Run the function every second
});

