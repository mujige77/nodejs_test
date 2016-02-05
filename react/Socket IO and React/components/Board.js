var React = require('react');

var Board = React.createClass({
	getDefaultProps() {
		return {
			dance: 'disconnected'
		}
	},
	render() {
		return (<h1>Board : {this.props.stateProps.dance} </h1>);
	}
});

module.exports = Board;