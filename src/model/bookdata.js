const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    author : String,
    genre: String,
    bookno : String ,
    image : String,
    imageA :String

});


var bookdata= mongoose.model('bookdata',bookSchema);
module.exports = bookdata;