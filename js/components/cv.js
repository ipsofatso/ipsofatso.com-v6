var React = require('react'); 
var utils = require('./utils');

var CV = React.createClass({
    componentWillMount: function() {
        this.setState({
            horizontalPosition: utils.determineHorizontalPosition()
        });
    },
    render: function() {
        var className = 'article cv h_' + this.state.horizontalPosition;
        var style = {
            height: utils.determineArticleHeight() + 'px'
        };

        return (
            <div className={ className } style={ style }>
                <h3>Computer Skills</h3>
                <ul>
                    <li>Experienced with Macintosh, Windows, and Linux</li>
                    <li>Adobe Creative Suite (Photoshop, Illustrator, and InDesign)</li>
                    <li>Experienced with Git, Jira, Confluence</li>
                </ul>

                <h3>Web Based Technologies</h3>
                <ul>
                    <li>HTML & CSS (HTML5, Mustache, Handlebars, SASS, and LESS)</li>
                    <li>Javascript (jQuery, Backbone, Node, Express, Underscore/Lodash, Flux, and React)</li>
                    <li>Visualization Libraries (D3, and C3)</li>
                    <li>Worked with sites containing PHP, PERL and ASP, including CMS’s like Wordpress, and Joomla.</li>
                </ul>

                <h3>Work History</h3>
                <h4>1/2014-1/2016</h4>
                <h5>Front End Developer, Solfo/Connectivity Inc</h5>
                <p>Entirely Javascript based front end development - starting with node, backbone and mustache. Later on moved over React/Flux based interfaces. Tons of CSS along the way, including preprocessors like LESS and SASS. Also, quite a bit of visualization with D3/C3, and google maps API usage.</p>

                <h4>4/2010-1/2014</h4>
                <h5>Web Designer, Casting Networks Inc</h5>  
                <p>Focused on complex interfaces for the company's site. The site is a mix of job and social networking; agents submit talent on projects created by casting directors, recreating the casting process online.</p>

                <h4>5/2008-1/2009</h4>
                <h5>Content Development Manager, Universal Music Group</h5>
                <p>Established three web sites for the Digital Ops division. One site covered the entire group, another site covered the Mastering Studios and the last site was a support site for an internal file transfer service. Also managed and updated various print pieces.</p>

                <h4>2/2004-5/2008</h4>
                <h5>Web Designer, Superior Communications</h5>
                <p>Aided in the design and update of various client web sites. Primary designer for three continuous e-mail campaigns. Design and creation of print material as well as product photography.</p>

                <h3>Additional Information</h3>
                <ul>
                    <li>Amatuer photographer, published twice in major publications.</li>
                    <li>Amatuer UAV pilot - credited as 'Drone Operator' in a 2014 Art project "Site Visit", exhibited at the Kunst-Werke Institute in Berlin.</li>
                </ul>
            </div>
        );
    }
});

module.exports = CV;
