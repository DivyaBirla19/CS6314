const mongoose = require('mongoose');
const express = require('express');
const session  = require('express-session');
const passport = require('passport');
const fetch = require('node-fetch');
const passportLocal = require("passport-local").Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const User =require("./Model/User");
const Doctor=require("./Model/Doctor");

try {
   
    
    mongoose.connect( "mongodb+srv://SurakshaCarev01:Springs@2019@cluster0.qi15q.mongodb.net/doctorInfo", { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    

});


  } catch (e) {
    console.log("could not connect");
  }

const app = express();
app.use(express.json())
//MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
var sess={
    secret:'XpresVPNS',
   cookies:{},
   resave:true,
   saveUninitialized:true,
}  
app.use(session(sess))
app.use(cookieParser(sess.secret));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


  
app.post("/login",(req,res)=>{
    User.findOne({email:req.body.email},async(err,result)=>{
        if(err)
            return res.send(400);
        else{       console.log("Success");
                    console.log(result);
                if(bcrypt.compareSync(req.body.password,result.password)){
                    console.log("VALID USER");
                    return res.send({
                        name:result.name,
                        email:result.email,
                        history:result.history
                    })
                }
                else
                    res.send(400)
                
        }
    })
   
})
app.post("/update", (req,res)=>{
    console.log(req.body.name);
    connection.db.collection("doctorInfo", function(err, collection){
        const user = collection.findOne({docName:req.body.name},async (err,result)=>{
            if(err)
                {console.log(err);
                 res.sendStatus(400);
                }
            else{
                if(result!==null){
                    console.log(result)
                    let updateOne = null
                   collection.updateOne({
                        docName:req.body.name
                    },{
                        $set:{
                           docName:req.body.name,
                           qualification: req.body.qualification,
                           availability:req.body.availability,
                           timing:req.body.timing,
                           fee:Number(req.body.fee),
                           experience:Number(req.body.experience)
                        }
                    }).then((updated)=>{
                        updateOne=updated
                    }).catch((err)=>{
                        console.log(err);
                    })
                    console.log(updateOne)
                    return res.send("Success");
                }
                else{
                    console.log("I AM HERE");
                
                var ObjectID = require('mongodb').ObjectID;
                var user = {
                    _id: new ObjectID(),
                    docName:req.body.name,
                    qualification: req.body.qualification,
                    availability:req.body.availability,
                    timing:req.body.timing,
                    fee:Number(req.body.fee),
                    experience:Number(req.body.experience),
                    docImg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                 }
                collection.insertOne(user);
                return res.send("Success")
                }
            }
            
        })
        
    }); 

    
})
app.get("/pricing",(req,res)=>{
    console.log("IN Pricing")

connection.db.collection("doctorInfo", function(err, collection){
    collection.find({}).toArray(function(err, data){
       
        return res.send(data); 
    })
}); 
})

app.post("/signup",(req,res)=>
{
    console.log(req.body);
    User.findOne({email:req.body.email},async(err,result)=>{
        if(err) throw err;
        if(result) res.send("User Already Exists");
        if(!result){
            let hashedPassword = await bcrypt.hash(req.body.password,8)
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:hashedPassword,
                history:[]
            })
            newUser.save();
            res.send(JSON.stringify({
                name:req.body.name,
                email:req.body.email,
                history:newUser.history
            }))
        }
    })
    
    
})




app.listen(8001,()=>{
    console.log("SESSION IS RUNNING");
})

