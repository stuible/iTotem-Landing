$(document).ready(function(){
    $('.hero-carousel').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        appendDots: $('.dots-container'),
        dotsClass: 'hero-dots',
        customPaging : function(slider, i) {
            return '<a href="#" data-slick-index="' + i + '></a>';
        },
        prevArrow:"<div class='a-left control-c prev slick-prev hidden-tn' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next hidden-tn' ></div>"
    });

    $('.landing-clients').slick({
        variableWidth: true,
        slidesToShow: 5,
        swipeToSlide: true,
        prevArrow:"<div class='a-left control-c prev slick-prev client-arrow prev' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next client-arrow next' ></div>"
    });
    
  });