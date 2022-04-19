'use strict';

//Manitoba Institute of Trades and Technology
//Introduction to Third Party APIs
//Teacher: Andre Specht

//Topic: The Utilization of the 'geolocation' Interface/API

/*
	The Geolocation API allows the user to provide their location to web 
	applications if they so desire. For privacy reasons, the user is asked for 
	permissions to report location information.

	The Geolocation API is accessed via a call to 'navigation.geolocation'; this
	will cause the user's browser to ask them for permission to access their
	location data. If they accept, then the browser will use the best available
	functionality on the device to access this information (for example, GPS).
*/

/*
	The 'navigation' object is used for browser (client) detection. It can be used
	to get browser information such as 'cookieEnable', 'geolocation', and 
	'userAgent'.
*/

//console.log(navigator);
console.log(navigator.cookieEnabled);
console.log(navigator.geolocation);
console.log(navigator.language);
console.log(navigator.userAgent);