'use strict'

document.getElementById('workout-form').addEventListener('submit', function(event) {
//     prevent the form from submitting
    event.preventDefault();


//Get workout data
let date = document.getElementById('date').value;
let workoutType = document.getElementById('workout-type').value;
let duration = document.getElementById('duration').value;

//Create a new workout log entry
let logEntry = document.createElement('p');
logEntry.textContent = date + ': ' + workoutType + ' for ' + duration + ' minutes';

//Add the log entry to the workout log
document.getElementById('workout-log').appendChild(logEntry);

//Clear the form
document.getElementById('date').value = '';
document.getElementById('workout-type').value = '';
document.getElementById('duration').value = '';

});