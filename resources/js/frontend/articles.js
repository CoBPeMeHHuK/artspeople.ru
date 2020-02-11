$(document).ready(function () {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    //  счетчик


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

        var info = e.currentTarget

        if ($(info).hasClass('allTab')) {
            $(info).addClass('active')
            $('.all').css('display', 'none')
            $('.all').css('display', 'block')

        } else if ($(info).hasClass('cinemaTab')) {
            $(info).addClass('active')
            $('.cinemaall').css('display', 'none')
            $('.all').css('display', 'none')
            $('.cinemaall').css('display', 'block')

        } else if ($(info).hasClass('tattooTab')) {
            $(info).addClass('active')
            $('.tattoo').css('display', 'none')
            $('.all').css('display', 'none')
            $('.tattoo').css('display', 'block')

        } else if ($(info).hasClass('photographyTab')) {
            $(info).addClass('active')
            $('.photography').css('display', 'none')
            $('.all').css('display', 'none')
            $('.photography').css('display', 'block')

        } else if ($(info).hasClass('musicTab')) {
            $(info).addClass('active')
            $('.music').css('display', 'none')
            $('.all').css('display', 'none')
            $('.music').css('display', 'block')

        }
    });

        $('.wrapper_tab_content').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: '...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    // return '<p class="author_work">Автор: '+item.el.attr('title_img') + '</p>' +
                    //     '<p class="category_work">Стиль: '+item.el.attr('title_category') +'</p>'+
                    // '<p class="date_work">Дата: '+item.el.attr('title_date') +'</p>';
                }
            }
        });
});



