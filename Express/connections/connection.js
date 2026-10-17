// import mongoose from "mongoose"

const mongoose = require("mongoose")

let connectionMongo =(url)=>{

    
 return mongoose
.connect(url)
.then(()=>console.log("succesfully connected with mongodb"))
.catch((err)=>console.log("ooopps",err))
}

module.exports={connectionMongo}