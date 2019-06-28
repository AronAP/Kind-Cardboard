$(window).resize(function () {
  if (document.documentElement.clientWidth < 576) {
    var menu = $('.header'),
      menuButton = $('.header-button'),
      menuLink = $('.header-menu_items');

    menuButton.on('click', function () {
      menuButton.toggleClass('header-button_active');
      menu.toggleClass('header_active');
      $('body').toggleClass('modal-open');
    });

    menuLink.on('click', function () {
      menuButton.toggleClass('header-button_active');
      menu.toggleClass('header_active');
      $('body').toggleClass('modal-open');
    });
  }
});
