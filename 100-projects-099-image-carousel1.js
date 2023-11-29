'use strict'

let currentIndex = 0;
let carouselImages = Array.from(document.getElementsByClassName('carousel-image'));
let numSlides = carouselImages.length;
let intervalid;

//Auto rotate images every 3 seconds
intervalid = setInterval(() => {
    changeSlide(1);
}, 3000);