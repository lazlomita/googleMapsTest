var map;
var desiredCenter = new google.maps.LatLng(36.6069293,-82.3518713);

function initialize() {

  var roadAtlasStyles = [
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        { hue: '#ff0022' },
        { visibility: 'off' },
        { saturation: 60 },
        { lightness: -20 }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        { hue: '#2200ff' },
        { lightness: -40 },
        { visibility: 'off' },
        { saturation: 30 }
      ]
    },{
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        { hue: '#f6ff00' },
        { saturation: 50 },
        { gamma: 0.7 },
        { visibility: 'off' }
      ]
    },{
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { visibility: 'simplified' },
        { saturation: 30 },
        { lightness: -30 }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' },
        { saturation: 98 }
      ]
    },{
      featureType: 'administrative.country',
      elementType: 'all ',
      stylers: [
        { hue: '#0022ff' },
        { visibility: 'on' },
        { saturation: 70 },
        { lightness: -30 },
        { gamma: 0.90 }
      ]
    },{
      featureType: 'administrative.province',
      elementType: 'all ',
      stylers: [
        { hue: '#0022ff' },
        { visibility: 'on' },
        { saturation: 50 },
        { lightness: -10 },
        { gamma: 0.90 }
      ]
    },{
      featureType: 'administrative.locality',
      elementType: 'all ',
      stylers: [
        { hue: '#0022ff' },
        { visibility: 'on' },
        { saturation: 50 },
        { lightness: -10 },
        { gamma: 0.90 }
      ]
    },{
      featureType: 'administrative.neighborhood',
      elementType: 'all ',
      stylers: [
        { hue: '#0022ff' },
        { visibility: 'simplified' },
        { saturation: 50 },
        { lightness: -10 },
        { gamma: 0.90 }
      ]
    },{
      featureType: 'administrative.land_parcel',
      elementType: 'all ',
      stylers: [
        { hue: '#0022ff' },
        { visibility: 'simplified' },
        { saturation: 50 },
        { lightness: -10 },
        { gamma: 0.90 }
      ]
    },{
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        { hue: '#ff0000' },
        { visibility: 'off' },
        { lightness: -70 }
      ]
    }
  ];

  var mapOptions = {
    zoom: 5,
    center: desiredCenter,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.TERRAIN , 'usroadatlas']
    }
  };


  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var styledMapOptions = {
    name: 'My first configured map'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');


	/*var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});*/

	map.data.loadGeoJson('js/haircutery.json');
	// selects the feature
	map.data.addListener('click', function(event) {
		event.feature.setProperty('isColorful', true);
		//infowindow.open(map,event.feature);
	});
	// is set to true.
	map.data.setStyle(function(feature) {

    var icon1 = 'http://citytrack.me/Romer/images/marker-red.png';
    var icon2 = 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png';
    var icon3 = 'http://citytrack.me/Romer/images/marker.png'

		var iconForFeature = icon3;
		if (feature.getProperty('isColorful')) {
			iconForFeature = icon2;
		}
		return {icon:iconForFeature};
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
