'use strict'

const NewLanguage = {
    'a': '!', 'b': '@', 'c': '#', 'd': '$', 'e': '%', 'f': '^', 'g': '&', 'h': '*', 'i': '(', 'j': ')', 'k':
'-', 'l': '=', 'm': '+', 'n': '[', 'o': ']', 'p': '{', 'q': '}', 'r': ';', 's': ':', 't': ',', 'u': '.', 'v': '<', 'w': '>', 'x': '/', 'y': ':', 'z': '|', '': '~', '!': 'x'};

const inverseNewLanguage = {};
for (const key in NewLanguage) {
    inverseNewLanguage[NewLanguage[key]] = key
}

document.getElementById('to-new-language').addEventListener('click', function () {
    const inputEnglish = document.getElementById('input-english').value.toLowerCase();
    let outputNewLanguage = '';
    for (let i = 0; i < inputEnglish.length; i++) {
        if (NewLanguage[inputEnglish[i]]) {
            outputNewLanguage += NewLanguage[inputEnglish[i]] + '';
        } else {
            outputNewLanguage += '?';
        }
    }
    document.getElementById('input-new-language').value = outputNewLanguage;
})

document.getElementById('to-english').addEventListener('click', function () {
    const inputNewLanguage = document.getElementById('input-new-language').value;
    let outputEnglish = '';
    for (let i = 0; i < inputNewLanguage.length; i++) {
        if (inverseNewLanguage[inputNewLanguage[i]]) {
            outputEnglish += inverseNewLanguage[inputNewLanguage[i]];
        } else {
            outputEnglish += '?';
        }
    }
    document.getElementById('input-english').value = outputEnglish;
});