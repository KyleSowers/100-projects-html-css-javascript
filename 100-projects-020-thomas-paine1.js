'use strict'

//This array holds the quotes that will be randomly displayed

let quotes = [
    'These are the times that try men\'s souls.',
    'The harder the conflict, the more glorious the triumph.',
    'What we obtain too cheap, we esteem too lightly: it is dearness only that gives every thing its value',
    'The mind once enlightened cannot again become dark',
    'The world is my country, all mankind are my brethren, and to do good is my religion',
    'Reason obeys itself; and ignorance submits to whatever is dedicated to it.',
    'He that would make his own liberty secure, must guard even his enemy from oppression; for if he violates this duty, he establishes a precedent that will reach to himself',
    'It is necessary to the happiness of man that he be mentally faithful to himself.',
    'When we are planning for posterity, we ought to remember that virtue is not hereditary.',
    'Those who expect to reap the blessings of freedom, must, like men, undergo the fatigue of supporting it',
    'A long habit of not thinking a thing wrong, gives it a superficial appearance of being right',
    'Tyranny, like hell, is not easily conquered; yet we have this consolation with us, that the harder the conflict, the more glorious the triumph.',
    'Character is much easier kept that recovered.',
    'He who dares not offend cannot be honest.',
    'Government, even in its best state, is but a necessary evil; in its worse state, an intolerable one.',
    'My country is the world, and my religion is to do good.',
    'The real man smiles in trouble, gathers strength from distress, and grows brave by reflection.',
    'Every science has for its basis a system of principles as fixed and governed.',
    'It is the duty of every patriot to protect his country from its governement.',
    'Independence is my happiness, and I view things as they are, without regard to place or person; my country is the world, and my religion is to do good.',
]

//This function selects a random quote from the array

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

//This function updates the text of the #quote paragraph with a new random quote

function displayNewQuote() {
    let quote = getRandomQuote();
    document.getElementById('quote').textContent = quote;
}

//event listener calls the displayNewQuote when clicked

document.getElementById('new-quote-button').addEventListener('click', displayNewQuote);

//Load quote on page load
window.onload = displayNewQuote;

