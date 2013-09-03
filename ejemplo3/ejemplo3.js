var express = require("express");
var app= express();
app.set("view engine", "jade");
app.set("view options", {layout:true});
app.set("views", __dirname+"/views");
app.get("/family/:name?", function (request, response, next) {
	var name = request.params.name;
	switch(name)
	{
		case "franco":
		case "julia":
		case "fernanda":
			response.render("family", {family: name});
			break;
		default:
			next();
	}
});
app.get("/family/*?", function (request, response) {
	response.render("family", {family: null});		
});
app.get("/?", function (request, response) {
	response.render("index");
});
app.listen(3000);
console.log("Example #3, to use of templates\nPress Ctrl+C for exit");