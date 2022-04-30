const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("users",schema)