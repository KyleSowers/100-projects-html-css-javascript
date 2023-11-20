'use strict'

$(document).ready(function () {
    //Event listener for the form submission
    $('#geocode-form').submit(function (e) {
        e.preventDefault();

        var location = $('#location-input').val();

        axios.get('https://api.opencagedata.com/geocode/v1/json', {
            params: {
                q: location,
                key: 'YOURAPIKEYHERE'
            }
        })
            .then(function (response) {
                var formattedAddress = response.data.results[0].formatted;
                var lat = response.data.results[0].geometry.lat;
                var lng = response.data.results[0].geometry.lng;

                var formattedAddressOutput = `
                <ul class='list-group'>
                    <li class="list-group-item">${formattedAddress}</li>
                </ul>
                `;

                var geometryOutput = `
                <ul class='list-group'>
                    <li class="list-group-item"><strong>Latitudw: </strong>${lat}</li>
                    <li class="list-group-item"><strong>Longitutde: </strong>${lng}</li>
                </ul>
                `;

                $('#result').html(formattedAddressOutput + geometryOutput);
            })
            .catch(function (error) {
                console.log(error);
            });
    });


//Event listener for the clear button
    $('#clear-button').click(function () {
        $('#location-input').val('');
        $('#result').html('');
    });

//Event listener for the copy button
    $('#copy-button').click(function () {
        var formattedAddress = $('#result').find('.list-group-item').first().text();
        copyToClipboard(formattedAddress);
    });


    function copyToClipboard(text) {
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(text).select();
        document.execCommand('copy');
        tempInput.remove();
        alert('Formatted address copied to clipboard');
    }
});







