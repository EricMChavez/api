var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const getModel = require('./getModel');

const MessageSchema = new Schema({
    name: String,
    email: String,
    messageBody: String
});

export default getModel('message', MessageSchema); 