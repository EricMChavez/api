const mongoose = require('mongoose');

exports.handler = function(event, context, callback) {
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
        body: "Thank you for your review"
        });
}