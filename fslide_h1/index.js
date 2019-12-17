var http = require('http');

let data_array = [10, 20, 30];

let data_object = {
    'nama': 'tedi lesmana',
    'alamat': 'jakarta'
}

var server = http.createServer(function(req, res) {
    res.end("selamat datang di nodejs");
})

server.listen(8000);

console.log('server berjalan pada port 8000');
console.log(data_array);
console.log(data_object);

let JSON_data = JSON.stringify(data_object);
console.log(JSON_data);
console.log(JSON.parse(JSON_data));