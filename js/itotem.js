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

    // On before slide change
    $('.hero-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        switch (nextSlide) {
            case 0:
                changeHeroText('iTotem', 'Visible benefits, measurable progress');
                break;
            case 1:
            case 2:
                changeHeroText('Our Mission', 'To serve Indigenous and Local suppliers and empower their full participation in Canada’s economy by simplifying project compliance and showcasing their contributions');
                break;
            case 3:
                changeHeroText('Visible Benefits', 'We make economic benefits visible at the project site, on the shop floor and in the community');
                break;
            case 4:
                changeHeroText('Compliance & Trust', 'We seamlessly integrate supplier development, compliance reporting and story-telling to build project certainty and win public trust');
                break;
        
            default:
                changeHeroText('', '');
                break;
        }
    });

    $('.landing-clients').slick({
        variableWidth: true,
        slidesToShow: 5,
        swipeToSlide: true,
        prevArrow:"<div class='a-left control-c prev slick-prev client-arrow prev' ></div>",
        nextArrow:"<div class='a-right control-c next slick-next client-arrow next' ></div>"
    });

    $('.subpage-hero-carousel').slick({
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
    
  });

  function changeHeroText(title, description){


    // $.when($('.hero-content').fadeTo(300, 0))
    // .done(function() {
    //     $('.hero-title').text(title);
    //     $('.hero-description').text(description);
    //     $('.hero-content').fadeTo(300, 1);
    // });


    //   $('.hero-content').fadeOut(300);

    //   })
        // $('.hero-title').text(title);
        // $('.hero-description').text(description);
        // $(this).fadeIn(300);

// $('.hero-content').fadeTo(300, 0, function() {

    $('.hero-title').text(title);
    $('.hero-description').text(description);
    // $('.hero-content').delay( 300 ).fadeTo(300, 1);

// });

// $('.hero-content').fadeTo(300, 0).promise().done(function() {
//     alert('done');
//     // $('.hero-content').fadeTo(300, 1);
// });

  }