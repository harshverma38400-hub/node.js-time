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
        res.statusCode = 201;
        res.end("POST: create user");
    }

    else {
        res.statusCode = 404;
        res.end("sorry wrong page");
    }

}).listen(8000, () => console.log("server started"));