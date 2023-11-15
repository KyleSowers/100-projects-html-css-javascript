'use strict'

let petHunger = 0;
let petBoredom = 0

//The status of the pet dog can be observed in the console window. This method is inconvenient and needs to be improved.
function  feedPet() {
    petHunger -= 10;
    if (petHunger < 0) petHunger = 0;
    console.log(`Pet hunger: ${petHunger}`);
}

function playWithPet() {
    petBoredom -= 10;
    if(petBoredom < 0) petBoredom = 0;
    console.log(`Pet boredom: ${petBoredom}`);
}

setInterval(() => {
    petHunger += 1;
    petBoredom += 1;
    if (petHunger > 50 || petBoredom > 50) {
        console.log('Your pet is unhappy. Please feed or play with your pet.');
    }
}, 1000);