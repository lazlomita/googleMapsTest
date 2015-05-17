function initialize() {
  var mapCanvas = document.getElementById('map-canvas')
  var mapOptions = {
    center: new google.maps.LatLng(32.5, -80.5),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var icon1 = 'http://citytrack.me/Romer/images/marker-red.png';
  var icon2 = 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png';
  var icon3 = 'http://citytrack.me/Romer/images/marker.png'

  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(35.5, -75.5),
    map: map,
    icon: icon1
  });
  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(32.5, -75.5),
      map: map,
      icon: icon3
    });
  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(32.5, -80.5),
    map: map,
    icon: icon2
  });

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));

  map.set('styles', [
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        { "saturation": 37 },
        { "color": "#5f5f60" },
        { "weight": 1.9 },
        { "lightness": -29 }
      ]
    },{
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "weight": 1.5 },
        { "color": "#94371e" }
      ]
    },{
      "featureType": "road.highway",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#2447b5" },
        { "saturation": -64 },
        { "lightness": 17 }
      ]
    }
  ]);
}

google.maps.event.addDomListener(window, 'load', initialize);
