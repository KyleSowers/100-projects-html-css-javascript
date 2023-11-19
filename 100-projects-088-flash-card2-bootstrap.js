'use strict'

function flipCard(card) {
    card.classList.toggle('card-flipped');
}

function shuffleCards() {
    const flashcards = document.querySelectorAll('.flashcard-grid');
    const shuffledCards = Array.from(flashcards).sort(() => Math.random() - 0.5);
    shuffledCards.foreach((card, index) => {
        card.style.order = index;
        card.classList.remove('card-flipped');
    });
}