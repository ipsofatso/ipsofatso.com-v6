var React = require('react');

var TopBar = React.createClass({
    render: function() {
        return (
            <div>
                <img src="images/ipsofatso_logo.png"/>
                <h1>ipso/fatso</h1>
                <h2>v6.0</h2>
            </div>
        );
    }
});

module.exports = TopBar;
