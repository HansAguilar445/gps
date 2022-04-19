'use strict';

//Manitoba Institute of Trades and Technology
//Introduction to Third Party APIs
//Teacher: Andre Specht

//Topic: getCurrentPosition

/*
	The 'getCurrentPosition' method retrieves the current geographic location of
	the device. The location is expressed as a set of geographic coordinates
	together with information about heading and speed. The location information 
	is returned in a 'Position' object.

	'getCurrentPosition' can succeed or fail. It accepts two optional callback 
	functions that will execute in each case respectively.active

	getCurrentPosition(success, error, {options});
*/

//The 'success' callback function
function showLocation(position) {
	//const longitude = position.coords.longitude;
	//const latitude = position.coords.latitude;

	//Object destructuring
	const { longitude, latitude, accuracy } = position.coords;
	console.log(`Longitude: ${longitude}\nLatitude: ${latitude}\nAccuracy: ${accuracy}`);
}

//The 'failure' callback function
function errorHandler() {
	throw new Error('Unable to obtain location');
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showLocation, errorHandler, { enableHighAccuracy: true });
} else {
	console.log('Geolocation is not supported by your browser.');
}