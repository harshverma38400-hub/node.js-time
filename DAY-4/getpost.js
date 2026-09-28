const http = require("http");

http.createServer((req, res) => {

    const url = req.url;

    if (url === "/") {
        res.end("the starting part");
    }

    else if (url === "/about" && req.method === "GET") {
        res.end("GET: display about");
    }

    else if (url === "/users" && req.method === "POST") {
        let body="";
        req.on("data",(chunk)=>{
                 body+=chunk;
        })
        req.on("end",()=>{
             console.log("we have data now",body)
             res.writeHead(200, { 'Content-Type': 'application/json' });
             res.end( `for client${body}`)

             
        })
        // agar hamna already response bhj diya hai to Aap do response ak sath nhi bbhj sakta
        // res.statusCode = 201;
        // res.end("POST: create user");
    }

    else {
        res.statusCode = 404;
        res.end("sorry wrong page");
    }

}).listen(8000, () => console.log("server started"));

//data → data aa raha hai
//end  → data aana complete ho gaya