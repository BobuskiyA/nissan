$(document).ready(function () {
  const $sliderList = $(".slider-list");
  const $sliderPrev = $(".slider-prev");
  const $currentSlide = $(".current-slide");
  const $totalSlides = $(".total-slides");

  $sliderList.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    appendDots: $(".slider-dots"),
    asNavFor: ".slider-prev",
    customPaging: function (slick, index) {
      var image = $(slick.$slides[index]).find(".slider__img").attr("src");
      return '<div class="dots-line"></div>';
    },
  });

  $sliderPrev.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-list",
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: document.querySelector(".slick-next"),
    prevArrow: document.querySelector(".slick-prev"),
    responsive: [
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  });

  $totalSlides.text($sliderList.slick("getSlick").slideCount);

  $sliderList.on("afterChange", function (event, slick, currentSlide) {
    $currentSlide.text(currentSlide + 1);
  });
});

$(document).ready(function () {
  $("#mobile-design-menu").on("click", function () {
    $(this).toggleClass("mobile-design-menu-active");
  });

  $(".menu-item").hover(
    function () {
      $(this)
        .find(".submenu-list")
        .stop(true, true)
        .fadeIn(300)
        .addClass("active");
    },
    function () {
      $(this)
        .find(".submenu-list")
        .stop(true, true)
        .fadeOut(300)
        .removeClass("active");
    }
  );
});

$(document).ready(function() {
  // Toggle main dropdown items
  $('.dropdown-item .head').click(function() {
    // Toggle active class on parent dropdown-item
    $(this).closest('.dropdown-item').toggleClass('dropdown-item--active');
    
    // Close other dropdown items
    $(this).closest('.dropdown-item').siblings('.dropdown-item').removeClass('dropdown-item--active');
  });

  // Toggle inner dropdown
  $('.inner-head').click(function() {
    // Toggle active class on parent inner-dropdown
    $(this).closest('.inner-dropdow').toggleClass('inner-dropdow--active');
    
    // Close other inner dropdowns in the same list
    $(this).closest('.inner-list').find('.inner-dropdow').not($(this).closest('.inner-dropdow')).removeClass('inner-dropdow--active');
  });

  // Toggle mobile menu
  $('.menu-button').click(function() {
    // Toggle nav-body active class
    $('.nav-body').toggleClass('nav-body--active');
    $('.menu-button').toggleClass('menu-button--active');
    $('.header-mobile').toggleClass('header-mobile--active');
    
    // Toggle body overflow
    $('body').toggleClass('overflow-hidden');
  });
});

$(document).ready(function() {
  $('.prices .cards-wrapper #prices-dropdown .head').click(function() {
    $(this).closest('#prices-dropdown').toggleClass('dropdown--active');
  });
});