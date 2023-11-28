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

    //Add to events list
    $('#events-list').append(countdownDiv);

    let countdownEl = countdownDiv.find('.countdown-number');

    //Start countdown
    let countdownInterval =setInterval(function () {
        let now = new Date();
        let distance = eventTime - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.text(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        //When counter is over
        if(distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.text("Event has started");
        }
    }, 1000);

    //Reset input fields
    $(`#eventName`).value('');
    $(`#eventTime`).value('');
});

