'use strict'

function convertTemperature() {
    let temp = document.getElementById('temp').value;
    let output = document.getElementById('output');

    if (document.getElementById('f_to_c').checked) {
        output.innerHTML = ((temp -32) * 5 / 9).toFixed(2) + '°C';
    } else if (document.getElementById('c_to_f').checked) {
        output.innerHTML = ((temp * 9 / 5) + 32).toFixed(2) + '°F';
    } else {
        output.innerHTML = "Please select conversion method.";
    }
}