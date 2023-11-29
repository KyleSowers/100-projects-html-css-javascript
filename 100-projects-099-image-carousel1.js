'use strict'

let currentIndex = 0;
let carouselImages = Array.from(document.getElementsByClassName('carousel-image'));
let numSlides = carouselImages.length;
let intervalid;

//Auto rotate images every 3 seconds
intervalid = setInterval(() => {
    changeSlide(1);
}, 3000);

function changeSlides(n) {
    if ((currentIndex === numSlides - 1 && n === 1) || (currentIndex === 0 && n === -1)) {
        //do not move past the last or first slide
        clearInterval(intervalid); //stop auto-rotate when the last image is reached
        return;
    }
    currentIndex += n;
    showSlide();
}

function showSlide() {
    carouselImages.forEach((image, i) => {
        image.classList.remove("active");
        if (i === currentIndex) {
            image.classList.add("active");
        }
    });
}
