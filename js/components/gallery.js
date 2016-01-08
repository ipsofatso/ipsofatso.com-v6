var React = require('react');
var _ = require('lodash');
var utils = require('./utils');
var Modal = require('responsive-modal');

var content = require('../constants/site_content');

var Gallery = React.createClass({
    componentWillMount: function() {
        this.setState({
            horizontalPosition: utils.determineHorizontalPosition()
        });
    },
    viewImage: function(e) {
        var url = _.chain(e.target.attributes.style.value)
            .trim('background-image:url')
            .trim('(')
            .trim(');')
            .value();

        var modal = new Modal();

        modal.wrapper.className = 'image_modal';
        modal.wrapper.attributes += 'data-rm-close';
        modal.content.innerHTML = '<img data-rm-close src="'+url+'";/><a data-rm-close>Close</a>';
        modal.content.attributes += 'data-rm-close';
        modal.content.className = 'modal_content';
    },
    render: function() {
        var className = 'gallery h_' + this.state.horizontalPosition;
        var style = {
            height: utils.determineArticleHeight() + 'px'
        };
        var images = _.map(content.images, function(image) {
            var liStyle = {
                backgroundImage: 'url(' + content.imageLocation + image + ')'
            };

            return (
                <li style={ liStyle } key={ image + Math.random() } onClick={ this.viewImage }/>
            );
        }, this);

        return (
            <div className={ className } style={ style }>
                <ul>
                    { images }
                </ul>
            </div>
        );
    }
});

module.exports = Gallery;
