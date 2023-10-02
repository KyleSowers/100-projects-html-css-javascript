'use strict'

function generateFibonacci() {
    var num = document.getElementById('num').value;
    var sequence = [0, 1];

    while ((sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= num) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    document.getElementById('sequence').innerText = 'Fibonacci Sequence: ' + sequence.join(', ');
}