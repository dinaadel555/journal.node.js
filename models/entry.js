const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100,
    },
    content : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 100,
    },
    mood : {
        type : String,
        required : true,
        enum : ['happy', 'sad', 'neutral'],
    },
    tags : {
        type : [String],
    },

userId : { // 
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Journal',
    required : true,
},

timestamps : true,});

module.exports = mongoose.model('Entry', entrySchema);


