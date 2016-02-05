var React = require('react');

var Audience = React.createClass({
	getDefaultProps() {
		return {
			title: 'disconnected'
		}
	},
	render() {
		return (<h1>Audience : {this.props.stateProps.title}</h1>);
	}
});

module.exports = Audience;