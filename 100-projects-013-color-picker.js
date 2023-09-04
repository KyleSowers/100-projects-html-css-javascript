"use strict"
function updateColor() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    let hexColor = "#" + ((1 << 24) + (red << 16) + (green << 8) + parseInt(blue)).toString(16).slice(1);
    document.getElementById('colorDisplay').style.backgroundColor = hexColor;
    document.getElementById('hex').value = hexColor;
}

function hexToRgb() {
    let hex = document.getElementById('hex').value;

    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
        alert("Please enter a valid hex color.");
        return;
    }

    let bignit = parseInt(hex.slice(1),16);
    let r = (bignit >> 16) & 255;
    let g = (bignit >> 8) & 255;
    let b= bignit & 255;

    document.getElementById('red').value = r;
    document.getElementById('green').value = g;
    document.getElementById('blue').value = b;

    document.getElementById('colorDisplay').style.backgroundColor = hex;
}

