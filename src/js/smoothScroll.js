function slowScroll(id) {
  var offset = 56;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 800);
  return false;
}