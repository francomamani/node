var express = require("express");
var app = express();
app.get("/", function (request, response) {
	response.send('Hi! I am the example1 :D');
});
app.listen(3000);
console.log("Host: localhost:3000\nIf you want to exit only type Ctrl+C");
 