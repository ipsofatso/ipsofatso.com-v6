var React = require('react');
var Moment = require('moment');

var Footer = React.createClass({
    render: function() {
        var thisYear = Moment().format('YYYY');
        
        return (
            <span className="copywrite">
                &copy; { thisYear } Ipso/Fatso Heavy Industries
            </span>
        );
    }
});

module.exports = Footer;
