'use strict'

const passwordDisplay = document.getElementById('passwordDisplay');
const passwordLength = document.getElementById('passwordLength');
const includeUpperCase = document.getElementById('includeUpperCase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const generateButton = document.getElementById('generateButton');

const upperCaseCharCodes = arrayFromLowToHigh(65, 90)
const lowerCaseCharCodes = arrayFromLowToHigh(97,122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

generateButton.addEventListener('click', generatePassword)

function generatePassword() {
    const length = passwordLength.value;
    const includeUpper = includeUpperCase.checked;
    const includeNums = includeNumbers.checked;
    const includeSyms = includeSymbols.checked;

    let charCodes = lowerCaseCharCodes;
    if (includeUpper) charCodes = charCodes.concat(upperCaseCharCodes);
    if (includeNums) charCodes = charCodes.concat(numberCharCodes);
    if (includeSyms) charCodes = charCodes.concat(symbolCharCodes);

    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(character));
    }
    passwordDisplay.innerText = passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}