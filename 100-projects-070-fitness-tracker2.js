'use strict'

document.getElementById('workout-form').addEventListener('submit', function (event) {
//     Prevent the form from submitting
    event.preventDefault();

//     Get the workout data
    var date = document.getElementById('date').value;
    var workoutType = document.getElementById('workout-type').value;
    var duration = document.getElementById('duration').value;

// Create a new workout log entry
    var logEntry = document.createElement('p');
    logEntry.textContent = date + ': ' + workoutType + ' for ' + duration + ' minutes';

//     Add log entries to workout log
    document.getElementById('workout-log').appendChild(logEntry);

//  Clear the form
    document.getElementById('date').value = '';
    document.getElementById('workout-type').value = '';
    document.getElementById('duration').value = '';
});