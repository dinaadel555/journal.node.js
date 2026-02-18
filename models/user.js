const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
    },
    isConfirmed : {
        type : Boolean,
        default : false,
    },
    confirmationToken : {
        type : String,
    },
    tokenExpires : { 
        type : Date
    },
    timestamops : true,});


    module.exports = mongoose.model('Journal', journalSchema);