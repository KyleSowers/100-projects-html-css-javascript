'use strict'

function flipCard(card) {
    card.classList.toggle('card-flipped');
}

function shuffleCards() {
    const flashcards = document.querySelectorAll('.flashcard-grid .card');
    const shuffledCards = Array.from(flashcards).sort(() => Math.random() - 0.5);
    shuffledCards.forEach((card, index) => {
        card.style.order = index;
        card.classList.remove('card-flipped');
    });

}
function resetCards() {
    const flashcards = document.querySelectorAll('.flashcard-grid .card');
    flashcards.forEach(card => {
        card.classList.remove('card-flipped');
    });
}
