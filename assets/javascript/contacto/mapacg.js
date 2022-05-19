function initialize() {
	var a = {
		center: new google.maps.LatLng(17.0978263,-96.7136066),
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: !1,
		panControl: !1,
		zoomControl: !0,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		scaleControl: !1,
		streetViewControl: !0,
		mapTypeControlOptions: !1,
		styles: [
  {
    "featureType": "road",
    "stylers": [
      { "hue": "#5E00FF" },
      { "saturation": -79 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "saturation": -78 },
      { "hue": "#6600FF" },
      { "lightness": -47 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "lightness": 22 }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "hue": "#6600FF" },
      { "saturation": -11 }
    ]
  },{
  },{
  },{
    "featureType": "water",
    "stylers": [
      { "saturation": -65 },
      { "hue": "#1900FF" },
      { "lightness": 8 }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "weight": 1.3 },
      { "lightness": 30 }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "simplified" },
      { "hue": "#5E00FF" },
      { "saturation": -16 }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "saturation": -72 }
    ]
  },{
  }
]
	};
	a = new google.maps.Map(document.getElementById("cgmap"), a);
    var image = '../assets/images/icono-cg.png';

	var b = new google.maps.LatLng(17.0977904,-96.7132365);
	new google.maps.Marker({
		position: b,
		map: a,
        icon: image
	})

    
};