'use strict'

function shortenUrl() {
    const urlInput = document.getElementById('url-input').value;

    fetch('https://api.rebrandly.com/v1/links', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YOURAPIKEYHERE',},
        body: JSON.stringify({ destination: urlInput})
        })
        .then(response => response.json())
        .then(data => {document.getElementById('result').innerHTML = ` <a href="https://${data.shortUrl}</a>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}