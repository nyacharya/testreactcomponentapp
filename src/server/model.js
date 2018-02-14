var mongoose = require('mongoose');
var Schema = mongoose.Schema; // <-- EDIT: missing in the original post
var users = new Schema({
    title     : String
  , name      : String
});
var userModel = mongoose.model("users", users);
module.exports = userModel;