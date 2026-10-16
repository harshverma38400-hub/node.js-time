import mongoose from "mongoose";
import userss from "./MOCK_DATA.json" with {type:"json"}
import express from "express"

const app =express()
const port = 9000

// middelware

app.use(express.json());

//mongo connect

mongoose
.connect("mongodb://127.0.0.1:27017/harsh-side")
.then(()=>console.log("succesfully connected with mongodb"))
.catch((err)=>console.log("ooopps",err))

// first schema
const userschema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String
    }
})

// then insert in model create a model

const Users = new mongoose.model('user',userschema)

app.get("/userss",(req,res)=>{

    return res.json(userss)
})

app.post("/userss",async(req,res)=>{
    const body = req.body
    const result= await Users.create({
        Firstname:body.first_name,
        lastname:body.last_name,
        email:body.email,
        gender:body.gender
    })

    console.log(result);
    
  return res.status(201).json({msg:"successfully"})

    
})

.listen(port,()=>{console.log("here we go again",port);
})

