/**
 * Created by tteogi on 2016. 1. 11..
 */
'use strict';

var React = require('react');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
var Link = Router.Link


var Whoops = React.createClass({
    render() {
        return (
            <div id="not-found">
                <h1>
                    Whoops...
                </h1>
                <p>
                    we cannot find the page that you have requested.
                </p>
                <Link to="/">Join as Audience</Link>
                <Link to="/speaker">Start the presentation</Link>
                <Link to="/board">View the board</Link>
            </div>
        )
    }
})



//var module1 = _interopRequireDefault(function() {
//    return new Whoops404()
//});
//exports.Whoops404 = module1['default']

module.exports = Whoops;