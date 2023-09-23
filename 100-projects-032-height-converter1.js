'use srict'

document.getElementById('inputHeight').addEventListener('input', convertHeight);
document.getElementById('inputUnit').addEventListener('change', convertHeight);
document.getElementById('outputUnit').addEventListener('change', convertHeight);

function convertHeight() {
    let inputHeight = document.getElementById('inputHeight').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit =document.getElementById('outputUnit').value;

    let baseHeightInCM;

    switch (inputUnit) {
        case 'cm':
            baseHeightInCM = inputHeight;
            break;
        case 'in':
            baseHeightInCM = inputHeight * 2.54;
            break;
        case 'ft':
            baseHeightInCM = inputHeight * 30.48;
            break;
    }

    let outputHeight;

    switch (outputUnit) {
        case 'cm':
            outputHeight = baseHeightInCM;
            break;
        case 'in':
            outputHeight = baseHeightInCM / 2.54;
            break;
        case 'ft':
            outputHeight = baseHeightInCM /30.48;
            break;
    }

    document.getElementById('outputHeight').value = outputHeight
}