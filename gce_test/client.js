/**
 * Created by tteogi on 2016-09-03.
 */

'use strict'
var ioClient = require('socket.io-client')
var socket = ioClient('http://10.140.0.7:4646');
socket.on('message', function(data){
    console.log('client receive: message' + data)
});

var socket2 = ioClient('http://10.140.0.8:4646');
socket2.on('message', function(data){
    console.log('client receive: message' + data)
});