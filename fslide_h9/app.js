var username = process.env.USERNAME;
var password = process.env.PASSWORD;

console.log("username" + username);
console.log("password" + password);

process.env.APP_VERSION = "9.99.99";
process.env.APP_NAME = "kursus baba studio";

console.log("variabel env sudah di buat");

console.log("APP_VERSION = " + process.env.APP_VERSION);
console.log("APP_NAME = " + process.env.APP_NAME);