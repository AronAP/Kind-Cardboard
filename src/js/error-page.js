//based on https://dribbble.com/shots/3913847-404-page

var eye       = document.getElementsByClassName('error__ghost-eyes'),
    pageX     = document.documentElement.clientWidth,
    pageY     = document.documentElement.clientHeight,
    mouseX    = 0,
    mouseY    = 0;

document.documentElement.addEventListener('mousemove', function (event) {

  //verticalAxis
  mouseY = event.pageY;
  var yAxis = mouseY / 4;

  //horizontalAxis
  mouseX = event.pageX;
  var xAxis = mouseX / 22;

  eye[0].style.transform = 'translate(' + xAxis + '%, ' + yAxis + '%)';

});
