'use strict'

function calculateTip() {
    let bill = document.getElementById('bill').value;
    let percentage = document.getElementById('percentage').value;

    let tip = bill * (percentage / 100);

    document.getElementById('result').innerHTML = 'The tip amount is: $' + tip.toFixed(2);
}

