'use strict'

let currentIndex = 0;
let carouselImages = Array.from(document.getElementsByClassName('carousel-image'));
let numSlides = carouselImages.length;
let intervalid;

