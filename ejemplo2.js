var express = require('express');
var app = express();

app.get("/family/:name?", function (request, response, next) {
	var name = request.params.name;
	switch(name)
	{
		case "franco":
		case "julia":
		case "fernanda":
			response.send("Welcome "+name);
		break;
		default:
			next();
	}	
});
app.get("/family/*?", function (request, response) {
	response.send("the member family isn't listed");	
});
app.get("/?", function (request, response)
{
	response.send("Hey Guy! What's up!");
});

app.listen(3000);
console.log("Welcome to exercise #2 of node.js\nPress Ctrl+C for exit");