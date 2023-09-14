'use strict'

function isPalindrome() {
    let text =document.getElementById('user-input').value;
    //Use regex to remove non-alphanumeric characters and convert to lowercase
    let processedText = text.replace(/[\W_]/g,'').toLowerCase();
    let reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
        document.getElementById('result').textContent = '"' + text + '" is a palindrome.';
    } else {
        document.getElementById('result').textContent = '"' + text + '" is not a palindrome.';
    }
}

document.getElementById('check-button').addEventListener('click', isPalindrome);