'use strict'

function generateStory() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var adverb = document.getElementById('adverb').value;

    var story = `Once upon a time, there was a very ${adjective} ${noun}. The ${noun} was always ${verb} ${adverb} in the forest.`;

    document.getElementById('story').innerHTML = story;

    document.getElementById('madlib-story').style.display = 'block';
}