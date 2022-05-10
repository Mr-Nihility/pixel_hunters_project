$(document).on('ready', function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    asNavFor: '.slider-nav',
    fade: true,
    speed: 1500,
    infinite: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          slidesToShow: 1,
          pauseOnHover: true,
        },
      },
    ],
  });
  $('.slider-nav').slick({
    asNavFor: '.slider-for',
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          pauseOnHover: true,
        },
      },
    ],
  });
});
