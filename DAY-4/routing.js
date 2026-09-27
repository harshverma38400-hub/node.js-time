
const http =require("http")

http.createServer((req,res)=>{
    //req.url tells you which URL/path the client requested from your Node server
    const url = req.url
    if(url =="/")
    res.end("we got the data by api")
     else if(url=="/about")
        res.end("now ur in about section")
    else if(url=="/users")
        res.end("how many of users u looking for")
    else{
        res.statusCode= 404
        res.end("sorry are in wrong page")
    }
     
}).listen(8000,()=>console.log("server started"))

