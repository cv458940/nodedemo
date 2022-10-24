
// server.js
const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1> ");
    response.write("<h2>Chris Vazquez - k87d362</h2>" +
        "<p>Running node server on port 3002</p>");
    response.end();
}).listen(3002);