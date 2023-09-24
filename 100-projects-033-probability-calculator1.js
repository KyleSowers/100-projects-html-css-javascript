'use strict'

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *=i;
    }
    return result;
}

function calculateProbability() {
    const totalNumbers = document.getElementById('total-numbers').value;
    const chosenNumbers = document.getElementById('chosen-numbers').value;

    const combinations = factorial(totalNumbers) / (factorial(chosenNumbers) * factorial(totalNumbers - chosenNumbers));
    const probability = 1 / combinations;

    document.getElementById('result').innerHTML = 'Probability: 1 in ' + combinations.toLocaleString() + '(approximately' + probability.toFixed(20) + ')';
}