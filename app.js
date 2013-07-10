'use strict';
var express = require('express'),
    http = require('http');
var app = express();

// app.get('/hello', function(req, res){
//     var body = 'Hello World';
//     res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Length', body.length);
//     res.end(body);
// });

app.get('/hello', function(req, res) {
    res.send("Hello World");
});

app.listen(3000);
console.log('Listening on port 3000');

//console.log(http.createServer(app).listen(1337));