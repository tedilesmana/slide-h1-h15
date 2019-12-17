var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();

// connect mongo
mongoose.connect('mongodb://localhost/dilo')
    .then(db => console.log('db_conected'))
    .catch(err => console.log(err))

// app use
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// panggil router
require('./routes/route')(app);


var port = 3001;
app.listen(port, function() {
    console.log("Server brjalan dengan port" + port);
});