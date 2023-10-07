'use strict'

document.getElementById('roll-dice-button').onclick =function () {
    let result = Math.floor(Math.random() * 6) +1;
    let result2 = Math.floor(Math.random() * 6) +1;
    let twoDiceRoll = result2 + result;
    document.getElementById('result').innerHTML = twoDiceRoll;
};

document.getElementById('roll-dice-button2').onclick = function () {
    let result = Math.floor(Math.random() * 45) +1;

    let result2;
    let result3;
    let result4;
    let result5;
    let result6;

    do {
        result2 = Math.floor(Math.random() *45) +1;
    } while (result2 === result);

    do {
        result3 = Math.floor(Math.random() * 45) +1;
    } while (result3 === result || result3 === result2);

    do {
        result4 = Math.floor(Math.random() * 45) +1;
    } while (result4 === result || result4 === result2 || result4 === result3);

    do {
        result5 = Math.floor(Math.random() * 45) +1;
    } while (result5 === result || result5 === result2 || result5 === result3 || result5 === result4);

    do {
        result6 = Math.floor(Math.random() * 45) +1;
    } while (result6 === result || result6 === result2 || result6 === result3 || result6 === result4 || result6 === result5);

    let fullLottoResult = `${result}, ${result2}, ${result3}, ${result4}, ${result5}, ${result6}`;

    document.getElementById('result2').innerHTML = fullLottoResult;
};