var React = require('react');
var _ = require('lodash');
var $ = require('browserify-zepto');

var content = require('../constants/site_content');

var TiledBackground = React.createClass({
    getInitialState: function() {
        return {
            tile_width: '120',
            tile_height: '120'
        };
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.windowResize);
    },
    componenetWillUnmount: function() {
        window.removeEventListener('resize', this.windowResize);
    },
    windowResize: function() {
        this.forceUpdate();
    },
    generateTiles: function() {
        var tile_qty = this.determineTileQuantity();
        var image_qty = content.images.length - 1;
        var generatedTiles = [];
        
        // generate an array of random images
        for (i=tile_qty; i>0; i--) {
            // get an image from content.images using a random number
            // based on the total qty of images available
            generatedTiles.push({
                image: content.images[ _.random(0, image_qty) ]
            });
        }

        // return react elements of tiles
        return _.map(generatedTiles, function(tile) {
            var liStyle = {
                backgroundImage: 'url(' + content.imageLocation + tile.image + ')',
                width: this.state.tile_width + 'px',
                height: this.state.tile_height + 'px' 
            };

            return (
                <li style={ liStyle } key={ tile.image + Math.random() }/>
            );
        }, this);
    },
    determineTileQuantity: function() {
        // get window height/width, divide it by tile width/height, multiple the two to get total
        var w = $(window);
        var state = this.state;
        return Math.ceil( w.height()/state.tile_height ) * Math.ceil( w.width()/state.tile_width );
    },
    render: function() {
        return (
            <ul>
                { this.generateTiles() }
            </ul>
        );
    }
});

module.exports = TiledBackground;
