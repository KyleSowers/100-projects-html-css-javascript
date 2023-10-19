'use strict'

const NewLanguage = {
    'a': '!', 'b': '@', 'c': '#', 'd': '$', 'e': '%', 'f': '^', 'g': '&', 'h': '*', 'i': '(', 'j': ')', 'k':
        '-', 'l': '=', 'm': '+', 'n': '[', 'o': ']', 'p': '{', 'q': '}', 'r': ';', 's': ':', 't': ',', 'u': '.', 'v': '<', 'w': '>', 'x': '/', 'y': ':', 'z': '|', '': '~', '!': 'x'};

const inverseNewLanguage = {};
for (const key in NewLanguage) {
    inverseNewLanguage[NewLanguage[key]] = key
}

$('#to-new-language').click(function () {
    const inputEnglish = $('#input-english').val().toLowerCase();
    let outputNewLanguage = '';
    for (let i = 0; i < inputEnglish.length; i++) {
        if (NewLanguage[inputEnglish[i]]) {
            outputNewLanguage += NewLanguage[inputEnglish[i]];
        } else {
            outputNewLanguage += '?';
        }
    }
    $('#input-new-language').val(outputNewLanguage);
});

$('#to-english').click(function () {
    const inputNewLanguage = $('#input-new-language').val();
    let outputEnglish = '';
    for ( let i = 0; i < inputNewLanguage.length; i++) {
        if (inverseNewLanguage[inputNewLanguage[i]]) {
            outputEnglish += inverseNewLanguage[inputNewLanguage[i]];
        } else {
            outputEnglish += '?';
        }
    }
    $('#input-english').val(outputEnglish);
})