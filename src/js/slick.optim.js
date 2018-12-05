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
    asNavFor: '.production-slider_nav'
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
    nextArrow: '<div class="reviews-arrow reviews-arrow_right"></div>'
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