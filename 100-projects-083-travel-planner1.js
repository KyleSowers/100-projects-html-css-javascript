'use strict'

const trips = [];

function addTrip() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if (destination && date) {
        const trip = { destination, date };
        trips.push(trip);
        document.getElementById('destination').value = '';
        document.getElementById('date').value = '';
        renderTrips();
    } else {
        alert('Please enter a destination and date');
    }
}

function deleteTrip(index) {
    trips.splice(index, 1);
    renderTrips();
}

function renderTrips() {
    const tripsDiv = document.getElementById('trips');
    tripsDiv.innerHTML = '';
    trips.forEach((trip, index) => {
        tripsDiv.innerHTML += ` <div class="trip"><span>${trip.destination} (${trip.date})</span><button onclick="deleteTrip(${index})">Delete</button></div>`
    });
}