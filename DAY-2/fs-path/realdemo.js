
const fs = require("fs").promises

const path =require("path")

const filedata = path.join(__dirname,"files","data.ts")

const filegetter =async(file)=>{

    try{
    const url = await fs.readFile(file)
    console.log("we got data from url",url.toString());}

    catch(error){
      console.log("we stuck");
      
    }
}

filegetter(filedata)

