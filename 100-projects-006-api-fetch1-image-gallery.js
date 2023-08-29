"use strict"

for (let i = 0; i < 100; i++) {
    let img = document.createElement('div');
    img.className = "image";
    img.style.backgroundImage = 'url(https://placekitten.com/' + (200 + i % 10) + '/' + (200 + i % 10) + ')';
    document.body.appendChild(img);
}