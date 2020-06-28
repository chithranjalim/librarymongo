const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const signupSchema = new Schema({
    entry: {type: Schema.Types.ObjectId, ref: 'entry', required: true},
    fname: String,
    lname: String,
    DOB: String,
    gender :{type: Schema.Types.ObjectId, ref: 'gender', required: true},
    address: String ,
    username :String,
    password : String,
    email: String,
    mob: String

});
var signupdata= mongoose.model('signupdata',signupSchema);
module.exports = signupdata;