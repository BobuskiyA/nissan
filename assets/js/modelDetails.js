$(document).ready(function() {
  var $menuArea = $('#menu-area');
  var $mobileMenu = $('.menu.menu--mobile.mobile-only');
  var lastScrollTop = $(window).scrollTop();

  $(window).on('scroll', function() {
      var currentScrollTop = $(window).scrollTop();
      var menuAreaRect = $menuArea[0].getBoundingClientRect();

      if (currentScrollTop < lastScrollTop && 
          menuAreaRect.top <= 0 && 
          menuAreaRect.bottom >= 0) {
          $mobileMenu.addClass('menu--mobile--active');
      } else {
          $mobileMenu.removeClass('menu--mobile--active');
      }

      lastScrollTop = currentScrollTop;
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
          start: 0,
          variableWidth: true,
        },
      },
    ],
  });

  splide.mount();

  $(".slick-prev").on("click", () => splide.go("<"));
  $(".slick-next").on("click", () => splide.go(">"));

  const totalSlides = splide.Components.Slides.getLength();
  const paginationContainer = $(".slider-dots");

  for (let i = 0; i < totalSlides; i++) {
    const dot = $(`<button class="dots-line" data-index="${i}"></button>`);
    paginationContainer.append(dot);
  }

  $(".dots-line").on("click", function () {
    const index = $(this).data("index");
    splide.go(index);
  });

  splide.on("move", (newIndex) => {
    $(".dots-line").removeClass("active");
    $(`.slider-dot[data-index="${newIndex}"]`).addClass("active");
  });

  $(".dots-line").first().addClass("active");
});
