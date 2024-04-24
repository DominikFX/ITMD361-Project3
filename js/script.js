function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.891716, -87.605617);
  var mySecondLoc = new google.maps.LatLng(41.867907, -87.612656);
  var thirdLoc = new google.maps.LatLng(41.875799, -87.618797);
	var mapOptions = {
		center: myLocation,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.DEFAULT,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'media/iit-icon.png'
	});

  var marker2 = new google.maps.Marker({
    position: mySecondLoc,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'media/iit-icon.png'
  });

  var marker3 = new google.maps.Marker({
    position: thirdLoc,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'media/iit-icon.png'
  });

	var contentString = '<h1>Navy Pier</h1><p>One of the newest attractions of Navy Pier is Flyover Chicago. It is an awesome way to summarize Chicago. </p>';
  var secondString = '<h1>Shedd Aquarium</h1><p>Shedd Aquarium contains a lot of fish. It has various kinds as well as has some interactive portions. Very well recommended. </p>';
  var thirdString = '<h1>Buckingham Fountain</h1><p>This is one space the is very simple yet very calm and jawdropping. It is a relaxing place to be and maybe even get a mist of water. </p>';

	var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: secondString
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: thirdString
  });

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});

  google.maps.event.addListener(marker2, 'mouseover', function() {
      infowindow2.open(myMap, marker2);
  	});

    google.maps.event.addListener(marker3, 'mouseover', function() {
      infowindow3.open(myMap, marker3);
  	});
}

google.maps.event.addDomListener(window, 'load', init);