var http = require('http');

//normal function
function hitung(angka1, angka2) {
    var hasil = angka1 + angka2;
    var result = `${angka1} + ${angka2} = ${hasil}`;
    return result;
}

// arrow function
const hitungArrow = (angka1, angka2) => {
    var hasil = angka1 + angka2;
    var result = `${angka1} + ${angka2} = ${hasil}`;
    return result;
}

var server = http.createServer(function(req, res) {
    res.end(hitungArrow(5, 4));
})

server.listen(4002);

console.log('server berjalan pada port 4002');