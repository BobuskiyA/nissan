$(document).ready(function () {
  const $sliderPrev = $(".slider-prev");
  const $currentSlide = $(".current-slide");
  
  const $totalSlides = $(".total-slides");


  // $sliderPrev.slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: true,
  //   fade: true,
  //   asNavFor: ".slider-prev",
   
  // });


  $sliderPrev.slick({
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: document.querySelector(".slick-next"),
    prevArrow: document.querySelector(".slick-prev"),
    appendDots: $(".slider-dots"),
    slidesToShow: 2,
    // centerMode: true,
    variableWidth: true,
    customPaging: function (slick, index) {
      var image = $(slick.$slides[index]).find(".slider__img").attr("src");
      return '<div class="dots-line"></div>';
    },
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

  $totalSlides.text($sliderPrev.slick("getSlick").slideCount);

  $sliderPrev.on("afterChange", function (event, slick, currentSlide) {
    $currentSlide.text(currentSlide + 1);
  });
});


$(document).ready(function () {
  $("#mobile-design-menu").on("click", function () {
    $(this).toggleClass("mobile-design-menu-active");
  });
});

$(document).ready(function () {
  $(".dropdown-item .head").click(function () {
    $(this).closest(".dropdown-item").toggleClass("dropdown-item--active");

    $(this)
      .closest(".dropdown-item")
      .siblings(".dropdown-item")
      .removeClass("dropdown-item--active");
  });

  $(".inner-head").click(function () {
    $(this).closest(".inner-dropdow").toggleClass("inner-dropdow--active");

    $(this)
      .closest(".inner-list")
      .find(".inner-dropdow")
      .not($(this).closest(".inner-dropdow"))
      .removeClass("inner-dropdow--active");
  });

  $(".menu-button").click(function () {
    $(".nav-body").toggleClass("nav-body--active");
    $(".menu-button").toggleClass("menu-button--active");
    $(".header-mobile").toggleClass("header-mobile--active");

    $("body").toggleClass("overflow-hidden");
  });
});

$(document).ready(function () {
  $("#main-dropdown .head").click(function () {
    $(this).closest("#main-dropdown").toggleClass("dropdown--active");
  });
});

$(document).ready(function() {
  $('.menu-list .menu-item #header-dropdown-head').hover(
    function () {
      $(this).closest(".menu-item").addClass('menu-item--active');
      
      // Remove active state from sibling menu items
      $(this).closest(".menu-item").siblings('.menu-item').removeClass('menu-item--active');
    },
    function() {
      var $menuItem = $(this).closest(".menu-item");
      setTimeout(function() {
        // Check if not hovering over the menu item or its submenu
        if (!$menuItem.is(':hover') && !$menuItem.find('.submenu-list').is(':hover')) {
          $menuItem.removeClass('menu-item--active');
        }
      }, 50);
    }
  );

  // Keep menu open when inside submenu or submenu-list-modeling
  $('.submenu-list, .submenu-list-modeling').hover(
    function() {
      $(this).closest('.menu-item').addClass('menu-item--active');
    },
    function() {
      var $menuItem = $(this).closest('.menu-item');
      setTimeout(function() {
        // Remove active state if not hovering over menu item or its submenus
        if (!$menuItem.is(':hover') && 
            !$menuItem.find('#header-dropdown-head').is(':hover') && 
            !$menuItem.find('.submenu-list').is(':hover') && 
            !$menuItem.find('.submenu-list-modeling').is(':hover')) {
          $menuItem.removeClass('menu-item--active');
        }
      }, 50);
    }
  );

  // Existing submenu-item hover logic remains the same
  $('.submenu-item:has(.submenu-list-modeling)').hover(
    function() {
      $(this).addClass('submenu-item--active');
    },
    function() {
      var $this = $(this);
      setTimeout(function() {
        if (!$this.is(':hover') && !$this.find('.submenu-list-modeling').is(':hover')) {
          $this.removeClass('submenu-item--active');
        }
      }, 50);
    }
  );

  $('.submenu-list-modeling').hover(
    function() {
      $(this).closest('.submenu-item').addClass('submenu-item--active');
    },
    function() {
      var $parentSubmenuItem = $(this).closest('.submenu-item');
      setTimeout(function() {
        if (!$parentSubmenuItem.is(':hover') && !$parentSubmenuItem.find('.submenu-list-modeling').is(':hover')) {
          $parentSubmenuItem.removeClass('submenu-item--active');
        }
      }, 50);
    }
  );
});

$(document).ready(function() {
  // Toggle the dropdown when clicking on the head
  $('#form-dropdown .head').click(function() {
    $(this).closest('.dropdown-choose').toggleClass('dropdown-choose--active');
  });

  // Change the text in the head and update the body items when clicking on an item
  $('#form-dropdown .item').click(function() {
    var newSelectedText = $(this).text();
    var oldSelectedText = $('#form-dropdown .head p').text();

    // Update the head text
    $('#form-dropdown .head p').text(newSelectedText);

    // Update the body items
    $('#form-dropdown .item').each(function() {
      if ($(this).text() === newSelectedText) {
        $(this).text(oldSelectedText);
      } else if ($(this).text() === oldSelectedText) {
        $(this).text(newSelectedText);
      }
    });

    // Close the dropdown
    $('#form-dropdown').removeClass('dropdown-choose--active');
  });
});

