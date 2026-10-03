const http = require("http");

let users = [
    { id: 1, name: "harsh" },
    { id: 2, name: "lalu" },
    { id: 3, name: "cash" },
];

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    const url = req.url;


    // ================= GET =================

    if (url === "/users" && req.method === "GET") {

        res.end(JSON.stringify(users));

    }


    // ================= POST =================

    else if (url === "/users" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const user = JSON.parse(body); // JSON string → JavaScript object

            users.push(user);

            console.log(users);

            res.end(JSON.stringify({ 
                message: "User added!",
                user: user
            }));

        });

    }


    // ================= DELETE =================

    else if (url.startsWith("/users/") && req.method === "DELETE") {

        const id = Number(url.split("/")[2]);

        const index = users.findIndex(user => user.id === id);

        if (index === -1) {

            res.statusCode = 404;

            return res.end(JSON.stringify({
                message: "User not found"
            }));

        }
          // delete
        const deletedUser = users.splice(index, 1);   //1 → kis index se start karna hai , 1 → kitne elements delete karne hain
        // data de rha hai server sa 
        res.end(JSON.stringify({
            message: "User deleted!",

            user: deletedUser[0]
        }));

    }


    // ================= PUT =================

    else if (url.startsWith("/users/") && req.method === "PUT") {

        const id = Number(url.split("/")[2]);

        const index = users.findIndex(user => user.id === id);
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
          const updateuser = JSON.parse(body)
          const index = users.findIndex(user => user.id === id);
            if (index === -1) {

                res.statusCode = 404;
    
                return res.end(JSON.stringify({
                    message: "User not found"
                }));
    
            }
            users[index] = { id: id, ...updateUser }; //chat gpt krr liya

            res.end(JSON.stringify({
                message: "User updated!",
                user: JSON.stringify(users[index])
            }));
            
    }) 

    }


    // ================= INVALID ROUTE =================

    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            message: "Route not found"
        }));

    }

});


server.listen(9000, () => {
    console.log("Server started on port 9000");
});