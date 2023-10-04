'use strict'

async function getWeather() {
    const city = document.getElementById('city').value;
    try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=092f54e98edaf0c05bf3067ee20dc048&units=metric`);
    const data =  response.json();
    const weatherDiv = document.getElementById('weather');

        weatherDiv.innerHTML = `
            <h2 class="fw-bold">Weather in ${data.name}</h2>
            <p><strong>Temperature: </strong> ${data.main.temp} °C</p>
            <p><storng>Weather: </storng>${data.weather[0].description}</p>
        `;
    } catch (error) {
    if (error.response) {
        alert(error.response.data.message);
    } else if (error.request) {
        alert('The request was made but no response was received');
    } else {
        alert('Error', error.message);
    }
}
}