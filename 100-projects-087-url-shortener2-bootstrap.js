'use strict'

$(document).ready(function () {
    $('shorten-btn').click(function () {
        shortenUrl();
    });
});

function shortenUrl() {
    const urlInput = $('#url-input').val();
    fetch('https://api.rebrandly.com/v1/links', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
            'apikey': 'YOURAPIKEYHERE',
        },
        body: JSON.stringify({
            destination: urlInput
        })
    })
        .then(response => response.json())
        .then(data => {
            if(data.shortUrl) {
                $('result').html(`
                <div class="alert alert-success">
                Shortened URL: <a href="https://${data.shortUrl}" target="_blank">${data.shortUrl}</a>
                <button class="btn btn-primary ml-2" onclick="copyToClipboard('${data.shortURL}')">Copy to Clipboard</button>
                </div>
                `);
            } else {
                $('#result').html(`
                <div class="alert alert-danger">
                Failed to shorten the URL. PLease try again.
                </div>
                `);
             }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function copytoClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    $('#result').append('<div class="alert alert alert=success mt-2">URL copied to clipboard!</div>');
    setTimeout(() => {
        $('.alert-success').remove();
    }, 2000);
}

