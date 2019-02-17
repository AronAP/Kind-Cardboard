function initMap() {
  var myCoordinates = {lat: 54.752501, lng: 56.001928},
      popupContent = '<p class="content" style="font-size: 13px; text-align: center;"><span style="font-weight: 900;">Офис Доброго Картона</span><br>г. Уфа, Проспект октября, 46</p>',
      myMarkerImg = 'img/contacts/Marker-Cardboard.png';

  var optionsMap = {
    center: myCoordinates,
    zoom: 17,
  }

  var myMap = new google.maps.Map(document.getElementById('map'), optionsMap);
  
  var imageMarker = {
    url:myMarkerImg,
    scaledSize: new google.maps.Size(38, 55),
  }

  var myMarker = new google.maps.Marker({
    map: myMap,
    position: myCoordinates,
    icon: imageMarker,
    title: 'Добрый Картон'
  });

  var infowindow = new google.maps.InfoWindow({
        content: popupContent
    });

  myMarker.addListener('click', function() {
  infowindow.open(myMap, myMarker);
  });
}