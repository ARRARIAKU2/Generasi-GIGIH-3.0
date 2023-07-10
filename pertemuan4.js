const http = require("http");

const server = http.createServer((req, res) => {
    // res.writehead(200, {"Content-Type": "text/html"});
    res.setHeader("Content-Type", "text/plain");
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Hello World");
    } else if (req.url === "/users") {
        res.statusCode = 200;
        res.end("User List");
    } else if (req.url === '/product') {
        const product = [
            {
                id: 1,
                name: 'SemsdsdpaDFF'
            },
            {
                id: 2,
                name: 'BsDSFDddH'
            }
        ]
        res.statusCode = 200;
        res.end(JSON.stringify(product));
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

