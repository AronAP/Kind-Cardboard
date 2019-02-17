$(document).ready(function () {

  function eventModal(button, modal) {
    $(button).on('click', function () {
      $(modal).show();
      $(modal).addClass('modal-active');
      $('body').addClass('modal-open');
    });

    $('.popup-close').on('click', function () {
      $(modal).hide();
      $(modal).removeClass('modal-active');
      $('body').removeClass('modal-open');
    });

    $('.overlay').on('click', function () {
      $(modal).hide();
      $(modal).removeClass('modal-active');
      $('body').removeClass('modal-open');
    });
  }



  // title-button
  eventModal('.title-phone_button', '.modal-call');

  // calc-button
  eventModal('.button-calc', '.modal-calc');

  // 1st product button
  eventModal('.product_button__first', '.modal-product__first');

  // 2nd product button
  eventModal('.product_button__second', '.modal-product__second');

  // 3rd product button
  eventModal('.product_button__third', '.modal-product__third');

  // 4th product button
  eventModal('.product_button__fourth', '.modal-product__fourth');

  // info-button
  eventModal('.info-block_button', '.modal-call');


  // Mask
  $('.phone').mask('+7 (999) 999-9999');


  // Reset
  $('.form-reset').on('click', function () {
    $(this).parent().find('input').val('');
  });
});