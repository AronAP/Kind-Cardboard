$(document).ready(function () {

  //Slider for Production block
  $('.production-slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000,
    asNavFor: '.production-slider_nav',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
          infinite: true,
          dots: true,
          fade: false,
          autoplay: true,
          prevArrow: '<div class="production-arrow production-arrow_left"></div>',
          nextArrow: '<div class="production-arrow production-arrow_right"></div>',
        }
      },
    ]
  });

  $('.production-slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    focusOnSelect: true,
    prevArrow: '<div class="production-arrow production-arrow_left"></div>',
    nextArrow: '<div class="production-arrow production-arrow_right"></div>',
    asNavFor: '.production-slider_for'
  });

  //Slider for Reviews block
  $('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="reviews-arrow reviews-arrow_left"></div>',
    nextArrow: '<div class="reviews-arrow reviews-arrow_right"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
          infinite: true,
        }
      },
    ]
  });

  //Slider for Main block
  $('.main-img').slick({
    accessibility: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.main-name'
  });

  $('.main-name').slick({
    accessibility: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.main-img'
  });

});
