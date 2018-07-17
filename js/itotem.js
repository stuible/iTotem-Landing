$(document).ready(function(){
    $('.hero-carousel').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:"<div class='a-left control-c prev slick-prev' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next' ></div>"
    });
  });