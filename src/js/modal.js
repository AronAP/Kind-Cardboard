$(document).ready(function() {

  $('.header-phone_button').on('click', function() {
    $('.overlay').show();
  });
  
  $('.popup-close').on('click', function() {
    $('.overlay').hide();
  });

});