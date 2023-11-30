'use strict'

$(document).ready(function () {
    let testText = $('#test-text');
    let result = $('#result');
    let progressBar = $('#progress-bar');
    let startBtn = $('#start-btn');
    let intervalId;
    let timeRemaining = 60;
    let errorCount = 0;

    startBtn.click(function () {
        startBtn.prop('disabled', true);
        testText.prop('disabled', false).focus();
        progressBar.text(timeRemaining);
        intervalId = setInterval(countdown, 1000);
    });

    $('#reset-btn').click(function () {

    })
})