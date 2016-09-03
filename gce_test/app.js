'use strict'

var Rx = require('rxjs/Rx')
var http = require('http').Server()
var io = require('socket.io')(http)
var ioCient = require('socket.io-client')

var sockets = []

io.on('connection', function(socket){
    console.log('a user connected');
    sockets.add(socket);

    socket.on('message', function(msg){
        console.log('message: ' + msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
        var pos = sockets.indexOf(socket);
        sockets.slice(pos, 1)
    });
});

http.listen(4646, function(){
    console.log('listening on *:4646');
});

var foo = Rx.Observable.interval(1000)
foo.subscribe(
    (x) => {
        sockets.forEach((socket) => {
            socket.emit('message',"gogogogogo" + x);
        })
    },
    (err) => { console.log('error ' + err) },
    () => { console.log('done') }
)


var socket = ioCient('http://10.140.0.7:4646');
socket.on('message', function(data){
    console.log('client receive: message' + data)
});

var socket2 = ioCient('http://10.140.0.8:4646');
socket2.on('message', function(data){
    console.log('client receive: message' + data)
});