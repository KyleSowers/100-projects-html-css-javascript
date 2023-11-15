'use strict'

let petHunger = 0;
let petBoredom = 0;
const statusDiv = document.getElementById('status');
const petDiv = document.getElementById('pet');

function feedPet() {
    petHunger -= 10;
    if (petHunger < 0) petHunger = 0;
    updateStatus();
}

function playWithPet() {
    petBoredom -= 10;
    if (petBoredom < 0) petBoredom = 0;
    updateStatus();
}

function updateStatus() {
    statusDiv.textContent = `Pet hunger: ${petHunger}, Pet boredom: ${petBoredom}`;
    if (petHunger > 10) {
        petDiv.textContent = "🐶💭🍖🥩"; //Hungry dod
    } else if (petBoredom > 20) {
        petDiv.textContent = "🐶💭⚽️🏃⚾️"; //bored dog
    } else {
        petDiv.textContent = "🐶"; //Happy dog
    }
}

setInterval(() => {
    petHunger += 1;
    petBoredom += 1;
    updateStatus();
}, 1000);