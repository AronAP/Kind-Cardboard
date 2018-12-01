$(document).ready(function () {

  $('.production-slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.production-slider_nav'
  });

  $('.production-slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    prevArrow: '<div class="production-arrow production-arrow_left"></div>',
    nextArrow: '<div class="production-arrow production-arrow_right"></div>',
    asNavFor: '.production-slider_for'
  });

  $('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="reviews-arrow reviews-arrow_left"></div>',
    nextArrow: '<div class="reviews-arrow reviews-arrow_right"></div>'
  });

});