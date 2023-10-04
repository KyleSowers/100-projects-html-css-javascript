'use strict'

async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&units=metric`);
    const data = await response.json();

    if (response.ok) {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p><strong>Temperature: </strong> ${data.main.temp} °C</p>
            <p><storng>Weather: </storng>${data.weather[0].description}</p>
        `;
    } else {
        alert(data.message);
    }
}