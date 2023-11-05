'use strict'

const cities = {
    "Seoul": [37.5665, 126.9780],
    "New York": [40.7128, -74.0060],
    "Los Angelos": [34.0522, -118.2437],
    "Chicago": [41.8781, -87.6298],
    "Houston": [29.7604, -95.3698],
    "Phoenix": [33.4484, -112.0740],
    "Philadelphia": [39.9526, -75.1652],
    "San Antonio": [29.4241, -98.4936],
    "San Diego": [32.7157, -96.7970],
    "Dallas": [32.7767, -96.7970],
    "San Jose": [37.3382, -121.8863],
    "Tokyo": [35.6528, 139.8395],
    "Delhi": [28.7041, 77.1025],
    "Shanghai": [31.2304, 121.4737],
    "Sao Paulo": [-23.5505, -46.6333],
    "Mumbai": [19.0760, 72.8777],
    "Beijing": [39.9042, 116.4074],
    "Cairo": [30.0444, 31.2357],
    "Dhaka": [23.8103, 90.4125],
    "Mexico City": [19.4326, -99.1332],
    "Osaka": [34.6937, 135.5023],
    "Karachi": [24.8607, 67.0011],
    "Chongqing": [29.4326, 106.9123],
    "Istanbul": [41.0082, 28.9784],
    "Buenos Aires": [-34.6037, -58.3816],
    "Kolkata": [22.5726, 88.3639],
    "Lagos": [6.5244, 3,3792],
    "Rio de Janeiro": [-22.9068, -43.1729],
    "Manila": [14.5995, 120.9842],
    "Tianjin": [39.3434, 117.3616],
    "Jakarta": [-6.2088, 106.8456],
};

//Initialize the map centered on Seoul with a zoom level of 13
const map = L.map('map').setView(cities["Seoul"], 13);

//Ad tile layer to the map (Map data © OpenStreetMap contributors
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy: <a href=https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors'
}).addTo(map);

//Add a marker for Seoul
let marker = L.marker(cities['Seoul']).addTo(map);

//Add a popup to the marker
marker.bindPopup('<b>Seoul</b><br>South Korea').openPopup();

//Populate the select form with cities
$.each(cities, function (key) {
    $('#city-select').append($('<option>', {
        value: key,
        text: key
    }));
});

//Change the map view and marker when a city is selected
$('#city-select').on('change', function () {
    const city = this.value;
    const coordinates = cities[city];

    map.setView(coordinates, 13);
    marker.setLatLng(coordinates);
    marker.bindPopup('<b>${city}</b>').openPopup();
});
