import mongoose from "mongoose";
//import userss from "./MOCK_DATA.json" with {type:"json"}
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
    },
}, {timestamps:true })

// then insert in model create a model

const Users = new mongoose.model('user',userschema)

app.get("/users",async(req,res)=>{
     const fromdatabase =  await Users.find({})
    const data = `
       <ul>
     ${fromdatabase.map(info=>`<li>${info.Firstname}-${info.email}</li>`).join("")}
       </ul>
    `
    return res.send(data)
})

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



app
.route("/api/users/:id")
.get(async(req,res)=>{

    const userid = await Users.findById(req.params.id)
    if(!userid){res.status(404).json({err : "useer not found"}) }
    return res.json(userid)
})
.patch(async(req,res)=>{
    const update = await Users.findByIdAndUpdate(req.params.id,{lastname:"heho  changed"})
    return res.json({ message:"success"})
})
.delete(async(req,res)=>{
    const del = await Users.findByIdAndDelete(req.params.id)
    return res.json({ message:"success",
        deletesection:del})
    
})

app.listen(port,()=>{console.log("here we go again",port);
})

