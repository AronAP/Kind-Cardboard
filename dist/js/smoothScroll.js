  if (document.documentElement.clientWidth > 992) {
    function slowScroll(id) {
      var offset = 56;
      $('html, body').animate({
        scrollTop: $(id).offset().top - offset
      }, 800);
      return false;
    }
  }

  if (document.documentElement.clientWidth > 576 && document.documentElement.clientWidth <= 992) {
    function slowScroll(id) {
      var offset = 44;
      $('html, body').animate({
        scrollTop: $(id).offset().top - offset
      }, 800);
      return false;
    }
  }

  if (document.documentElement.clientWidth <= 576) {
    function slowScroll(id) {
      var offset = -1;
      $('html, body').animate({
        scrollTop: $(id).offset().top - offset
      }, 800);
      return false;
    }
  }
