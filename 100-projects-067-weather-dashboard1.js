'use strict'

//Replace this with own API Key
let apiKey = "APIKEYHERE";

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let city = document.getElementById('search-input').value;
    getWeather();
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric')
    .then(response => response.json())
        .then(data => {
            document.getElementById('current-weather').innerHTML =
                `<h2>Current Weather for` + data.name + `</h2>` + `<p>Temperature: ` + data.main.temp + `°C</p>` + `<p>Weather: ` + data.weather[0].main + `</p>`;
        });

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=metric')
        .then(response => response.json())
        .then(data => {
            let forecastHTML = '<h2>Forecast for ' + city + '</h2>';
            for (let i = 0; i < data.length; i += 8) {
                forecastHTML += '<p>' + data.list[i].dt_txt + ': ' + data.list[i].main.temp + '°C, ' + data.list[i].weather[0].main + '</p>';
            }
            document.getElementById('forecast').innerHTML = forecastHTML;
        });
}