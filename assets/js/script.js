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
  const splide = new Splide(".splide", {
    perPage: 3,
    perMove: 1,
    start: 1,
    focus: "center",
    trimSpace: false,
    arrows: false,
    classes: {
      pagination: 'slider-pagination',
      page: 'slider-page'
    },
    responsive: [
      {
        breakpoint: 764,
        settings: {
          perPage: 1,
          variableWidth: true,
        },
      },
    ],
  });

  splide.mount();

  // Custom navigation arrows
  $(".slick-prev").on("click", () => splide.go("<"));
  $(".slick-next").on("click", () => splide.go(">"));

  // Custom pagination
  const totalSlides = splide.Components.Slides.getLength();
  const paginationContainer = $(".slider-dots");

  for (let i = 0; i < totalSlides; i++) {
    // Create and append a dot
    const dot = $(`<button class="dots-line" data-index="${i}"></button>`);
    paginationContainer.append(dot);
  }

  // Add click event for custom dots
  $(".dots-line").on("click", function () {
    const index = $(this).data("index");
    splide.go(index);
  });

  // Update active dot on slide move
  splide.on("move", (newIndex) => {
    $(".dots-line").removeClass("active");
    $(`.slider-dot[data-index="${newIndex}"]`).addClass("active");
  });

  // Set the first dot as active
  $(".dots-line").first().addClass("active");
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
