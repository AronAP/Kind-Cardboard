$(document).ready(function () {
  var menu = $('.header'),
      menuButton = $('.header-button'),
      menuLink = $('.header-menu_items');

      menuButton.on('click', function () {
        menuButton.toggleClass('header-button_active');
        menu.toggleClass('header_active');
      });

      menuLink.on('click', function () {
        menuButton.toggleClass('header-button_active');
        menu.toggleClass('header_active');
      });
});