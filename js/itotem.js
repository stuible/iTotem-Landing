$(document).ready(function(){
    $('.hero-carousel').slick({
        slidesToShow: 1,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        dotsClass: 'hero-dots',
        customPaging : function(slider, i) {
            return '<a href="#" data-slick-index="' + i + '></a>';
        },
        prevArrow:"<div class='a-left control-c prev slick-prev' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next' ></div>"
    });

    $('.landing-clients').slick({
        slidesToShow: 5,
        prevArrow:"<div class='a-left control-c prev slick-prev client-arrow prev' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next client-arrow next' ></div>"
    });
    
  });