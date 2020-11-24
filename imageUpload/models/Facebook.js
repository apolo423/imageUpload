const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacebookSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

module.exports = Facebook = mongoose.model('facebook',FacebookSchema,'facebook');