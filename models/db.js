const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log('MongoDB connection Successful');
    } else {
        console.log('Connection to MongoDB server has failed. Error Message: ' + err);
    }
});
require('./data.model');
