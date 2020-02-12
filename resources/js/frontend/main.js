$(document).ready(function () {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('.register_next').on('click',function(){
       $(this).css('display','none');
       $('.register_back').css('display','flex');
        $('.register_button').css('display','block');
       $('.first_register_container').css('display','none');
       $('.second_register_container').css('display','block');
       $('.register_button_container').css('justify-content','space-between');
    });

    $('.register_back').on('click',function(){
        $(this).css('display','none');
        $('.register_next').css('display','flex');
        $('.second_register_container').css('display','none');
        $('.first_register_container').css('display','block');
        $('.register_button').css('display','none');
        $('.register_button_container').css('justify-content','flex-end');
    });


    $(window).scroll(function(){
        var y = window.scrollY;
        if(y > 10){
            $(".menu").css({position: 'fixed'} );
            $(".menu").css({background: 'rgba(0, 0, 0, 0.534)'} );
            $(".mobMenu").css({position: 'fixed'} );
            $(".mobMenu").css({background: 'rgba(0, 0, 0, 0.534)'} );
            $(".rows").css({opacity: 1} );
        } else {
            $(".menu").css({position: 'absolute'});
            $(".menu").css({background: 'rgba(0, 0, 0, 0)'} );
            $(".mobMenu").css({position: 'absolute'});
            $(".mobMenu").css({background: 'rgba(0, 0, 0, 0)'} );
            $(".rows").css({opacity:0.6} );
        }

    });


    $(".hamburger").click(function () {

        if (!$('.hamburger').hasClass('is-active')) {

            $(".hamburger").addClass('is-active');
            $(".modalMenu").css({display: 'block'});
            $(".modalMenu").css('z-index', '550');
            $(".hamburger").css('z-index', '551')

        } else {
            $(".hamburger").removeClass('is-active');
            $(".modalMenu").css({display: 'none'})
        }

    });


    $('.wrapper_tabs ul li').click(function (e) {
        e.preventDefault();
        $('.itemStyle').removeClass('fadeIn');
        $('.itemStyle').addClass('fadeIn');
        $('.wrapper_tabs ul li').removeClass('active');

    });

    // <--! Main slider

    $('.sl_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,

        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    prevArrow: "<div class='arrows-container-mobile-prev'><img class='prev-arrow-mobile prev-arrow ' src='images/main/icons/arrow_left.png'></div>",
                    nextArrow: "<div class='arrows-container-mobile-next'><img class='next-arrow-mobile next-arrow ' src='images/main/icons/arrow_left.png'></div>",
                }
            }

        ]
    });

    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.sl_slider',
        dots: false,
        focusOnSelect: true,
        prevArrow: "<img class='prev-arrow' src='images/main/icons/arrow_left.png'>",
        nextArrow: "<img class='next-arrow' src='images/main/icons/arrow_left.png'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick",
            }

        ]
    });


    var cur = $('.sl_slider').slick('slickCurrentSlide')+1;
    $('.one').text(cur);
    $('.sl_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var cur = currentSlide+1;
        $('.count .one').text(cur);
    });
    $('.sl_slider .sl_item').each(function(i) {
        var items = $("div.sl_item");
        var b = ((items.length) - 1) /2;
        $('.count .two').text('/'+b);
    });


    $(".wrapper").animated("fadeIn", "fadeOut");

    setTimeout(function(){
        $('body').removeClass('bg');
    },300);

    $(document).ready(function() {
        $('.wrapper_tab_content').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: '...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                }
            }
        });
    });
});



