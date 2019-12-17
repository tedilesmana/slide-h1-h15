var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const app = express();

// views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// panggil router
require('./routes/route')(app);


var port = 3002;
app.listen(port, function() {
    console.log("Server brjalan dengan port" + port);
});