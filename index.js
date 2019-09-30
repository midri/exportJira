/*Creates a mini web server which sends a "Hi everybody"
message in every case, regardless of the page requested. 
It is launched on the 8080 port*/

/*Required Libraries*/
/*Create WebServer:*/
var express = require('express'); // Loads the piece of middleware for sessions
var app = express();
const http = require('http');
const port = process.env.PORT || 3000;
app.listen(8080, () => { 
    console.log("connected")
});
const server = http.createServer();
server.listen(port);