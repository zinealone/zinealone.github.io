function Map() {
	var infoWindow;
	var markers = [];
	var map;
	var searchService;
	var sgLocation = {
		lat: 1.314,
		lng: 103.847
	};
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var labelIndex = 0;
	var __this = this;

	this.init = function(mapId) {
		infoWindow = new google.maps.InfoWindow();
		map = new google.maps.Map(document.getElementById(mapId), {
			center: sgLocation,
			zoom: 11
		});
		searchService = new google.maps.places.PlacesService(map);
	};
	this.searchByText = function(address, radios,callback) {
		var places = [];
		var count = 0;
		searchService.textSearch({
			location: sgLocation,
			radius: radios,	
			query: address
		}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK && results.length>0) {
				map.setCenter(results[0].geometry.location);
				for (var i = 0; i < results.length; i++) {
					__this.createMarker(results[i]);
					places.push({
						name: labels[count++ % labels.length],
						address: results[i].formatted_address
					});
				}
				callback(places);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	};

	this.clearAllMarkers = function() {
		if (markers.length > 0) {
			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(null);
			}
			labelIndex = 0;
		}
	};

	this.createMarker = function(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
			animation: google.maps.Animation.DROP,
			map: map,
			position: place.geometry.location,
			label: labels[labelIndex++ % labels.length],
		});
		markers.push(marker);
		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent(place.formatted_address);
			infoWindow.open(map, this);
		});
	}
	this.onError = function(msg) {
		infoWindow.setPosition(map.getCenter());
		infoWindow.setContent(msg);
		infoWindow.open(map);
	}
}