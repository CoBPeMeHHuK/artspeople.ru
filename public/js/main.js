/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/frontend/main.js":
/*!***************************************!*\
  !*** ./resources/js/frontend/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }); //  счетчик

  $('.register_next').on('click', function () {
    $(this).css('display', 'none');
    $('.register_back').css('display', 'flex');
    $('.register_button').css('display', 'block');
    $('.first_register_container').css('display', 'none');
    $('.second_register_container').css('display', 'block');
    $('.register_button_container').css('justify-content', 'space-between');
  });
  $('.register_back').on('click', function () {
    $(this).css('display', 'none');
    $('.register_next').css('display', 'flex');
    $('.second_register_container').css('display', 'none');
    $('.first_register_container').css('display', 'block');
    $('.register_button').css('display', 'none');
    $('.register_button_container').css('justify-content', 'flex-end');
  });
  width = $(window).width();

  if (width <= 991) {
    $(".tattoo_text").animated("fadeIn", "fadeOut");
    $(".photography_text").animated("fadeIn", "fadeOut");
    $(".musick_text").animated("fadeIn", "fadeOut");
  } else {
    $(".musick_text").animated("fadeInUp", "fadeOut");
  }

  function checkOffset(elem) {
    var offset = $(elem).offset().top,
        height = $(elem).height(),
        position = offset - height;
    return position;
  } // ещё скролл нужен


  $(window).scroll(function (event) {
    var scrollY = $(this).scrollTop();

    if (scrollY > checkOffset($('.photography_section'))) {
      $('.photography_slide').css('transform', 'translateX(0)');
      $('.photography_text').removeClass('fadeOut');
      $('.photography_text').addClass('fadeInUp');
    }

    if (scrollY > checkOffset($('.tattoo_section'))) {
      $('.tattoo_slide').css('transform', 'translateX(0)');
      $('.tattoo_text').removeClass('fadeOut');
      $('.tattoo_text').addClass('fadeInUp');
    }
  });
  width = $(window).width();

  if (width >= 991) {
    $(window).scroll(function () {
      var s = $(window).scrollTop();

      if (s == 0) {
        $(".photography_slide").css('transform', 'translateX(-50%)');
        $(".tattoo_slide").css('transform', 'translateX(50%)');
        $(".tattoo_text").addClass('fadeOut');
        $(".musick_text").addClass('fadeOut');
        $(".photography_text").addClass('fadeOut');
      }
    });
  } // $("section").animated("fadeInLeft", "fadeOut");


  $(window).scroll(function () {
    var y = window.scrollY;

    if (y > 10) {
      $(".menu").css({
        position: 'fixed'
      });
      $(".menu").css({
        background: 'rgba(0, 0, 0, 0.534)'
      });
      $(".mobMenu").css({
        position: 'fixed'
      });
      $(".mobMenu").css({
        background: 'rgba(0, 0, 0, 0.534)'
      });
      $(".rows").css({
        opacity: 1
      });
    } else {
      $(".menu").css({
        position: 'absolute'
      });
      $(".menu").css({
        background: 'rgba(0, 0, 0, 0)'
      });
      $(".mobMenu").css({
        position: 'absolute'
      });
      $(".mobMenu").css({
        background: 'rgba(0, 0, 0, 0)'
      });
      $(".rows").css({
        opacity: 0.6
      });
    }
  });
  $(".hamburger").click(function () {
    if (!$('.hamburger').hasClass('is-active')) {
      $(".hamburger").addClass('is-active');
      $(".modalMenu").css({
        display: 'block'
      });
      $(".modalMenu").css('z-index', '550');
      $(".hamburger").css('z-index', '551');
    } else {
      $(".hamburger").removeClass('is-active');
      $(".modalMenu").css({
        display: 'none'
      });
    }
  });
  $('.wrapper_tabs ul li').click(function (e) {
    e.preventDefault();
    $('.itemStyle').removeClass('fadeIn');
    $('.itemStyle').addClass('fadeIn');
    $('.wrapper_tabs ul li').removeClass('active');
    var info = e.currentTarget;

    if ($(info).hasClass('allTab')) {
      $(info).addClass('active');
      $('.all').css('display', 'none');
      $('.all').css('display', 'block');
    } else if ($(info).hasClass('cinemaTab')) {
      $(info).addClass('active');
      $('.cinemaall').css('display', 'none');
      $('.all').css('display', 'none');
      $('.cinemaall').css('display', 'block');
    } else if ($(info).hasClass('tattooTab')) {
      $(info).addClass('active');
      $('.tattoo').css('display', 'none');
      $('.all').css('display', 'none');
      $('.tattoo').css('display', 'block');
    } else if ($(info).hasClass('photographyTab')) {
      $(info).addClass('active');
      $('.photography').css('display', 'none');
      $('.all').css('display', 'none');
      $('.photography').css('display', 'block');
    } else if ($(info).hasClass('musicTab')) {
      $(info).addClass('active');
      $('.music').css('display', 'none');
      $('.all').css('display', 'none');
      $('.music').css('display', 'block');
    }
  }); // <--! Main slider

  $('.sl_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    asNavFor: '.slider-nav',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: true,
        prevArrow: "<div class='arrows-container-mobile-prev'><img class='prev-arrow-mobile prev-arrow ' src='images/main/icons/arrow_left.png'></div>",
        nextArrow: "<div class='arrows-container-mobile-next'><img class='next-arrow-mobile next-arrow ' src='images/main/icons/arrow_left.png'></div>"
      }
    }]
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
    responsive: [{
      breakpoint: 1024,
      settings: "unslick"
    }]
  });
  var cur = $('.sl_slider').slick('slickCurrentSlide') + 1;
  $('.one').text(cur);
  $('.sl_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var cur = currentSlide + 1;
    $('.count .one').text(cur);
  });
  $('.sl_slider .sl_item').each(function (i) {
    var items = $("div.sl_item");
    var b = (items.length - 1) / 2;
    $('.count .two').text('/' + b);
  }); // Main slider !-->
  // <--! Photography slider

  $('.sl_photography_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<div class='mobile_container_slider-prev'><i class='prev-arrow fa fa-angle-left'></i></div>",
    nextArrow: "<div class='mobile_container_slider-next'><i class='next-arrow fa fa-angle-right'></i></div>",
    fade: true,
    asNavFor: '.photography_slide',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true
      }
    }]
  });
  $('.photography_slide').slick({
    slidesToShow: 4,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.sl_photography_for',
    responsive: [{
      breakpoint: 2600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1560,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
  }); // Photography slider !-->
  // <--! Cinema slider

  $('.sl_tattoo_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: "<div class='mobile_container_slider-prev'><i class='prev-arrow fa fa-angle-left '></i></div>",
    nextArrow: "<div class='mobile_container_slider-next'><i class='next-arrow fa fa-angle-right'></i></div>",
    asNavFor: '.tattoo_slide',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true
      }
    }]
  });
  $('.tattoo_slide').slick({
    dots: false,
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.sl_tattoo_for',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 2600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1560,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
  }); // Cinema slider !-->
  // <--! Music slider

  $('.sl_musick_for').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    fade: true,
    focusOnSelect: true,
    prevArrow: "<i class='prev-arrow fa fa-angle-left'></i>",
    nextArrow: "<i class='next-arrow fa fa-angle-right'></i>",
    asNavFor: '.musick_slider',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true
      }
    }]
  });
  $('.musick_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.sl_musick_for',
    responsive: [{
      breakpoint: 1560,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
  }); // Music slider !-->
  // $(".photo_slide").animated("fadeInLeft", "fadeOut");
  // $(".cinema_slide").animated("fadeInRight", "fadeOut");
  // $(".musick_slider").animated("fadeIn", "fadeOut");

  $(".wrapper").animated("fadeIn", "fadeOut");
  $(".photography_slide").hover(function () {
    $(".photography_slide").css('transform', 'translateX(0)');
  });
  $(".tattoo_slide").hover(function () {
    $(".tattoo_slide").css('transform', 'translateX(0)'); // $(".cinema_text").removeClass('fadeOut');
    // $(".cinema_text").addClass('fadeInUp');
  });
  setTimeout(function () {
    $('body').removeClass('bg');
  }, 300);
  $('.after_mobile_photography').on('click', function () {
    $('.desktop_photography').css('display', 'block');
    $('.mobile_photography').css('display', 'none');
    $('.after_mobile_photography').css('display', 'none');
    $('.after_mobile_photography-up').css('display', 'block');
  });
  $('.after_mobile_tattoo').on('click', function () {
    $('.desktop_tattoo').css('display', 'block');
    $('.mobile_tattoo').css('display', 'none');
    $('.after_mobile_tattoo').css('display', 'none');
    $('.after_mobile_tattoo-up').css('display', 'block');
  });
  $('.after_mobile_photography-up').on('click', function () {
    $('.desktop_photography').css('display', 'none');
    $('.mobile_photography').css('display', 'block');
    $('.after_mobile_photography').css('display', 'block');
    $('.after_mobile_photography-up').css('display', 'none');
  });
  $('.after_mobile_tattoo-up').on('click', function () {
    $('.desktop_tattoo').css('display', 'none');
    $('.mobile_tattoo').css('display', 'block');
    $('.after_mobile_tattoo').css('display', 'block');
    $('.after_mobile_tattoo-up').css('display', 'none');
  });
  $(document).ready(function () {
    $('.wrapper_tab_content').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: '...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function titleSrc(item) {// return '<p class="author_work">Автор: '+item.el.attr('title_img') + '</p>' +
          //     '<p class="category_work">Стиль: '+item.el.attr('title_category') +'</p>'+
          // '<p class="date_work">Дата: '+item.el.attr('title_date') +'</p>';
        }
      }
    });
  });
});

/***/ }),

/***/ 6:
/*!*********************************************!*\
  !*** multi ./resources/js/frontend/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/artspeople/resources/js/frontend/main.js */"./resources/js/frontend/main.js");


/***/ })

/******/ });