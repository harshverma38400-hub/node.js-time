const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let url = req.url;
    let filepath;

    if (url === "/") {
        filepath = path.join(__dirname, "public", "index.html");
    } else {
        filepath = path.join(__dirname, "public", url);
    }

    fs.readFile(filepath, (err, data) => {

        if (err) {
            res.statusCode = 404;
            res.end("File Not Found");
            return;
        }

        res.end(data);
    });

});

server.listen(4000, () =>{console.log("server start");});