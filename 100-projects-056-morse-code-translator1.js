'use strict'

const MorseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '': '/'
    };

const inverseMorseCode = {};
for (const key in MorseCode) {
    inverseMorseCode[MorseCode[key]] = key;
}

document.getElementById('to-morse').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value.toLowerCase();

    let outputMorse = '';
    for (let i = 0; i < inputText.length; i++) {
        if (MorseCode[inputText[i]]) {
            outputMorse += MorseCode[inputText[i]] + ' ';
        } else {
            outputMorse += '? ';
        }
    }
    document.getElementById('input-morse').value = outputMorse;
});

document.getElementById('to-text').addEventListener('click', function () {
    const inputMorse = document.getElementById('input-morse').value.split(' ');
    let outputText = '';
    for (let i = 0; i < inputMorse.length; i++) {
        if (inverseMorseCode[inputMorse[i]]) {
            outputText += inverseMorseCode[inputMorse[i]];
        } else {
            outputText += '?';
        }
    }
    document.getElementById('input-text').value = outputText;
});