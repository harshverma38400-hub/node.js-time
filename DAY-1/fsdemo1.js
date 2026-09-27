
const { log } = require("console");
const fs = require("fs")

fs.readFile("node1.js",(err,data)=>{
 if(err)
    {
     console.log("error found:"+ err);
 }
 else(data)  
  console.log("data: "+  data); //data.toString()
    
 
})
console.log("yess complete");
