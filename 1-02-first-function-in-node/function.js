// from Savjee - 
// added a couple of log comments

'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
	let min = 1;
	let max = 10;

	let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log('Random number is');
	console.log(generatedNumber);

	/*  callback(null, generatedNumber);
	 note:  the above will generate an 'internal server error' when you 
	  use API gateway and Node 6.x.
		Use the callback below instead.
	 */

	 callback(null, { statusCode: 200, body: JSON.stringify(generatedNumber) });
}