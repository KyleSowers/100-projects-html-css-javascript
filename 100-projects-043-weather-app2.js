'use strict'

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=10cf8e020206c32f11740aa1748dad7b&units=metric`);
    const data = await response.json();

    if (response.ok) {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>Current Weather</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><storng>Weather: </storng>${data.weather[0].description}</p>
        `;
    } else {
        alert(data.message);
    }
}

