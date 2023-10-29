'use strict'

//Replace the apikey with your own
let apiKey = 'YOURAPIKEYHERE';

$('#search-form').on('submit', function (e) {
    e.preventDefault();
    let city = $('#search-input').val();
    getWeather(city);
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric')
        .then(response => response.json())
        .then(data => {
            $('#current-weather').html(`
            <h2 class="card-title">Current Weather for ${data.name}</h2>
            <p class="card-text">Temperature: ${data.main.temp}°C</p>
            <p class="card-text">Weather: ${data.weather[0].main}</p>
            `);
        });

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=metric')
        .then(response => response.json())
        .then(data => {
            let forecastHTML = `<h2 class='card-title'>Forecast for ${city}</h2>`;
            for (let i = 0; i < data.list.length; i += 8) {
                forecastHTML += `<p class="card-text">${data.list[i].dt_txt}: ${data.list[i].main.temp}°C, ${data.list[i].weather[0].main}</p>`;
            }
            $('#forecast').html(forecastHTML);
        });
}