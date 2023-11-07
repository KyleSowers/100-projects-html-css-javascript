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

