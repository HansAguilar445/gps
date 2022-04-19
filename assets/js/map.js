'use strict';

const loadingScreen = document.querySelector('.loading-screen');

//The 'success' callback function
function showLocation(position) {
	const { longitude, latitude } = position.coords;
	
	if (longitude && latitude) {

		loadingScreen.classList.add('hidden');
		mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc2FndWlsYXI0NDUiLCJhIjoiY2wxd2gxYWV0MTEwNjNkcWY4MmQ4bHRnOSJ9.S4uWOutectkOlHsdeFEGSg';
	
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			interactive: false,
			antialias: true,
			center: [longitude, latitude], // starting position [lng, lat]
			pitch: 40,
			zoom: 16 // starting zoom
		});
	}
}

//The 'failure' callback function
function errorHandler() {
	throw new Error('Unable to obtain user location');
}

window.onload = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showLocation, errorHandler, { enableHighAccuracy: true });
	} else {
		console.log('Geolocation is not supported by your browser.');
	}
}



