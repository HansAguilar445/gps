'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc2FndWlsYXI0NDUiLCJhIjoiY2wxd2gxYWV0MTEwNjNkcWY4MmQ4bHRnOSJ9.S4uWOutectkOlHsdeFEGSg';
const loadingScreen = document.querySelector('.loading-screen');

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	interactive: false,
	antialias: true,
	center: [0, 0], // starting position [lng, lat]
	pitch: 40,
	zoom: 17 // starting zoom
});

//The 'success' callback function
function showLocation(position) {
	const { longitude, latitude } = position.coords;
	
	if (longitude && latitude) {
		map.setCenter([longitude, latitude]);
		loadingScreen.classList.add('hidden');
	}
}

//The 'failure' callback function
function errorHandler() {
	throw new Error('Unable to obtain user location');
}

window.onload = () => {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showLocation, errorHandler, { enableHighAccuracy: true });
	} else {
		console.log('Geolocation is not supported by your browser.');
	}
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});