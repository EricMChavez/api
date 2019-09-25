var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: String,
    jobTitle: String,
    reviewBody: String
});

let reviewModel;

try {
    reviewModel = mongoose.model('review', ReviewSchema);
} catch (ex) {
    reviewModel = mongoose.model('review');
}

export default reviewModel; 