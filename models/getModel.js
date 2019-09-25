module.exports = (modelName, modelSchema) => {
    function modelAreadyDeclared () {
        try {
            mongoose.model(modelName)  // it throws an error if the model is still not defined
                return true
            } catch (e) {
                return false
            }
        }

    const isAreadyDeclared = modelAreadyDeclared();
    
    // check if the model is already declared
    if (!isAreadyDeclared) {
        return mongoose.model(modelName, modelSchema);
    } else {
        let model;

        try {
            model = mongoose.model(modelName, modelSchema);
        } catch (ex) {
            model = mongoose.model(modelName);
        }

        return model;
    }
}