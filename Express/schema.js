
//import userss from "./MOCK_DATA.json" with {type:"json"}
// import express from "express"
// import fs from "fs"

// import userRoutes from "./routes/users.js"
// import {connectionMongo} from "./connections/connection.js"
// import {wrritingTheReq} from "./middleware/middle.js"


 const fs = require("fs")
 const express = require("express")
 const userRoutes =require("./routes/users")

 const {connectionMongo} =require("./connections/connection")

 const {wrritingTheReq}= require("./middleware/middle")
const app =express()
const port = 9000


// middelware

app.use(express.json());

app.use(wrritingTheReq)

//mongo connect

connectionMongo("mongodb://127.0.0.1:27017/harsh")


//routes jo bhi users pa aya ga use userRoutes m bhj do
app.use("/users", userRoutes)


app.listen(port,()=>{console.log("here we go again",port);
})

