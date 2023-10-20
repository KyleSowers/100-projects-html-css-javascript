'use strict'

let cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
cards.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;

const gameBoard = document.getElementById('game-board');

for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const innerDiv = document.createElement('div');
    innerDiv.textContent = cards[i];
    cardElement.appendChild(innerDiv);

    gameBoard.appendChild(cardElement);

    cardElement.addEventListener('click', function() {
        if(firstCard === null) {
            firstCard = cardElement;
            innerDiv.style.display = 'block';
        } else if (secondCard === null) {
            secondCard = cardElement;
            innerDiv.style.display = 'block';

            if (firstCard.textContent === secondCard.textContent) {
                firstCard = null;
                secondCard = null;
            } else {
                setTimeout(function () {
                    firstCard.children[0].style.display = 'none';
                    secondCard.children[0].style.display = 'none';
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
        }
    });
}