'use strict'


const MorseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '': '/'
};

const inverseMorseCode = {};
for (const key in MorseCode) {
    inverseMorseCode[MorseCode[key]] = key;
}

$('#to-morse').click(function () {
    const inputText = $('#input-text').val().toLowerCase();
    let outputMorse = '';
    for (let i = 0; i < inputText.length; i++) {
        if (MorseCode[inputText[i]]) {
            outputMorse += MorseCode[inputText[i]] + ' ';
        } else {
            outputMorse += '?';
        }
    }
    $('#input-morse').val(outputMorse);
})

$('#to-text').click(function() {
    const inputMorse = $('#input-morse').val().split(' ');
    let outputText = '';
    for (let i = 0; i < inputMorse.length; i++) {
        if (inverseMorseCode[inputMorse[i]]) {
            outputText += inverseMorseCode[inputMorse[i]];
        } else if (inputMorse === " ") {
            outputText += '?';
        }
    }
    $('#input-text').val(outputText);
});