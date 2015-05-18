// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to
// (0,32) to correspond to the base of the flagpole.

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(32.5, -80.5),
    zoom: 5
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // set the locations as markes of the map
  setMarkers2(map, haircuteryLocations);
}

function setMarkers2(map, locations) {
  var image2 = {
    url: 'images/marker-red.png',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 30),
    scaledSize: new google.maps.Size(12, 12)
  };
  var shape = {
      coords: [4,0,8,0,10,2,10,5,6,12,2,5,2,2],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var myLatLng = new google.maps.LatLng(location[7], location[8]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image2,
        shape: shape,
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
  }
}

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'images/marker-red.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(32, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(16, 30)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [12,1,20,1,25,7,25,13,16,30,6,13,6,7],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var myLatLng = new google.maps.LatLng(location[7], location[8]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: location[1],
        zIndex: 3
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
