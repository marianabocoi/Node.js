var http = require("http");

//create a server object:
function createServer() {
  http
    .createServer(function (req, res) {
      switch (req.url) {
        case "/hello":
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify({ greeting: "Hello World!" })); //write a response to the client
          break;
        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.write(JSON.stringify({ error: "Error" })); //write a response to the client
      }
      res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080
  console.log("Sertver started on: http://localhost:8080/");
}

createServer();