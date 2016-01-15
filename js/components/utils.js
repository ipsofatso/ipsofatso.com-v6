var _ = require('lodash');
var $ = require('browserify-zepto');

var utils = {
    determineHorizontalPosition: function() {
        var possiblePositions = ['left', 'center', 'right'];
        var randomIndex = _.random(0,2);
        return possiblePositions[randomIndex];
    },
    determineVerticalPosition: function() {
        var possiblePositions = ['top', 'center', 'bottom'];
        var randomIndex = _.random(0,2);
        return possiblePositions[randomIndex];
    },
    determineArticleHeight: function() {
        return Math.ceil( $(window).height() / 1.5 );
    },
};

module.exports = utils;
