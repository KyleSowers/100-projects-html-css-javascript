'use strict'

//This function counts the number of words and characters in the user's text
function countWordsAndCharacters() {
    let text = document.getElementById('user-input').value;

//Count characters
    let characterCount = text.length;
    document.getElementById('character-count').textContent = 'Character count:' + characterCount;

//Count words
    let wordCount = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;
    document.getElementById('word-count').textContent = 'Word count: ' + wordCount;
}

//This event listener calls the countWordsAndCharacters function each time the button is clicked
document.getElementById('count-button').addEventListener('click', countWordsAndCharacters);