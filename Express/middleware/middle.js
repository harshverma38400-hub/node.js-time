// import fs from "fs"

const fs =require("fs")

function wrritingTheReq(filenmae){
       
    return (req,res,next)=>{

        fs.append("lol.txt",`${Date.now()} :${req.method}:${req.path}\n`),
        (err,data)=>{
            next()
        }
        
    }

}

module.exports={wrritingTheReq}