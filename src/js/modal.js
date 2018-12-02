$(document).ready(function() {

  $('.title-phone_button').on('click', function() {
    $('.modal').show();
  });
  
  $('.popup-close').on('click', function() {
    $('.modal').hide();
  });

  $('.overlay').on('click', function() {
    $('.modal').hide();
  });

});