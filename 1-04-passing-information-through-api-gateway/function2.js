console.log('Loading function');

exports.handler = (event, context, callback) => {
	let min = parseInt(event.min);
	let max = parseInt(event.max);
	
	if(isNaN(min)) {
        context.fail("Invalid parameter 'min'");
    };
    if(isNaN(max)) {
        context.fail("Invalid parameter 'max'");
    };

	let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
    callback(null, { statusCode: 200, body: JSON.stringify(generatedNumber) });

}