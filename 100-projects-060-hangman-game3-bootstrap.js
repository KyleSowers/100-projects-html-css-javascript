'use strict'

let categories = {
    'animal': ['elephant', 'giraffe', 'kangaroo', 'dog', 'cat', 'cow'],
    'food': ['hamburger', 'spaghetti', 'sandwich', 'bread', 'ramen', 'kimchi'],
    'nation': ['australia', 'brazil', 'canada', 'korea', 'japan', 'china']
};
let word = '';
let answerArray = [];
let remainingLetters = 0;

function resetGame() {
    let category = $('#category-selector').val();
    let words = categories[category];
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    remainingLetters = word.length;
    $('#word-container').text(answerArray.join(" "));
    drawKeyboard();
}

function drawKeyboard() {
    let keyboard = $('#keyboard');
    keyboard.empty();
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i).toLowerCase();
        let letterElement = $('<div>').text(letter).addClass('keyboard-letter');
        letterElement.on('click', function () {
            makeGuess(letter);
        });
        keyboard.appendChild(letterElement);
    }
}

function makeGuess(letter) {
    let isCorrectGuess = false;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === letter && answerArray[j] === "_") {
            answerArray[j] = letter;
            remainingLetters--;
            isCorrectGuess = true;
        }
    }
    if (isCorrectGuess) {
        $('#word-container').text(answerArray.join(" "));
    }

    if (remainingLetters === 0) {
        $('#message').text('Congratulations! The word was ' + word);
        setTimeout(resetGame, 2000);
    }
}

$.each(categories, function (key, value) {
    $('#category-selector').append($('<option>').text(key).attr('value', key));
});

$('#reset-button').on('click', function () {
    resetGame();
})

resetGame();