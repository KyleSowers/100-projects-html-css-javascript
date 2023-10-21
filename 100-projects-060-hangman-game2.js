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
    let category = document.getElementById('category-selector').value;
    let words = categories[category];
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    remainingLetters = word.length;
    document.getElementById('word-container').innerText = answerArray.join(" ");
    drawKeyboard();
}

function drawKeyboard() {
    let keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i).toLowerCase();
        let letterElement = document.createElement('div');
        letterElement.innerText = letter;
        letterElement.onclick = function() {
            makeGuess(letter);
        };
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
        document.getElementById('word-container').innerText = answerArray.join(" ");
    }

    if (remainingLetters === 0) {
        setTimeout(() => {
            alert('Congratulations! The word was ' + word);
            resetGame();
        }, 100);
    }
}

resetGame();