
const http =require("http")

//created server
const server = http.createServer((req,res)=>{
    
    res.end("we got the data by api")
})

//  start server
server.listen(8000,()=>console.log("server started")
)