$(document).ready(function () {
    $('.hero-carousel').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        appendDots: $('.dots-container'),
        dotsClass: 'hero-dots',
        customPaging: function (slider, i) {
            return '<a href="#" data-slick-index="' + i + '></a>';
        },
        prevArrow: "<div class='a-left control-c prev slick-prev hidden-tn' ></div>",
        nextArrow: "<div class='a-right control-c next slick-next hidden-tn' ></div>"
    });

    // On before slide change
    $('.hero-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);
        switch (nextSlide) {
            case 0:
            case 1:
                changeHeroText('iTotem', 'Visible benefits, measurable progress');
                break;
            case 2:
            case 3:
                changeHeroText('Our Mission', 'To serve Indigenous and Local suppliers and empower their full participation in Canada’s economy by simplifying project compliance and showcasing their contributions');
                break;
            case 4:
            case 5:
                changeHeroText('Visible Benefits', 'We make economic benefits visible at the project site, on the shop floor and in the community');
                break;
            case 6:
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
        prevArrow: "<div class='a-left control-c prev slick-prev client-arrow prev' ></div>",
        nextArrow: "<div class='a-right control-c next slick-next client-arrow next' ></div>"
    });

    $('.subpage-hero-carousel').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        appendDots: $('.dots-container'),
        dotsClass: 'hero-dots',
        customPaging: function (slider, i) {
            return '<a href="#" data-slick-index="' + i + '></a>';
        },
        prevArrow: "<div class='a-left control-c prev slick-prev hidden-tn' ></div>",
        nextArrow: "<div class='a-right control-c next slick-next hidden-tn' ></div>"
    });

});

function changeHeroText(title, description) {

    // console.log('current title: ' + $(".hero-title").text());
    // console.log('new title: ' + title);

    if ($(".hero-title").text() != title) {
        // console.log('different words, changing title');

        $(".hero-title").animate({
            opacity: 0, // animate slideUp
            marginLeft: '-100px'
        }, 'fast', 'swing', function () {
            $(this).text(title).css({ marginLeft: '100px' }).animate({
                opacity: 1, // animate slideUp
                marginLeft: '0px'
            }, 'fast', 'swing');
        });

    }
    // else console.log('same words, not changing title');

    if ($(".hero-description").text() != description) {
        // console.log('different words, changing description');

        $(".hero-description").fadeOut('fast', function () {
            $(this).text(description).fadeIn('fast');
        });

    }
    // else console.log('same words, not changing desciption');


}