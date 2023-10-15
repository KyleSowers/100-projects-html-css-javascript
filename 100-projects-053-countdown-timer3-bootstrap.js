'use strict'

let countdown; //variable to hold setInterval
let originalTime;
let isPaused = false;

function setProgress(time) {
    $('#progress-bar div').width(((originalTime - time) / originalTime) * 100 + '%');
}

$('#start-countdown').click(function() {
    let timeInput = $('#time-input').val(); //get user input
    if (!timeInput) return; // return if input is empty

    timeInput = parseInt(timeInput);
    if (isNaN(timeInput) || timeInput <= 0) return; // return if input is not a positive number

    originalTime = timeInput;

    if (countdown) clearInterval(countdown); //if a countdown is already active, clear it

    $('#start-countdown').prop('disabled', true);
    $('#pause-countdown').prop('disabled', false);
    $('#reset-countdown').prop('disabled', false);

    countdown = setInterval(function () {
        if (timeInput <= 0) { // if the countdown should be over
            clearInterval(countdown); // clear the countdown
            $('#timer').text("00"); // reset the displayed countdown
        } else {
            timeInput--; // subtract one second
            $('#timer').text((timeInput > 9 ? "" : "0") + timeInput); // display the new time
            setProgress(timeInput);
        }
    }, 1000); // run the function every second
});

$('#pause-countdown').click(function () {
    if (isPaused) {
        $('#pause-countdown').text('Pause');
        countdown = setInterval(function () {
            let timeInput = parseInt($('#timer').text());
            if (timeInput <= 0) {
                clearInterval(countdown);
                $('#timer').text('00');
            } else {
                timeInput--;
                $('#timer').text((timeInput > 9 ? "" : "0") + timeInput);
                setProgress(timeInput);
            }
        }, 1000);
    } else {
        clearInterval(countdown);
        $('#pause-countdown').text('Continue');
    }
    isPaused = !isPaused;
});

$('#reset-countdown').click(function () {
    clearInterval(countdown);
    $('#timer').text('00');
    $('#time-input').val('');
    $('#progress-bar div').width('0%');
    $('#start-countdown').prop('disabled', false);
    $('#pause-countdown').prop('disabled', true);
    $('#pause-countdown').text('Pause');
    $('#reset-countdown').prop('disabled', true);
    isPaused = false;
});