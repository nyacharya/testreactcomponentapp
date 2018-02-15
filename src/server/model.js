var mongoose = require('mongoose');
var Schema = mongoose.Schema; // <-- EDIT: missing in the original post
var users = new Schema({
    designation     : String,
   name      : String,
   technology: String,
});
var userModel = mongoose.model("users", users);
module.exports = userModel;