'use strict'

const adjectives = ['Awesome', 'Shiny', 'Fast', 'Clever', 'Brave'];
const nouns = ['Unicorn', 'Turtle', 'Rocket', 'Knight', 'Coder'];

function getRandomElement(array) {
    const randomIndex =Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateUsername() {
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun = getRandomElement(nouns);
    return randomAdjective + randomNoun;
}

document.getElementById('generate-button').addEventListener('click', function() {
    const username = generateUsername();
    document.getElementById('username-display').textContent = username;
})
