"use strict";

var React = require('react');
var ioClient = require('socket.io-client');
var APP = React.createClass({

	componentWillMount() {
		this.socket = ioClient('http://localhost:3000')
		this.socket.on('connect', () => {
			alert("Cennected: " + this.socket.id);
		})
	},

	render() {
		return (<h1>Hello World form React</h1>);
	}
});

//var React = require('react')
//var io = require('socket.io-client')
//
//var APP = React.createClass({
//
//	componentWillMount() {
//		this.socket = io('http://localhost:3000')
//		this.socket.on('connect', this.connect)
//	},
//
//	connect() {
//		alert("Connected: " +  this.socket.id)
//	},
//
//	render() {
//		return (<h1>Hello World from React</h1>)
//	}
//
//});

module.exports = APP;