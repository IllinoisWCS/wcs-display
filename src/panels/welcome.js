var React = require('react');

/**
 * Welcome panel.
 */
var WelcomePanel = React.createClass({
    getInitialState: function() {
        return {
            index: 0
        };
    },

    render: function() {
        return (
            <div className="panel panel-fill">
                <div className="panel-heading">
                    <h2>Welcome</h2>
                </div>
                <div className="panel-body welcome-panel">
                    <img src="img/officers.jpg" className="welcome-image" />
                </div>
            </div>
        );
    }
});

module.exports = WelcomePanel;
