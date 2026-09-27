const fs =require("fs")


const readablestream =fs.createReadStream("large-file.txt",{
    // encoding :"utf8" jo data read kra ga usa string ki from m dikhana k liya 
    encoding: "utf8"  //,start: 0, end: 3
})

readablestream.on("data",(chunk)=>{
    console.log(`we got the data in ${chunk.length}chunks`,chunk);
    
})

readablestream.on("end",()=>{
    console.log("its finally ends ");
    
})

// extra
// const writefile = async(file,message)=>{
//     await fs.writeFile(file,message)
//     console.log("done");
    
// }
// writefile(path.join("duck.tsx"),"here we go ")
