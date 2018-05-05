var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyParder.urlencoder({ extended: true}));
app.use(bodyParser.json());

var exhbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening on: http//localhost: " + PORT);
});