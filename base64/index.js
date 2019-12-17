var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/route');
const uploadData = require('express-fileupload');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(uploadData());

const route = require('./routes/route');
app.use('/dilo', route)

app.get('/', (req, res) => {
    res.render('index');
})

var port = 3003;

app.listen(port, function() {
    console.log("Server brjalan dengan port" + port);
});