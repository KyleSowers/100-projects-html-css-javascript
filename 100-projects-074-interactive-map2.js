'use strict'

//Coordinates for Seoul, South Korea
const seoul = [37.5665, 126.9780];

//Initialize the map centered on Seoul with a zoom level of 13
const map = L.map('map').setView(seoul, 13);

//Add tile layer to the map (Map data © OpenStreetMap contributors)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addto(map);

//Add marker for Seoul
const marker = L.marker(seoul).addTo(map);

//Add a popup to the marker
marker.bindPopup('<b>Seoul</b><br>South Korea').openPopup();