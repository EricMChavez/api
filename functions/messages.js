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
    const url = process.env.DB_URL
    mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

    const Schema = mongoose.Schema;

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

    const message = new messageModel({
        name: parsedBody.name,
        email: parsedBody.email,
        messageBody: parsedBody.messageBody,
    })
    await message.save()
    mongoose.connection.close()

    return {
        statusCode: 200,
        headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT"
        },
        body: "Thank you for your message"
    }
}