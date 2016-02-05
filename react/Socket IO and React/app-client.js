var React = require('react');
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var Whoops404 = require('./components/Whoops404')

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={APP}>
			<IndexRoute component={Audience} />
			<Route path="speaker" component={Speaker} />
			<Route path="board" component={Board} />
			<Route path="*" component={Whoops404}/>
		</Route>
	</Router>
);

//Router.run(routes, function(Handler) {
//	React.render(<Handler />, document.getElementById('react-container'));
//});

render(<Router>{routes}</Router>, document.getElementById('react-container'))