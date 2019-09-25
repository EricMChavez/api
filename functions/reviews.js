

exports.handler = function(event, context, callback) {
    console.log('this is the event.httpMethod')
    console.log(event.httpMethod)
    if (event.httpMethod !== "POST") {
        callback(null, {
            statusCode: 200,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT"
                },
            body: "This was not a POST request!"
            });
    }
}
