var http = require('http');
// syncronous

console.log('satu');
console.log('dua');
console.log('tiga');

// Asyncronous
console.log('################');
console.log('################');
console.log('satu');
setTimeout(() => {
    console.log('dua');
}, 800)
console.log('tiga');

// jawaban latihan
setTimeout(() => {
    console.log('################');
    console.log('################');
}, 1000)
setTimeout(() => {
    console.log('satu');
}, 1000)
setTimeout(() => {
    console.log('dua');
}, 2000)
setTimeout(() => {
    console.log('tiga');
}, 3000)

var server = http.createServer(function(req, res) {
    res.end("selamat datang di nodejs");
})
server.listen(8022);