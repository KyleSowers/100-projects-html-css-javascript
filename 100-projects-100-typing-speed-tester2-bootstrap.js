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
        clearInterval(intervalId);
        testText.val('');
        result.text('');
        errorCount = 0;
        $('#error').text('');
        startBtn.prop('disabled', false);
        testText.prop('disabled', true);
        timeRemaining = 60;
        progressBar.css('width', '100%').text(timeRemaining);
    });

    testText.keydown(function (event) {
        if (event.keyCode === 8) {
            errorCount++;
            $('#error').text(`Errors: ${errorCount}`);
        }
    });

    function countdown() {
        timeRemaining--;
        progressBar.css('width', `${(timeRemaining / 60) * 100}%`).text(timeRemaining);
        if (timeRemaining === 0) {
            clearInterval(intervalId);
            calculateSpeed();
        }
    }

    function calculateSpeed() {
        let totalWords = testText.val().split('').length;
        result.text(`You typed at ${totalWords} words per minute.`);
        testText.prop('disabled', true);
    }
});