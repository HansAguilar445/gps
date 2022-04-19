'use strict';

//Manitoba Institute of Trades and Technology
//Introduction to Third Party APIs
//Teacher: Andre Specht

//Topic: Callback functions

/*
	A callback function is a function passed into another function as an arguument,
	which is then invoked inside the other function to complete some kind of
	routine or action.

	Remember: a function is a data type, so we can pass it to another function
	as an argument.
*/

function greetings(name) {
	console.log(`Hello, ${name}.`);
}

function processName(callback) {
	let name = prompt('Please enter your name.');
	callback(name);
}

processName(greetings);