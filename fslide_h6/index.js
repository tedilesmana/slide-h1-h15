var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const app = express();
const uploadData = require('express-fileupload');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app use
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(uploadData());


app.get('/', (req, res) => {
    res.render('index');
})

// method post

app.post('/proses', (req, res) => {
    console.log(req.body.nama);
    let nama = req.body.nama;
    let hobi = req.body.hobi;

    res.send(`nama saya ${nama} dan hobi saya ${hobi}`);
})


// method get

app.get('/proses', (req, res) => {
    let nama = req.body.nama;
    let hobi = req.body.hobi;

    res.send(`nama saya ${nama} dan hobi saya ${hobi}`);
})

// menangkap parameter
app.get('/proses/:id', (req, res) => {
    let id = req.params.id;

    res.send(`id saya adalah ${id}`);
})

// panggil router
const route = require('./routes/route');
app.use('/dilo', route);

var port = 3000;

app.listen(port, function() {
    console.log("Server brjalan dengan port" + port);
});