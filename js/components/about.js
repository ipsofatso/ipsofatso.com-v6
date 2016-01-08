var React = require('react');
var utils = require('./utils');

var About = React.createClass({
    componentWillMount: function() {
        this.setState({
            horizontalPosition: utils.determineHorizontalPosition()
        });
    },
    render: function() {
        var className = 'article about h_' + this.state.horizontalPosition;
        var style = {
            height: utils.determineArticleHeight() + 'px'
        };

        return (
            <div className={ className } style={ style }>
                <p>Born and raised in southern California, and based in Pasadena. Ipso/Fatso has been spreading its flavor of design to the masses since 2004.</p>
                <p>It would be nice to hear about your project and what I can do to help, send me an email and I will be in contact.</p>
                <p>This site was created using React, SASS, Lodash, and built with Gulp. The animation is all css, no jQuery. <a href="https://github.com/ipsofatso/ipsofatso.com-v6">Source code</a></p>
            </div>
        );
    }
});

module.exports = About;
