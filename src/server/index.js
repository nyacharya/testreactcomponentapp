const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const data = { body: 'Hello From Express', statusCode:200,
headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-methods": "GET,HEAD,POST,OPTIONS,PUT"
} }

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const mongoose  = require('mongoose');

var users = require('./model.js');


app.post('api/insertData', (req, res) => {
  users.save({"title" : "Tital", "name" : "Dikshit"}, function(err, data) {
    if(err) {
      console.log("Error : ", err);
    } else {
      console.log("Success :" , data)
    }
  })
})

app.get('/api/getData', (req, res) => {
  mongoose.connect('mongodb://localhost/test', function(err){
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // db.getCollection('Todos').find({});
    // db.close();
});
  console.log("get api running ");
  console.log("Users  :", users);
  var userData = new users({
    "name" : "Dikshit",
    "title" : "Tital"
  });
  // console.log("userData : ", userData);
  // userData.save(function(err, data) {
  //   if(err) {
  //     console.log("Error : ", err);
  //   } else {
  //     console.log("Success :" , data)
  //   }
  // })
  users.find({}, function(err, data) {
    if(err) {
      console.log("Error : ", err);
    } else {
      console.log("Data : ", data);
    }
  })
  // res.send({ express: 'Hello From Express', data });
});

app.listen(port, () => console.log(`Listening on port ${port}`));