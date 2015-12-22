var React = require('react');
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router';

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
	<Route path="/" component={APP}>
		<IndexRoute component={Audience} />
		<Route path="speaker" component={Speaker}></Route>
		<Route path="board" component={Board}></Route>
	</Route>
);

//Router.run(routes, function(Handler) {
//	React.render(<Handler />, document.getElementById('react-container'));
//});

render(<Router>{routes}</Router>, document.getElementById('react-container'))