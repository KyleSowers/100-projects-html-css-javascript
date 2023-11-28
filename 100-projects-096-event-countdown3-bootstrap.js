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


})