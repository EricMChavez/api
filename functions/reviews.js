const mongoose = require('mongoose');

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 200,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT"
                },
            body: "This was not a POST request!"
            };
    }
    const parsedBody = JSON.parse(event.body)

    console.log(parsedBody)

    const url = process.env.DB_URL
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
    await review.save()
    return {
        statusCode: 200,
        headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT"
        },
        body: "Thank you for your review"
    }
}

