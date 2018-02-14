const {MongoClient,ObjectID}= require('mongodb')

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.getCollection('Todos').find({});
    db.close();
});


// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/Todos';

// MongoClient.connect(url, function(err, db) {
// if(db){
//     var cursor = db.collection('Employee').find();

//     cursor.each(function(err, doc) {

//         console.log(doc);

//     });
// }
// }); 