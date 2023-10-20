'use strict'

let cards = ['Lion', 'Tiger', 'Bear', 'Elephant', 'pig', 'cat', 'dog', 'cow', 'Lion', 'Tiger', 'Bear', 'Elephant', 'pig', 'cat', 'dog', 'cow'];
let firstCard = null;
let secondCard = null;
let pairsFound = 0;

function shuffleAndDealCards() {
    cards.sort(() => 0.5 - Math.random());
    $('#game-board').empty();

    $.each(cards, (i, cardText) => {
        let cardelement = $(`<div class="card"><div>${cardText}</div></div>`);
        $(`#game-board`).append(cardelement);

        cardelement.on('click', function () {
            if (!firstCard) {
                firstCard = cardelement;
                firstCard.children().show();
            } else if (!secondCard) {
                secondCard = cardelement;
                secondCard.children().show();

                if (firstCard.text() === secondCard.text()) {
                    firstCard = secondCard = null;
                    pairsFound++;
                    if (pairsFound === cards.length / 2) {
                        alert('Congratulations! You found all pairs.');
                    }
                } else {
                    setTimeout(function () {
                        firstCard.children().hide();
                        secondCard.children().hide();
                        firstCard = secondCard = null;
                    }, 1000);
                }
            }
        });
    });
}

$('#reset-button').on('click', fuction () {
    pairsFound = 0;
    shuffleAndDealCards();
});

shuffleAndDealCards();