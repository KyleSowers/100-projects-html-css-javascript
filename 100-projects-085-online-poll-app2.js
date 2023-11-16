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
    resultsDiv.innerHTML = '';
    for (let option in pollResults) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = (pollResults[option] * 4) + '%';
        bar.textContent = `${option}: ${pollResults[option]}`;
        resultsDiv.appendChild(bar);
    }
}