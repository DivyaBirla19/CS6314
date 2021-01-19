const mongoose = require("mongoose");
//const validator= require("validator");

const userSchema = new mongoose.Schema({
    docName:{
        type:String,
        required:true,
        
    },
    
    qualification:{
        type:String,
        required:true,
        
    },
    availability:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    fee:{
        type:Number,
        required:true
    },
    docImg:{
        type:String
    },
    experience:{
        type:Number,
        required:true
    }
   
})

const Doctor = mongoose.model('doctorInfo',userSchema);
module.exports = Doctor;