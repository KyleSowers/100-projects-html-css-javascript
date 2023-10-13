'use strict'

let images = Array.from(document.querySelectorAll('.carousel img'));
    let currentImageIndex = 0;

    function changeImage(direction) {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    }