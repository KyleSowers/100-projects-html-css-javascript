'use strict'

let cards = ['Lion', 'Tiger', 'Bear', 'Elephant', 'pig', 'cat', 'dog', 'cow', 'Lion', 'Tiger', 'Bear', 'Elephant', 'pig', 'cat', 'dog', 'cow'];
let firstCard = null;
let secondCard = null;
let pairsFound = 0;

const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');

function shuffleAndDealCards() {
    cards.sort(() => 0.5 - Math.random());
    gameBoard.innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const innerDiv = document.createElement('div');
        innerDiv.textContent = cards[i];
        cardElement.appendChild(innerDiv);

        gameBoard.appendChild(cardElement);

        cardElement.addEventListener('click', function () {
            if (firstCard === null) {
                firstCard = cardElement;
                innerDiv.style.display = 'block';
            } else if (secondCard === null) {
                secondCard = cardElement;
                innerDiv.style.display = 'block';

                if (firstCard.textContent === secondCard.textContent) {
                    firstCard = null;
                    secondCard = null;
                    pairsFound++;

                    if (pairsFound === cardds.length / 2) {
                        alert('Congratulations! You found all pairs.');
                    }
                } else {
                    setTimeout(Function () {
                        firstCard.children[0].style.display = 'none';
                        secondCard.children[0].style.display = 'none';
                        firstCard = null;
                        secondCard = null;
                    }, 1000);
                }
            }
        });
    }
}