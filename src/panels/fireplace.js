var React = require('react');
var $ = require('jquery');

var FireplacePanel = React.createClass({
    getInitialState: function() {
        return {}
    },

    componentDidMount: function() {
        
    },

    render: function() {
        return (
            <div className="container">
                <iframe 
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/0fYL_qiDYf0?loop=1&autoplay=1"
                    frameBorder="0"
                    className="video">
                </iframe>
            </div>
        )
    }
});

module.exports = FireplacePanel;
