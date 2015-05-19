var mapOptions = {
  center: new google.maps.LatLng(32.5, -80.5),
  zoom: 5
};

var mapStyle = [
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
];

var image1 = {
  url: 'images/marker-red.png',
  size: new google.maps.Size(12, 12),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(6, 12),
  scaledSize: new google.maps.Size(12, 12)
};
var image2 = {
  url: 'images/marker-red.png',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 30)
};

var shape1 = {
    coords: [4,0,8,0,10,2,10,5,6,12,2,5,2,2],
    type: 'poly'
};

var shape2 = {
    coords: [12,1,20,1,25,7,25,13,16,30,6,13,6,7],
    type: 'poly'
};

var map = null;
var allMapMarkers = [];
var infowindow = null;



function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  setMarkers(haircuteryLocations);
  google.maps.event.addListener(map, 'zoom_changed', function() {
    applyMarkerImage();
  });
  // Map settings
  map.set('styles', mapStyle);
}

function applyMarkerImage() {
  if ( map.getZoom() > 12) {
    for (var i = 0; i < allMapMarkers.length; i++) {
      allMapMarkers[i].setIcon(image2);
      allMapMarkers[i].setShape(shape2);
    }
  } else {
    for (var i = 0; i < allMapMarkers.length; i++) {
      allMapMarkers[i].setIcon(image1);
      allMapMarkers[i].setShape(shape1);
    }
  }
}

function setMarkers(locations) {
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var myLatLng = new google.maps.LatLng(location[7], location[8]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image1,
        shape: shape1,
        title: location[1],
        zIndex: 3,
        salonNo: location[0],
        storeName: location[1],
        street: location[2],
        city: location[3],
        state: location[4],
        zip: location[5],
        phone: location[6]
    });
    allMapMarkers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
      if (infowindow != null) {
        infowindow.close();
      }
      applyMarkerImage();
      // map.setZoom(8);
      // map.setCenter(this.getPosition());
      if (map.getZoom()<=12) {
        this.setIcon(image2);
        this.setPosition(this.getPosition());
        this.setShape(shape2);
        this.setZIndex(4);
      }
      var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="firstHeading" class="firstHeading">'+this.storeName+'</h2>'+
            '<div id="bodyContent">'+
            '<p><b>'+this.street+'</b>, '+this.city+' <b>'+this.state+'</b>'+
            '<p>Phone: '+this.phone+'</p>'+
            '</div>'+
            '</div>';

      infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth:180,
            pixelOffset:0,
            zIndex: 2
          });
      infowindow.open(map,this);
    });

  }
}

google.maps.event.addDomListener(window, 'load', initialize);
