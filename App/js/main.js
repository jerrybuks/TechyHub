$(document).ready(function () {
    // Custom JS & jQuery here
    $('.sidenav').sidenav();
    $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 7000
    });

    $('.slider-testimonial').slider({
        indicators: true,
        height: '100%'
    });

    $('.parallax').parallax();

    $('#tabs-swipe-demo').tabs({
        //responsiveThreshold: 1920
    });

    $('.materialboxed').materialbox();

});