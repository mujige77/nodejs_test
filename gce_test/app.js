'use strict'

var Rx = require('rxjs/Rx')
var http = require('http').Server()
var io = require('socket.io')(http)

var sockets = []

io.on('connection', function(socket){
    console.log('a user connected');
    sockets.push(socket);

    socket.on('message', function(msg){
        console.log('server receive message: ' + msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
        var pos = sockets.indexOf(socket);
        sockets.slice(pos, 1)
    });
});

http.listen(4646, '10.140.0.7', function(){
    console.log('listening on *:4646');
});

var foo = Rx.Observable.interval(10000)
foo.subscribe(
    (x) => {
        console.log("try")
        sockets.forEach((socket) => {
            socket.emit('message',"gogogogogo" + x);
        })
    },
    (err) => { console.log('error ' + err) },
    () => { console.log('done') }
)