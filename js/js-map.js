//window.addEventListener('load', function() {
	var mapField = document.querySelector('.js-map');
	var coordLat = 59.9385854;
	var coordLng = 30.3212369;

	function initMap() {
		var mapProp = {
			center: new google.maps.LatLng(coordLat, coordLng),
			zoom: 15
		};

		var map = new google.maps.Map(mapField, mapProp);
	}
//});