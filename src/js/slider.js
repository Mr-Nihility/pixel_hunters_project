$(document).on('ready', function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-nav',
    fade: true,
    speed: 500,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    // centerMode: true,
    // variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
