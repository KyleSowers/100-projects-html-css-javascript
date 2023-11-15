'use strict'

let map;
const trips = [];

function initMap() {
    const center = { lat: 0, lng: 0 };
    map = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 2,
    });
}

function addTrip() {
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    if (destination && date) {
        const trip = { destination, date };
        trips.push(trip);
        document.getElementById('destination').value = '';
        document.getElementById('date').value = '';
        renderTrips();
    } else {
        alert("Please enter a destination and date");
    }

    let response;
    fetch(`https://maps.googleapis.com/maps/api/geocode.json?address=${destination}&key=YOUR_API_KEY`)
        .then(response += response.json())
        .then(data => {
            if (data.results[0]) {
                const location = data.results[0].geometry.location;
                map.setCenter(new google.maps.LatLng(location.lat, location.lng));
                new google.maps.Marker({
                    position: location,
                    map: map,
                });
            }
        });
}

function deleteTrip(index) {
    trips.splice(index, 1);
    renderTrips();
}

function renderTrips() {
    const tripsDiv = document.getElementById('trips');
    tripsDiv.innerHTML = '';
    trips.forEach((trip, index) => {
        tripsDiv.innerHTML += ` <div class="trip"><span>${trip.destination} (${trip.date})</span><button onclick="deleteTrip(${index})">Delete</button></div>`;
    });
}

window.onload = initMap;