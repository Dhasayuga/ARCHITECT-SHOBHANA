/* navbar
================================================== */

jQuery(document).ready(function($) {

    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('.navbar_fix').addClass('navbar-fixed-top');
          	$("navbar_fix").css("top", "150px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("navbar_fix").css("top", "0px");
        }
    });
});



/* Slider
================================================== */

var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopedSlides: 1,
    autoplay:false,
 autoplaySpeed:4000,

});


var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 1,
    centeredSlides: true,
    autoplay:true,
 autoplaySpeed:8000,
 speed: 2000,
    loop: false,
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


slider.controller.control = thumbs;
thumbs.controller.control = slider;
