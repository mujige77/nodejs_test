var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({

    getInitialState() {
        return {
            status: 'disconnected',
            title: '',
            dance: 'yes please'
        }
    },

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
    },

    connect() {
        this.setState({ status: 'connected' });
    },

    disconnect() {
        this.setState({ status: 'disconnected' });
    },

    welcome(serverState) {
        this.setState({ title: serverState.title });
    },

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status}>
                </Header>
                {React.cloneElement(this.props.children, {
                    stateProps:this.state
                }
                )}
            </div>
        );
    }

});

//{React.cloneElement(this.props.children, {
//    title:this.state.title,
//    status:this.state.status
//})}

module.exports = APP;