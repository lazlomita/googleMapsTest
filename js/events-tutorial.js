var mapOptions = {
  center: new google.maps.LatLng(32.5, -80.5),
  zoom: 5
};

var image1 = {
  url: 'images/marker-red.png',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 30),
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

var map;
var allMapMarkers = [];



function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  setMarkers(haircuteryLocations);
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if ( this.getZoom() > 12) {
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
  });
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
      // map.setZoom(8);
      // map.setCenter(this.getPosition());
      if (map.getZoom()<=12) {
        this.setIcon(image2);
        this.setShape(shape2);
        this.setZIndex(4);
      }
    });

  }
}

google.maps.event.addDomListener(window, 'load', initialize);
