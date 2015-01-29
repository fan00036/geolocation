document.addEventListener("DOMContentLoaded", initFunc);

function initFunc() {
	if (navigator.geolocation) {
		var params = {
			enableHighAccuracy: false,
			timeout: 3600,
			maximumAge: 60000
		};
		navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params); 
	} else {
		alert('Sorry! Your browser does not support this function, also, you can change other browser to try it again. Thank you for your cooperation!');
	}
}


function reportPosition(position) {

	var mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&maptype=roadmap" + "&markers=color:red%7C" + position.coords.latitude + "," + position.coords.longitude


	var canvas = document.createElement("canvas");
	canvas.setAttribute("height", "400");
	canvas.setAttribute("width", "400");
	canvas.setAttribute("id", "myCanvas");

	document.querySelector('body').appendChild(canvas);

	var mycan = document.querySelector('#myCanvas');
	var context = mycan.getContext('2d');
	var img = document.createElement("img");
	img.onload = function () {
		context.drawImage(img, 0, 0);
	};
	img.src = mapUrl;

}

function gpsError(error) {
	var errors = {
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);
}