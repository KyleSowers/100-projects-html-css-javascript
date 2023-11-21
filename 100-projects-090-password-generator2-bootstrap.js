'use strict'


const passwordDisplay = document.getElementById('passwordDisplay');
const passwordLength = document.getElementById('passwordLength');
const includeUpperCase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const resetButton = document.getElementById('resetButton');

const upperCaseCharCodes = arrayFromLowToHigh(65, 90)
const lowerCaseCharCodes = arrayFromLowToHigh(97,122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
resetButton.addEventListener('click', resetPassword);

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
    const generatedPassword = passwordCharacters.join('');
    passwordDisplay.innerText = generatedPassword;
}

function copyPassword() {
    const generatedPassword = passwordDisplay.innerText;
    if(!generatedPassword) {
        alert("No password generated to copy!");
        return;
    }

    const tempInput = document.createElement('textarea');
    document.body.appendChild(tempInput);
    tempInput.value = generatedPassword;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password copied to clipboard!');
}

function resetPassword() {
    passwordDisplay.innerText = '';
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

