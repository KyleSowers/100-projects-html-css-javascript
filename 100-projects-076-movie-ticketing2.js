'use strict'

//Number of seats in the grid
const numSeats = 36;

//Container for the seats
const container = document.getElementById('seat-container');

//Create seats and add them to the container
for (let i = 0; i < numSeats; i++) {
    const seat = document.createElement('div');
    seat.className = 'seat';
    seat.textContent = i + 1;
    container.appendChild(seat);
}

//Add event listener to each seat
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});

//Add event listener tot the book button
document.getElementById('book-button').addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    alert(`You've selected ${selectedSeats.length} seats for ${document.getElementById('movie-select').value}`);
});

// /Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', () => {
    document.querySelectorAll('.seat.selected').forEach(seat => {
        seat.classList.remove('selected');
    });
});

