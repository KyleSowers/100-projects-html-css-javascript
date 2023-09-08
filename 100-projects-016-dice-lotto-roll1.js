'use strict'

document.getElementById('roll-dice-button').onclick = function() {
    let result = Math.floor(Math.random() * 6) +1;
    document.getElementById('result').innerHTML = result;
};

document.getElementById('roll-dice-button2').onclick = function() {
    let result = Math.floor(Math.random() * 45) + 1;
    document.getElementById('result2').innerHTML = result;
};