// promise with async and await
//non-blocking
const fs =require("fs").promises

const readdata =async()=>{
    try{
    const data =await fs.readFile("data.ts")
    console.log("yuhu: ",data.toString());
    
    }
    catch{
        console.log("we got error");
        
    }
}

readdata()