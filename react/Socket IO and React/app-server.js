"use strict";

var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var webServer = app.listen(3000);
var ioServer = require('socket.io').listen(webServer)

ioServer.sockets.on('connection', function(socket) {
    console.log("connected %s", socket.id)
})

console.log("Polling server is running at 'http://localhost:3000'");