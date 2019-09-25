const mongoose = require('mongoose');

exports.handler = function(event, context, callback) {
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
    }else{
    
    callback(null, {
        statusCode: 200,
        headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT"
        },
        body: "Thank you for your review"
        });
    }
}
