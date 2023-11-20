'use strict'

document.getElementById('geocode-form').addEventListener('submit', geocode);

function geocode(e) {
    //prevent actual submit
    e.preventDefault();

    var location = document.getElementById('location-input').value;

    axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
            q: location,
            key: 'YOURAPIKEYHERE'
        }
    })
        .then(function (response) {
            //Log full response
            console.log(response);

            //Formatted Address
            var formattedAddress = response.data.results[0].formatted;
            var formattedAddressOutput = <ul class="list-group">
                <li class="list-group-item">${formattedAddress}</li>
            </ul>

            //Geometry
            var lat = response.data.results[0].geometry.lat;
            var lng = response.data.results[0].geometry.lng;

            var geometryOutput = `
            <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>${lng}</li>
            </ul>
            `;

            //Output to app
            document.getElementById('result').innerHTML = formattedAddressOutput + geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}

