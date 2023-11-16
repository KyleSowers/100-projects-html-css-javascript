'use strict'

let pollResults = {
    Dog: 0,
    Cat: 0
};

function vote(option) {
    pollResults[option]++;
    displayResults();
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";
    for (let option in pollResults) {
        resultsDiv.innerHTML += ` <p>${option}: ${pollResults[option]}</p>`;
    }
}