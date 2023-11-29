'use strict'

$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        pause: false,
    });

    $('.carousel-control-prev, .carousel-control-next').click(function () {
        $('#carouselExampleIndicators').carousel('pause');
        setTimeout(function () {
            $('#carouselExampleIndicators').carousel('cycle');
        }, 5000);
    });
});

