const mongoose = require("mongoose");
const validator= require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    
    email:{
        type:String,
        required:true,
        validate(value){
            if(validator.isEmail(value)==false){
                throw new Error("Email is invalid");
            }
        }
    },
    password:{
        type:String,
        required:true, 
    },
    history:[
        {
            name:{
                type:String
            },
            timing:{
                type:String
            },
            fee:{
                type:Number
            },
            total:{
                type:Number
            },
            date:{
                type:Date
            }


        }
    ]
   
})

const User = mongoose.model('User',userSchema);
module.exports = User;