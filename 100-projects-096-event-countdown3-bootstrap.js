'use strict'

$('#event-form').on('submit', function (event) {
    event.preventDefault();

    let eventName = $('#eventName').val();
    let eventTime = new Date($('#eventTime').val());

    if (!eventName || !eventTime) {
        alert("Both fields are required!");
        return;
    }

    if (eventTime < new Date()) {
        alert("Event time cannot be in the past!");
        return;
    }

    //Create new event countdown
    let countdownDiv = $('<div class="jumbotron"></div>');
    countdownDiv.append(`<h3>⏳ ${eventName} ⏰</h3>`);
    countdownDiv.append(`<p class="lead text-danger countdown-number"></p>`);


})