// Problem: we need a simple way to look at a user's badge count, and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

// run server with `node app.js` command in terminal

let http = require("http");

http
  .createServer(function(request, response) {
    homeRoute(request, response);
  })
  .listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");

// 2. Handle HTTP route GET / and POST / i.e. Home (searching side of things)
function homeRoute(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
}

// 3. Handle the HTTP route for GET /:username i.e. /camshan5, etc.

// 4. Function that handles the reading of files and merge in values
