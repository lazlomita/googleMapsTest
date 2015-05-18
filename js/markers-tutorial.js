function initialize() {
  var mapCanvas = document.getElementById('map-canvas')
  var mapOptions = {
    center: new google.maps.LatLng(32.5, -80.5),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var icons = {
    icon1: {
      name: 'Icon 1',
      icon: 'http://citytrack.me/Romer/images/marker-red.png'
    },
    icon2: {
      name: 'Icon 2',
      icon: 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png'
    },
    icon3: {
      name: 'Icon 3',
      icon: 'http://citytrack.me/Romer/images/marker.png'
    }
  };

  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  }

  var features = [
     {
       position: new google.maps.LatLng(35.5, -75.5),
       type: 'icon1'
     }, {
       position: new google.maps.LatLng(32.5, -75.5),
       type: 'icon2'
     }, {
       position: new google.maps.LatLng(32.5, -80.5),
       type: 'icon3'
     }
  ];
  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }


  // Map settings
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
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
