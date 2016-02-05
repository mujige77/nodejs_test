var React = require('react');

var Speaker = React.createClass({
	getInitialState () {
		return {
			status: 'disconnected'
		}
	},
	render() {
		//const { status } = this.props.params
		return (<h1>Speaker : {this.props.stateProps.status}</h1>);
	}
});

module.exports = Speaker;