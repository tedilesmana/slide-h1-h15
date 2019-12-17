var http = require('http');

// callback
const hitung = (angka1, angka2, cb) => {
    var hasil = angka1 + angka2;
    var result = `${angka1} + ${angka2} = ${hasil}`;
    cb(result);
}

const cb = (data) => {
    console.log('ini callback :' + data);
}

hitung(10, 20, cb);

var server = http.createServer(function(req, res) {
    res.end("selamat datang di nodejs");
})
server.listen(8012);
console.log('server berjalan pada port 8012');