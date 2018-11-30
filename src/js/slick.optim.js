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

});