import http from "http"

const successresponse=(data,message)=>{
    
    return{
    message,
    data
    }}
const errorresponse=(message,statusCode)=>{
    
    return{
    message,
    statusCode
}}


http.createServer((req,res)=>{
    try {
        if(req.method==="GET"&&req.url==="/about"){

            res.end(JSON.stringify(successresponse(
                 { name:"harsh"},"we got data"
              
            )))
        }
        else{
            res.statusCode = 404;
            res.end(JSON.stringify(errorresponse(
                "we fucked up",404
            )))
    
        }
        
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message:"we fucked up"}))} 
}).listen(9000,()=>{console.log("serverstart");
})

