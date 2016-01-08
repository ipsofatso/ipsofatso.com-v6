var React = require('react');
var Tabs = require('react-simpletabs');

var About = require('./about');
var CV = require('./cv');
var Gallery = require('./gallery');

var Content = React.createClass({
    render: function() {
        return (
            <Tabs>
                <Tabs.Panel title='Landing'>
                    <div></div>
                </Tabs.Panel>

                <Tabs.Panel title='Portfilio'>
                    <Gallery />
                </Tabs.Panel>

                <Tabs.Panel title='About'>
                    <About />
                </Tabs.Panel>

                <Tabs.Panel title='CV'>
                    <CV />
                </Tabs.Panel>
            </Tabs>
        );
    }
});

module.exports = Content;
