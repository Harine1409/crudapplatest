const mongoose = require('mongoose');

exports.connect = () => {
    try{

        mongoose.connect('mongodb+srv://admin:harine@cluster0.4rwyh.mongodb.net/merntutorial?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
        console.log("connected")
    } catch(err) {
        console.log(err);
        process.exit();
    }
}