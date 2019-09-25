var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const getModel = require('./getModel');

const ReviewSchema = new Schema({
    name: String,
    jobTitle: String,
    reviewBody: String
});

export default getModel('review', ReviewSchema); 