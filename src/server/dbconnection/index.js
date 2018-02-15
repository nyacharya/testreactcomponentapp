var mongoose = require('mongoose');
var  dbconnect = function(){
    mongoose.connect('mongodb://localhost:27017/test', function(err){
        if(err){
            return console.log('Unable to connect to MongoDb server');
        }
        console.log('Connected to MongoDB server');
    
        // db.getCollection('Todos').find({});
        // db.close();
    });
}
module.exports = dbconnect;