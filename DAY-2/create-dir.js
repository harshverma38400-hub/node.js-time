
const { appendFile } = require("fs");
const path =require("path")
const fs= require("fs").promises


// mkdir()help to create folder
const create=async(folder)=>{
    try {
        await fs.mkdir(folder)
        console.log("here we go again");
    } catch (error) {
        console.log("its sucks");   
    }
}
create("harsh")


const wrirtefile=async(path,message)=>{
    await fs.writeFile(path,message)
        console.log("yup");
}
//createfile(path.join("harsh","demo.js"),"finally we reached the place")

// ya puarana data ko delete nhi krta hai and new data ko add bhi krta hai
const appnedfile=async(path,message)=>{
    await fs.appendFile(path,message)
        console.log("file updaten");
}
appnedfile(path.join("harsh","demo.js"), "yuhu u got me")


// its delete exsisting file create new one in the same place 
const reName=async(path,message)=>{
    await fs.rename(path,message)
        console.log("file chnaged");
}
reName(path.join("files","data.ts"),path.join("files","sample.tsx"))

