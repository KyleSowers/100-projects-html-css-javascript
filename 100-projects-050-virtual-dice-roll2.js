'use strict'

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').src = 'images/dice_no' + dice + '.png';
}