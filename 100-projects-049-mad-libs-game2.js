'use strict'

var stories = [
        "A lazy {{noun}} named Whiskers lived in a small village. He loved {{verb}} the world go by from his {{adjective}} cushion. " +
    "One day, he saw a {{noun}} scurrying across the floor. {{adverb}}, Whiskers chased the {{noun}}, enjoying a thrilling game of chase. To his surprise, Whiskers discovered he loved  the excitement. From that day, he decided to be a {{adjective}} {{noun}}.",

    "In a bustling city, a lonely {{noun}} named Percy lived atop a tall building. Percy watched children {{verb}} in the park, wishing he had a friend. One day, he gathered courage and {{verb}} down, introducing himself to a little {{noun}}. She named him 'buddy', and they became {{adjective}} friends, sharing sandwiches and giggles {{adverb}}.",

    "{{noun}}, a curious {{noun}}, lived in a small tank. She often wondered about life beyond her glass walls. One day, her owner left the lid open. {{adverb}}, {{noun}} jumped out, landing in a bigger tank. She was scared but {{adverb}}. She realized a bigger world waited for her, full of {{adjective}} wonders",

    "Benny, a brave {{noun}}, lived in a  peaceful countryside farm. He spent his days {{verb}} sheep and guarding the {{noun}}. One chilly night, he heard a whimpering sound from the woods. Benny found a lost {{noun}}, shivering and scared. He guided the {{noun}} home, and they became {{adjective}}. Benny realized he was not just a guard {{noun}}, but a {{adjective}} protector.",

    "Oliver, an owl, loved the tranquility of night. He adored the twinkling stars and the rustling leaves. However, he felt alone, as everyone else slept. One night, he met Luna, a {{noun}}. She also loved the night and its {{adjective}} beauty. Together, they {{verb}} the night, sharing stories. Oliver finally found his companion {{adverb}} under the {{adjective}} starlight."
    ];

function generateStory() {

    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var adverb = document.getElementById('adverb').value;

    //Choose a random story
    var storyTemplate = stories[Math.floor(Math.random() * stories.length)];

    //Replace place holders
    var story = storyTemplate.replace(/{{noun}}/g, `<span class='noun'>${noun}</span>`).replace(/{{verb}}/g, `<span class='verb'>${verb}</span>`).replace(/{{adjective}}/g, `<span class='adjective'>${adjective}</span>`).replace(/{{adverb}}/g, `<span class='adverb'>${adverb}</span>`);

    document.getElementById('story').innerHTML = story;

    document.getElementById('madlib-story').style.display = 'block';
}


