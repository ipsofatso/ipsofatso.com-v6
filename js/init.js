var React = require('react');
var ReactDOM = require('react-dom');

var TopBar = require('./components/top_bar');
var Content = require('./components/content');
var Footer = require('./components/footer');
var Background = require('./components/tiled_background');

ReactDOM.render( <TopBar />, document.getElementById('top_bar') );
ReactDOM.render( <Content />, document.getElementById('content') );
ReactDOM.render( <Footer />, document.getElementById('footer') );
ReactDOM.render( <Background />, document.getElementById('tiled_background') );
