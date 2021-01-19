const User = require('./Model/User');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports= function(passport){
    console.log("I AM HERE")
    passport.use(
        new localStrategy((email,password,done)=>{
            console.log("I AM HERE")
            User.findOne({email:email},(err,user)=>{
                if(err) throw err;
                if(!user) return done(null,false);
                bcrypt.compare(password,user.password,(err,result)=>{
                    if(err) throw err;
                    if(result===true)
                    return done(null,user);
                    else
                    return done(null,false);
                })

            })
        })
    )
    passport.serializeUser((user,cb)=>{
        cb(null,user.id);
    })
    passport.deserializeUser((id,cb)=>{
        User.findOne({__id:id},(err,user)=>{
            cb(err,user);
        })

    })
}