'use strict'

document.getElementById('fetch-button').addEventListener('click', function() {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
        .then(data => {
            let imageContainer = document.getElementById('image-container');
            let img =document.createElement('img');
            img.src = data[0].url;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        })
        .catch(error => console.error('Error:', error));
})