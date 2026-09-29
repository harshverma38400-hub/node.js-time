const http = require("http");
let users =[
    {id:1,name:'harsh'},
    {id:2,name:'lalu'},
    {id:3,name:'cash'},
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json' )
    
    const url =req.url
    // GET request
    if(url==="/users" && req.method==="GET"){
        res.end(JSON.stringify(users))
    } 
    else if (url === "/users" && req.method === "POST") {
        let body="";
        req.on("data",(chunk)=>{
                 body+=chunk;
        })
        req.on("end",()=>{
            const user = JSON.parse(body)   // parse is use to convert json in javascript form
            users.push(user)
            console.log(users);
            
             res.end( `for client${JSON.stringify(users)}`)

             
        })
    }
    
    })

server.listen(5000,()=>{console.log("server start")})
