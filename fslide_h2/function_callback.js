var http = require('http');

function callMe() {
    var hasil = 'Tedi lesmana';
    return hasil;
}

var server = http.createServer(function(req, res) {
    console.log('callMe()');
    res.end(callMe());
})

server.listen(8001);

console.log('server berjalan pada port 8001');