var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    email: String,
    messageBody: String
});

let messageModel

try {
    messageModel = mongoose.model('message', MessageSchema);
} catch (ex) {
    messageModel = mongoose.model('message');
}

export default messageModel; 