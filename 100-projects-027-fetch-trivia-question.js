'use strict'

document.getElementById('fetch-button').addEventListener('click', function () {
    fetch('https://opentdb.com/api.php?amount=1')
        .then(response => response.json())
        .then(data => {
            var triviaContainer = document.getElementById('trivia-container');
            triviaContainer.innerHTML = `<strong>Question:</strong> 
                                           ${data.results[0].question}<br><br>
                                            <strong>Answer:</strong>
                                            ${data.results[0].correct_answer}`;
        })
        .catch(error => console.log('Error:', error));
});