import http from "http";
const successresponse = (data, message) => {
    return {
        success: true,
        message,
        data
    };
};
const errorresponse = (message, statusCode = 500) => {
    return {
        statusCode,
        message,
    };
};
http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    try {
        const url = req.url;
        if (req.method === "GET" && url === "/api/about") {
            res.end(JSON.stringify(successresponse({ name: "harsh" }, "you got the data")));
        }
        else
            res.end(JSON.stringify(errorresponse("routenot found", 404)));
    }
    catch {
        res.end(JSON.stringify(errorresponse("Internal Server Error", 500)));
    }
}).listen(8000, () => {
    console.log("serverstart");
});
//# sourceMappingURL=server.js.map