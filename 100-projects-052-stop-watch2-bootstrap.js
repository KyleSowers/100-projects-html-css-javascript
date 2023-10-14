'use strict'

let minutes = 0, seconds = 0, hundredths = 0, t;

function add() {
    hundredths++;
    if (hundredths >= 100) {
        hundredths = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }

    $('#minutes').text((minutes > 9 ? "" : "0") + minutes);
    $('#seconds').text((seconds > 9 ? "" : "0") + seconds);
    $('#hundredths').text((hundredths > 9 ? "" : "0") + hundredths);

    startTimer();
}

function startTimer() {
    t = setTimeout(add, 10); //10 will run it every 100th of a second
}

$('#start-btn').click(function () {
    if (!t) startTimer();
})

$('#stop-btn').click(function () {
    clearTimeout(t);
    t = false;
});

$('#reset-btn').click(function () {
    clearTimeout(t);
    t = false;
    minutes = 0; seconds = 0; hundredths = 0;
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#hundredths').text('00');
});

