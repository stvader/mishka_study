//window.addEventListener('load', function() {
	

	function initMap() {
		var mapField = document.querySelector('.js-map');
		var coordLat = 59.938773;
		var coordLng = 30.323051;
		var officeCenter = new google.maps.LatLng(coordLat, coordLng);
		var svgMarker = 'img/icon-map-pin.svg';
		var mapProp = {
			center: officeCenter,
			zoom: 17,
			disableDefaultUI: true,
			zoomControl: true,
			zoomControlOptions: {
    			style: google.maps.ZoomControlStyle.DEFAULT 
			},
			mapTypeControl: true,
			mapTypeControlOptions: {
			    style: google.maps.MapTypeControlStyle.DEFAULT
			}
			/*panControl: true,
		    
		    mapTypeControl: true,
		    scaleControl: true,
		    streetViewControl: true,
		    overviewMapControl: true,
		    rotateControl: true*/
		};
		var map = new google.maps.Map(mapField, mapProp);
		var marker = new google.maps.Marker({
			position: officeCenter,
			icon: svgMarker
		});
		marker.setMap(map);
		
	}
//});