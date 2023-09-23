'use strict'

document.getElementById('inputHeight').addEventListener('input', convertHeight);
document.getElementById('inputUnit').addEventListener('change', convertHeight);
document.getElementById('outputUnit').addEventListener('change', convertHeight);
document.getElementById('reset').addEventListener('click', resetConverter);

function convertHeight() {
    let inputHeight = document.getElementById('inputHeight').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;

    let baseHeightInCm;

    switch (inputUnit) {
        case 'cm':
            baseHeightInCm = inputHeight;
            break;
        case 'in':
            baseHeightInCm = inputHeight * 2.54;
            break;
        case 'ft':
            baseHeightInCm = inputHeight * 30.48;
            break;
    }

    let outputHeight;

    switch (outputUnit) {
        case 'cm':
            outputHeight = baseHeightInCm;
            break;
        case 'in':
            outputHeight = baseHeightInCm / 2.54;
            break;
        case 'ft':
            outputHeight = baseHeightInCm /30.48;
            break;
    }

    document.getElementById('outputHeight').value = outputHeight;
}

function resetConverter() {
    document.getElementById('inputHeight').value = '';
    document.getElementById('outputHeight').value = '';
}