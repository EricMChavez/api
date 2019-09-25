const mongoose = require('mongoose');

exports.handler = function(event, context, callback) {
    console.log('this is the event.httpMethod')
    console.log(event.httpMethod)
    if (event.httpMethod !== "POST") {
        callback(null, {
            statusCode: 200,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
                },
            body: "This was not a POST request!"
            });
    }
    const parsedBody = JSON.parse(event.body)
    const url = "mongodb+srv://eric:pUNTOFHI6IGZ3EIZ@cluster0-4coym.gcp.mongodb.net/test?retryWrites=true&w=majority"
    mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

    const Schema = mongoose.Schema;

    const ReviewSchema = new Schema({
        name: String,
        jobTitle: String,
        reviewBody: String
    });
    const Review = mongoose.model('review', ReviewSchema);


    const review = new Review({
        name: parsedBody.name,
        jobTitle: parsedBody.jobTitle,
        reviewBody: parsedBody.reviewBody,
    })
    review.save()
    callback(null, {
        statusCode: 200,
        headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT",
        },
        body: "Thank you for your review"
        });
}
