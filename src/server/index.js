const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    console.log("runnig use")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-methods", "GET,HEAD,POST,OPTIONS,PUT");
    
    next();
  });
const mongoose  = require('mongoose');

var users = require('./model.js');
var jsonParser =  bodyParser.json();
var dbconnect = require('./dbconnection')

//POST method 
app.post('/api/insertData', jsonParser, function(req, res){
    dbconnect();
    var data = req.body
    console.log("inside post",data)
    
  var userData = new users({
    "name" : data.name,
    "designation" : data.designation,
    "technology" : data.technology
  });
  userData.save(function(err, data) {
    if(err) {
      console.log("Error : ", err);
    } else {
      console.log("Success :" , data)
    }
  })
  console.log("userData : ", userData);
  res.send(userData)
})


//GET method
app.get('/api/getData', (req, res) => {
    dbconnect();
  
  users.find({}, function(err, data) {
    if(err) {
      console.log("Error : ", err);
    } else {
      console.log("Data : ", data);
      res.send(data)
    }
  })
});

//GET method for detail
app.get('/api/getDetail/:id',(req,res)=>{
    console.log("value of id >> ",req.params.id) 
    dbconnect();
    
    users.find({'_id': req.params.id}, function(err,data){
        if(err){
            console.log("Error : ",err)
        }
        else{
            console.log("Data Detail : ",data)
            res.send(data)
        }
    })
})

//PUT method
app.put('/api/update/:id',(req,res)=>{
  console.log("value of id >> ",req) 
  dbconnect();
  var data = req.body
  console.log("value in data >> ",data)
  users.update({'_id': req.params.id},
  {
    "name": data.name,
    "technology" : data.technology,
    "designation": data.designation
  }, function(err,data){
      if(err){
          console.log("Error : ",err)
      }
      else{
          console.log("Data Detail : ",data)
          res.send(data)
      }
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));