'use strict'
document.getElementById('fetch-button').addEventListener('click', function () {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
        .then(data => {
            var jokeContainer =document.getElementById('joke-container');
            jokeContainer.textContent = data.setup + ' ' + data.punchline;
        })
        .catch(error => console.error('Error:', error));
})