/**
 * Created by tteogi on 2015. 11. 25..
 */
"use strict"

var msgpack = require('msgpack')
var msgpack5 = require('msgpack5')()
var msgpackjs = require('msgpack-js')
var msgpacklite = require('msgpack-lite')
var ProtoBuf = require("protobufjs")
var fs = require("fs")
var path = require("path")


var builder = ProtoBuf.loadProtoFile(path.join(__dirname, "protocol.proto"))
var Message = builder.build("ClientPacket")


function test() {
    let objs = [{"a" : 1, "b" : 2.444, "c" : [1, 2, 3], "fadin" : "note", 'todefjsidkdk': ["fafsadf","fdafasf", "fspafjposijf",
        "fjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkds" +
        "fjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfa" +
        "dfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "fjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkds" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "dfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "fjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkds" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrjfjdassfsdfsadffdsfsdfsdfsfsafipifsad" +
        "pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121pdsadwqdeqfewfcdxž1112121212121212121piojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipdsadwqdeqfewfcdxž1112121212121212121"

        ]
        , 'ierkdisksksk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'fdkja0lk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]},
        {"a" : 1, "b" : 2, "c" : [1, 2, 3], "fadin" : "note", 'todefjsidkdk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'ierkdisksksk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'fdkja0lk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]},
        {"a" : 1, "b" : 2, "c" : [1, 2, 3], "fadin" : "note", 'todefjsidkdk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'ierkdisksksk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'fdkja0lk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]},
        {"a" : 1, "b" : 2, "c" : [1, 2, 3], "fadin" : "note", 'todefjsidkdk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'ierkdisksksk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]
        , 'fdkja0lk': ["fafsadf","fdafasf", "fspafjposijf", "fjdasipifsadifjsadpiojsdasfdsfadfjklfaoiaewfjkdsfjdsaoipfewrj"]}
    ];

    let login_user = new Message.Request.LoginUser()
    login_user.username = objs[0].todefjsidkdk[3]
    login_user.is_off = 1
    login_user.token_value = objs[0].todefjsidkdk[2]
    login_user.account_type = 33



    objs.push({"a":1})
    let testLoop = 1000
    objs[4].b = "c"
    let unpack;
    let start;
    let encode;
    let packTime;

    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        unpack = msgpack.pack(objs[i%objs.length])
    }
    packTime = new Date().getTime() - start;
    console.log("msgpack - " + packTime);

    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        msgpack.unpack(unpack)
    }
    packTime = new Date().getTime() - start;
    console.log("msgpack unpack - " + packTime);


    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        unpack = login_user.encode()
    }
    packTime = new Date().getTime() - start;
    console.log("protobufjs - " + packTime);

    let bffer = unpack.toArrayBuffer()
    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        Message.Request.LoginUser.decode(bffer)
    }
    packTime = new Date().getTime() - start;
    console.log("protobufjs unpack - " + packTime);

    start = new Date().getTime()
    encode  = msgpack5.encode
    for (let i = 0; i < testLoop; i ++) {
        unpack = encode(objs[i%objs.length])
    }
    packTime = new Date().getTime() - start;
    console.log("msgpack5 pack- " + packTime);

    let decode  = msgpack5.decode
    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        decode(unpack)
    }
    packTime = new Date().getTime() - start;
    console.log("msgpack5 unpack - " + packTime);

    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        unpack = msgpackjs.encode(objs[i%objs.length])
    }
    packTime = new Date().getTime() - start;
    console.log("msgpackjs - " + packTime);

    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        msgpackjs.decode(unpack)
    }
    packTime = new Date().getTime() - start;
    console.log("msgpackjs unpack - " + packTime);


    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        unpack = msgpacklite.encode(objs[i%objs.length])
    }
    packTime = new Date().getTime() - start;
    console.log("msgpacklite - " + packTime);

    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        msgpacklite.decode(unpack)
    }
    packTime = new Date().getTime() - start;
    console.log("msgpacklite unpack - " + packTime);
    
    start = new Date().getTime();
    for (let i = 0; i < testLoop; i ++) {
        unpack = msgpacklite.encode(objs[i%objs.length])
    }
    packTime = new Date().getTime() - start;
    console.log("msgpacklite encoder - " + packTime);

    var dlist = []
    for (let i = 0; i < testLoop; i ++) {
        var decoder = msgpack.Decoder();
        decoder.on("data", function(chunk) {
            dlist.push(chunk)
        }).decode(responseData)
    }
    packTime = new Date().getTime() - start;
    console.log("msgpacklite decoder - " + packTime);
}

test()
