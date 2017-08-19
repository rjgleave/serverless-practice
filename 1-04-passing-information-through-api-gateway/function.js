'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
	let min = parseInt(event.min);
	let max = parseInt(event.max);

	let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	//callback(null, generatedNumber);
	callback(null, { statusCode: 200, body: JSON.stringify(generatedNumber) });
}