'use strict'

const generateUsername = () => {
    const adjectives = ['Adept', 'Brave', 'Cautious', 'Daring', 'Efficient', 'Fearless', 'Gracious', 'Humble', 'Imaginative', 'Joyful', 'Keen', 'Loyal', 'Meticuluos', 'Noble', 'Optimistic', 'Patient', 'Quick', 'Reliable', 'Sincere', 'Trustworthy'];
    const  nouns = ['Liam', 'noah', 'Oliver', 'James', 'Elijah', 'Henry', 'William', 'Lucas', 'Benjamin', 'Theodore', 'Olivia', 'Emma', 'Amelia', 'Charlotte', "Ava", 'Sophia', 'Luca', 'Waylon',  'Kai', 'HUdson'];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adjective}  ${noun}`;
}

document.getElementById('generate-button').addEventListener('click', () => {
    document.getElementById('username-display').textContent = generateUsername();
})